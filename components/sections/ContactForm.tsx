'use client';

import React, { useState } from 'react';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDescription: string;
  company: string;
  projectStatus: string;
  budget: string;
  timeline: string;
  preferredDate: string;
  preferredTime: string;
  additionalInfo: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  projectDescription?: string;
}

const PROJECT_TYPES = [
  'Website Development',
  'Web Application',
  'SaaS / MVP',
  'UI/UX Implementation',
  'Existing Website Improvement',
  'Performance / Technical Improvement',
  'Other',
];

const PROJECT_STATUSES = [
  'Idea / Planning',
  'Design Ready',
  'Development Started',
  'Existing Product',
  'Redesign / Migration',
];

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Prefer not to say',
];

const TIMELINE_OPTIONS = [
  'ASAP',
  'Within 2 weeks',
  'Within 1 month',
  '1–3 months',
  'Flexible',
];

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  projectType: '',
  projectDescription: '',
  company: '',
  projectStatus: '',
  budget: '',
  timeline: '',
  preferredDate: '',
  preferredTime: '',
  additionalInfo: '',
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Full name is required.';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!validateEmail(data.email.trim())) errors.email = 'Please enter a valid email address.';

  if (!data.projectType) errors.projectType = 'Please select a project type.';

  if (!data.projectDescription.trim()) errors.projectDescription = 'Project description is required.';
  else if (data.projectDescription.trim().length < 20) errors.projectDescription = 'Please provide at least 20 characters describing your project.';

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<SubmissionState>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setState('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          projectDescription: formData.projectDescription.trim(),
          additionalInfo: formData.additionalInfo.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setState('success');
      setServerMessage('Your inquiry has been received. StudioDev will review it and follow up by email.');
      setFormData(INITIAL_FORM);
    } catch (err) {
      setState('error');
      setServerMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (state === 'success') {
    return (
      <div className="p-8 md:p-12 rounded-xl border border-outline-variant/10 bg-surface-container-low text-center">
        <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 inline-flex">
          <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
        </div>
        <h3 className="text-headline-md font-bold text-on-surface mb-3">Inquiry Received</h3>
        <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-8">{serverMessage}</p>
        <button
          onClick={() => { setState('idle'); setServerMessage(''); }}
          className="px-6 py-3 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* === REQUIRED FIELDS === */}
      <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
        <h3 className="text-body-md font-bold text-on-surface mb-6">Contact Information</h3>

        {/* Full Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {errors.name && <p id="name-error" role="alert" className="mt-2 text-[13px] text-error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {errors.email && <p id="email-error" role="alert" className="mt-2 text-[13px] text-error">{errors.email}</p>}
          <p className="mt-1 text-[12px] text-on-surface-variant/60">We will use this to follow up on your inquiry.</p>
        </div>
      </div>

      {/* === PROJECT DETAILS === */}
      <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
        <h3 className="text-body-md font-bold text-on-surface mb-6">Project Details</h3>

        {/* Project Type */}
        <div className="mb-5">
          <label htmlFor="projectType" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
            Project Type <span className="text-primary">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
          >
            <option value="" disabled>Select project type</option>
            {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.projectType && <p id="projectType-error" role="alert" className="mt-2 text-[13px] text-error">{errors.projectType}</p>}
        </div>

        {/* Project Description */}
        <div className="mb-5">
          <label htmlFor="projectDescription" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
            Project Description <span className="text-primary">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={6}
            placeholder="Tell us about your project — what you want to build, the problem you are solving, relevant requirements, and any existing product or website."
            value={formData.projectDescription}
            onChange={handleChange}
            aria-invalid={!!errors.projectDescription}
            aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
          {errors.projectDescription && <p id="projectDescription-error" role="alert" className="mt-2 text-[13px] text-error">{errors.projectDescription}</p>}
        </div>
      </div>

      {/* === OPTIONAL FIELDS === */}
      <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
        <h3 className="text-body-md font-bold text-on-surface mb-2">Additional Information</h3>
        <p className="text-label-sm text-on-surface-variant/60 mb-6">All fields below are optional.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Company / Business
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Corp"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Project Status */}
          <div>
            <label htmlFor="projectStatus" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Current Project Status
            </label>
            <select
              id="projectStatus"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
            >
              <option value="">Select status</option>
              {PROJECT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
            >
              <option value="">Select budget range</option>
              {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
            >
              <option value="">Select timeline</option>
              {TIMELINE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Preferred Consultation Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="mt-1 text-[12px] text-on-surface-variant/60">This is a request — StudioDev will confirm availability.</p>
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
              Preferred Consultation Time
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <label htmlFor="additionalInfo" className="block text-label-sm font-label-sm text-on-surface-variant mb-2 tracking-wider uppercase">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            placeholder="Anything else you would like us to know before the consultation."
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
        </div>
      </div>

      {/* Server Error */}
      {state === 'error' && serverMessage && (
        <div role="alert" className="p-4 rounded-lg border border-error/30 bg-error/10 text-error text-body-md">
          {serverMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-lg font-bold text-body-md font-headline-md hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        {state === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
