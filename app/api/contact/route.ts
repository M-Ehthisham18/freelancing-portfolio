import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';
import clientPromise from '@/lib/mongodb';
import {
  PROJECT_TYPES,
  PROJECT_STATUSES,
  BUDGET_RANGES,
  TIMELINE_OPTIONS,
} from '@/lib/contact-constants';

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
  retentionReviewAt?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  // 0. Header & Origin Validation
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.startsWith('application/json')) {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 415 });
  }

  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  const isLocal = process.env.NODE_ENV === 'development';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;

  const allowedOrigins = new Set<string>();
  if (siteUrl) allowedOrigins.add(siteUrl);
  if (vercelUrl) allowedOrigins.add(vercelUrl);
  if (isLocal) allowedOrigins.add('http://localhost:3000');

  const validateOrigin = (url: string | null) => {
    if (!url) return false;
    try {
      const originUrl = new URL(url).origin;
      return allowedOrigins.has(originUrl);
    } catch {
      return false;
    }
  };

  const isTrusted = origin ? validateOrigin(origin) : (referer ? validateOrigin(referer) : false);

  if (!isTrusted && !isLocal) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  // 1. IP Rate Limit Check
  try {
    const client = await clientPromise();
    const db = client.db('studiodev');
    const ipRateLimitCol = db.collection('rate_limits_ip');

    // Ensure TTL index exists (idempotent)
    // Note: In a high-traffic production app, this would be handled via a migration script.
    // For this implementation, we ensure it exists to guarantee cleanup.
    await ipRateLimitCol.createIndex({ createdAt: 1 }, { expireAfterSeconds: 900 });

    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    const now = new Date();
    const windowStart = new Date(now.getTime() - 15 * 60 * 1000);

    const ipCount = await ipRateLimitCol.countDocuments({
      ip: clientIp,
      createdAt: { $gte: windowStart },
    });

    if (ipCount >= 5) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    await ipRateLimitCol.insertOne({
      ip: clientIp,
      createdAt: now,
    });
  } catch (ipLimitError) {
    console.error('IP rate limit check failed:', ipLimitError);
    return NextResponse.json({ error: 'Service temporarily unavailable.' }, { status: 500 });
  }

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

  // 1. Honeypot Check
  if (toTrimmedString(payload.website_url)) {
    return NextResponse.json({ error: 'Security verification failed.' }, { status: 400 });
  }

  // 2. Turnstile Verification
  const turnstileToken = toTrimmedString(payload.turnstileToken);
  if (!turnstileToken) {
    return NextResponse.json({ error: 'Security verification is required.' }, { status: 400 });
  }

  try {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      console.error('TURNSTILE_SECRET_KEY is not configured');
      return NextResponse.json({ error: 'Service temporarily unavailable.' }, { status: 500 });
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: turnstileToken,
      }),
    });

    if (!verifyRes.ok) {
      throw new Error(`Cloudflare Siteverify returned ${verifyRes.status}`);
    }

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Security verification failed. Please try again.' }, { status: 400 });
    }
  } catch (verifyError) {
    console.error('Turnstile verification failed:', verifyError);
    return NextResponse.json({ error: 'Service temporarily unavailable.' }, { status: 500 });
  }

  const name = toTrimmedString(payload.name);
  const email = toTrimmedString(payload.email);
  const projectType = toTrimmedString(payload.projectType);
  const projectDescription = toTrimmedString(payload.projectDescription);

  // 3. Payload Schema Hardening - Unexpected Fields Check
  const allowedFields = new Set([
    'name', 'email', 'company', 'projectType', 'projectDescription',
    'projectStatus', 'budget', 'timeline', 'preferredDate', 'preferredTime',
    'additionalInfo', 'submittedAt', 'turnstileToken', 'website_url'
  ]);

  const actualFields = Object.keys(payload);
  const unexpectedFields = actualFields.filter(field => !allowedFields.has(field));
  if (unexpectedFields.length > 0) {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

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
  if (!PROJECT_TYPES.includes(projectType as typeof PROJECT_TYPES[number])) {
    return NextResponse.json({ error: 'Invalid project type selected.' }, { status: 400 });
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

  // Enum validation for optional fields
  if (projectStatus && !PROJECT_STATUSES.includes(projectStatus as typeof PROJECT_STATUSES[number])) {
    return NextResponse.json({ error: 'Invalid project status selected.' }, { status: 400 });
  }
  if (budget && !BUDGET_RANGES.includes(budget as typeof BUDGET_RANGES[number])) {
    return NextResponse.json({ error: 'Invalid budget range selected.' }, { status: 400 });
  }
  if (timeline && !TIMELINE_OPTIONS.includes(timeline as typeof TIMELINE_OPTIONS[number])) {
    return NextResponse.json({ error: 'Invalid timeline selected.' }, { status: 400 });
  }

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

    // Ensure compound index exists for rate limiting (idempotent)
    await collection.createIndex({ emailNormalized: 1, receivedAt: 1 });
    await collection.createIndex({ retentionReviewAt: 1 });

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

    const retentionDate = new Date();
    retentionDate.setFullYear(retentionDate.getFullYear() + 2);
    const retentionReviewAt = retentionDate.toISOString();

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
      retentionReviewAt,
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
