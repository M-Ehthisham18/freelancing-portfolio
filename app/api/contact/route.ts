import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'inquiries');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

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
  try {
    const body = await request.json();

    // Server-side validation
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const projectType = String(body.projectType || '').trim();
    const projectDescription = String(body.projectDescription || '').trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Full name is required (minimum 2 characters).' }, { status: 400 });
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!projectType) {
      return NextResponse.json({ error: 'Project type is required.' }, { status: 400 });
    }
    if (!projectDescription || projectDescription.length < 20) {
      return NextResponse.json({ error: 'Project description is required (minimum 20 characters).' }, { status: 400 });
    }

    // Rate limit: max 5 submissions per email per day
    const existing = await readInquiries();
    const today = new Date().toISOString().slice(0, 10);
    const todaySubmissions = existing.filter(
      (i) => i.email.toLowerCase() === email.toLowerCase() && i.receivedAt.slice(0, 10) === today
    );
    if (todaySubmissions.length >= 5) {
      return NextResponse.json({ error: 'Daily submission limit reached. Please try again tomorrow.' }, { status: 429 });
    }

    const inquiry: Inquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name,
      email,
      company: String(body.company || '').trim(),
      projectType,
      projectDescription,
      projectStatus: String(body.projectStatus || '').trim(),
      budget: String(body.budget || '').trim(),
      timeline: String(body.timeline || '').trim(),
      preferredDate: String(body.preferredDate || '').trim(),
      preferredTime: String(body.preferredTime || '').trim(),
      additionalInfo: String(body.additionalInfo || '').trim(),
      submittedAt: String(body.submittedAt || new Date().toISOString()),
      receivedAt: new Date().toISOString(),
    };

    existing.push(inquiry);
    await writeInquiries(existing);

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 });
  }
}
