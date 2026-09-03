import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';
import clientPromise from '@/lib/mongodb';

const MAX_BODY_SIZE = 64 * 1024; // 64 KB

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  email: 254,
  company: 150,
  projectType: 100,
  projectDescription: 5000,
  projectStatus: 100,
  budget: 100,
  timeline: 100,
  preferredDate: 20,
  preferredTime: 20,
  additionalInfo: 5000,
};

interface Inquiry {
  id: string;
  name: string;
  email: string;
  emailNormalized: string;
  company: string;
  projectType: string;
  projectDescription: string;
  projectStatus: string;
  budget: string;
  timeline: string;
  preferredDate: string;
  preferredTime: string;
  additionalInfo: string;
  submittedAt: string;
  receivedAt: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_SIZE) {
    return NextResponse.json({ error: 'Request body too large.' }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_SIZE) {
      return NextResponse.json({ error: 'Request body too large.' }, { status: 413 });
    }
    body = raw ? JSON.parse(raw) : null;
  } catch {
    return NextResponse.json({ error: 'Malformed request body.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: 'Malformed request body.' }, { status: 400 });
  }
  const payload = body as Record<string, unknown>;

  const name = toTrimmedString(payload.name);
  const email = toTrimmedString(payload.email);
  const projectType = toTrimmedString(payload.projectType);
  const projectDescription = toTrimmedString(payload.projectDescription);

  if (!name || name.length < 2) {
    return NextResponse.json({ error: 'Full name is required (minimum 2 characters).' }, { status: 400 });
  }
  if (name.length > MAX_LENGTHS.name) {
    return NextResponse.json({ error: 'Full name must be 100 characters or fewer.' }, { status: 400 });
  }
  if (!email || !validateEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  if (email.length > MAX_LENGTHS.email) {
    return NextResponse.json({ error: 'Email address must be 254 characters or fewer.' }, { status: 400 });
  }
  if (!projectType) {
    return NextResponse.json({ error: 'Project type is required.' }, { status: 400 });
  }
  if (projectType.length > MAX_LENGTHS.projectType) {
    return NextResponse.json({ error: 'Project type must be 100 characters or fewer.' }, { status: 400 });
  }
  if (!projectDescription || projectDescription.length < 20) {
    return NextResponse.json({ error: 'Project description is required (minimum 20 characters).' }, { status: 400 });
  }
  if (projectDescription.length > MAX_LENGTHS.projectDescription) {
    return NextResponse.json({ error: 'Project description must be 5,000 characters or fewer.' }, { status: 400 });
  }

  const company = toTrimmedString(payload.company);
  const projectStatus = toTrimmedString(payload.projectStatus);
  const budget = toTrimmedString(payload.budget);
  const timeline = toTrimmedString(payload.timeline);
  const preferredDate = toTrimmedString(payload.preferredDate);
  const preferredTime = toTrimmedString(payload.preferredTime);
  const additionalInfo = toTrimmedString(payload.additionalInfo);

  const optionalFields = {
    company,
    projectStatus,
    budget,
    timeline,
    preferredDate,
    preferredTime,
    additionalInfo,
  };
  for (const [key, value] of Object.entries(optionalFields)) {
    if (value.length > MAX_LENGTHS[key]) {
      return NextResponse.json({ error: `${key} must be ${MAX_LENGTHS[key]} characters or fewer.` }, { status: 400 });
    }
  }

  try {
    const client = await clientPromise();
    const db = client.db('studiodev');
    const collection = db.collection('inquiries');

    const emailNormalized = email.toLowerCase();
    const now = new Date();
    const startOfDay = new Date(now.setUTCHours(0, 0, 0, 0));

    const todayCount = await collection.countDocuments({
      emailNormalized,
      receivedAt: { $gte: startOfDay },
    });

    if (todayCount >= 5) {
      return NextResponse.json({ error: 'Daily submission limit reached. Please try again tomorrow.' }, { status: 429 });
    }
  } catch (dbError) {
    console.error('Rate limit check failed:', dbError);
    // In case of DB failure, we fail closed to prevent spam
    return NextResponse.json({ error: 'Service temporarily unavailable.' }, { status: 500 });
  }

  const receivedAt = new Date().toISOString();
  const submittedAtRaw = typeof payload.submittedAt === 'string' ? payload.submittedAt : '';
  const submittedAt = Number.isNaN(Date.parse(submittedAtRaw)) ? receivedAt : submittedAtRaw;

  const inquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    emailNormalized: email.toLowerCase(),
    company,
    projectType,
    projectDescription,
    projectStatus,
    budget,
    timeline,
    preferredDate,
    preferredTime,
    additionalInfo,
    submittedAt,
    receivedAt,
  };

  try {
    await sendInquiryEmail({
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      projectType: inquiry.projectType,
      projectDescription: inquiry.projectDescription,
      projectStatus: inquiry.projectStatus,
      budget: inquiry.budget,
      timeline: inquiry.timeline,
      preferredDate: inquiry.preferredDate,
      preferredTime: inquiry.preferredTime,
      additionalInfo: inquiry.additionalInfo,
      submittedAt: inquiry.submittedAt,
    });
  } catch (emailError) {
    console.error('Contact inquiry email delivery failed:', emailError);
    return NextResponse.json(
      { error: 'We couldn\'t send your inquiry right now. Please try again.' },
      { status: 500 }
    );
  }

  try {
    const client = await clientPromise();
    const db = client.db('studiodev');
    await db.collection('inquiries').insertOne(inquiry);
  } catch (persistError) {
    console.error('Contact inquiry persistence failed:', persistError);
    return NextResponse.json(
      { success: true, id: inquiry.id, notice: 'Inquiry received. Follow-up processing may be delayed.' },
      { status: 201 }
    );
  }

  return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
}
