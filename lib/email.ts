import { Resend } from 'resend';

export interface InquiryEmailData {
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
}

function formatField(label: string, value: string): string {
  return `${label}:\n${value || '—'}\n`;
}

export function buildInquiryEmailBody(data: InquiryEmailData): string {
  const preferredConsultation = [data.preferredDate, data.preferredTime].filter(Boolean).join(' at ');
  return [
    'New Project Inquiry',
    '',
    'A prospective client has submitted an inquiry through the StudioDev contact form.',
    '',
    '---',
    '',
    formatField('Client Name', data.name),
    formatField('Client Email', data.email),
    formatField('Company / Business', data.company),
    formatField('Project Type', data.projectType),
    formatField('Project Status', data.projectStatus),
    formatField('Budget Range', data.budget),
    formatField('Timeline', data.timeline),
    formatField('Preferred Consultation', preferredConsultation),
    '',
    formatField('Project Description', data.projectDescription),
    formatField('Additional Information', data.additionalInfo),
    '',
    '---',
    '',
    `Submitted: ${new Date(data.submittedAt).toLocaleString()}`,
  ].join('\n');
}

export async function sendInquiryEmail(data: InquiryEmailData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  if (!fromEmail) {
    throw new Error('CONTACT_FROM_EMAIL is not configured');
  }
  if (!toEmail) {
    throw new Error('CONTACT_TO_EMAIL is not configured');
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject: `New Project Inquiry — ${data.name} (${data.projectType})`,
    text: buildInquiryEmailBody(data),
  });

  if (error) {
    throw new Error(`Email delivery failed: ${error.message}`);
  }
}
