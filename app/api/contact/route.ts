import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sendInquiryEmail } from '@/lib/email';

const DATA_DIR = path.join(process.cwd(), 'data', 'inquiries');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

// Maximum accepted request body size (bytes). The form's combined field limits
// are far below this; the cap exists to reject abusive oversized payloads.
const MAX_BODY_SIZE = 64 * 1024; // 64 KB

// Per-field length limits, mirrored by the client-side form validation so an
// unreasonably long value is rejected safely rather than forwarded to email.
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

async function readInquiries(): Promise<Inquiry[]> {
  try {
    if (!existsSync(DATA_FILE)) return [];
    const raw = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeInquiries(inquiries: Inquiry[]): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  await writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  // Reject oversized payloads before parsing.
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_SIZE) {
    return NextResponse.json({ error: 'Request body too large.' }, { status: 413 });
  }

  // Parse the body defensively: a malformed payload is a client error (400),
  // not a server error.
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

  // Server-side validation — never trust client-side validation.
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

  // Optional fields — cap lengths so a large value cannot reach email/storage.
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

  // Rate limit: max 5 submissions per email per day
  const existing = await readInquiries();
  const receivedAt = new Date().toISOString();
  const today = receivedAt.slice(0, 10);
  const todaySubmissions = existing.filter(
    (i) => i.email.toLowerCase() === email.toLowerCase() && i.receivedAt.slice(0, 10) === today
  );
  if (todaySubmissions.length >= 5) {
    return NextResponse.json({ error: 'Daily submission limit reached. Please try again tomorrow.' }, { status: 429 });
  }

  // Accept the client timestamp only if it is a valid date; otherwise fall back
  // to server time so an invalid value cannot break email formatting.
  const submittedAtRaw = typeof payload.submittedAt === 'string' ? payload.submittedAt : '';
  const submittedAt = Number.isNaN(Date.parse(submittedAtRaw)) ? receivedAt : submittedAtRaw;

  const inquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
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

  // 1. Send notification email (critical — StudioDev must receive the lead)
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
    // Do not expose internal details; log a safe diagnostic server-side
    console.error('Contact inquiry email delivery failed:', emailError);
    return NextResponse.json(
      { error: 'We couldn\'t send your inquiry right now. Please try again.' },
      { status: 500 }
    );
  }

  // 2. Persist inquiry only after email delivery succeeded
  try {
    existing.push(inquiry);
    await writeInquiries(existing);
  } catch (persistError) {
    console.error('Contact inquiry persistence failed:', persistError);
    // Email was delivered — client was notified of success, but persistence failed.
    // This is a degraded state. Return success to the client but flag for follow-up.
    return NextResponse.json(
      { success: true, id: inquiry.id, notice: 'Inquiry received. Follow-up processing may be delayed.' },
      { status: 201 }
    );
  }

  return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
}
