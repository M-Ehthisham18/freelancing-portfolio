import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/**
 * Public, indexable routes only.
 *
 * Excluded:
 *  - /projects/[slug] — project detail pages are placeholders; add them once
 *    real content is implemented (Issue #10).
 *  - /api/contact     — API route, not indexable.
 *  - /_not-found      — error page, not indexable.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/contact'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
