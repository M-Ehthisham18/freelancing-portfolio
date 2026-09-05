export const PROJECT_TYPES = [
  'Website Development',
  'Web Application',
  'SaaS / MVP',
  'UI/UX Implementation',
  'Existing Website Improvement',
  'Performance / Technical Improvement',
  'Other',
] as const;

export const PROJECT_STATUSES = [
  'Idea / Planning',
  'Design Ready',
  'Development Started',
  'Existing Product',
  'Redesign / Migration',
] as const;

export const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Prefer not to say',
] as const;

export const TIMELINE_OPTIONS = [
  'ASAP',
  'Within 2 weeks',
  'Within 1 month',
  '1–3 months',
  'Flexible',
] as const;

export type ProjectType = typeof PROJECT_TYPES[number];
export type ProjectStatus = typeof PROJECT_STATUSES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type TimelineOption = typeof TIMELINE_OPTIONS[number];
