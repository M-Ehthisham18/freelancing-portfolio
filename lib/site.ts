/**
 * Central site configuration.
 *
 * The production origin is intentionally NOT hardcoded here — the real domain
 * is supplied via the NEXT_PUBLIC_SITE_URL environment variable at build time.
 * Until it is set, development falls back to http://localhost:3000.
 *
 * NEXT_PUBLIC_ values are inlined at build time. Set NEXT_PUBLIC_SITE_URL to
 * the deployed domain (e.g. https://www.example.com) when running `next build`.
 */

const DEFAULT_SITE_URL = 'http://localhost:3000';

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return DEFAULT_SITE_URL;
  return configured.replace(/\/+$/, '');
}

export const siteConfig = {
  name: 'StudioDev',
  tagline: 'High-Performance Web Solutions',
  description:
    'StudioDev — freelance web development for businesses: high-performance websites, custom web applications, AI features, and modernization.',
  url: resolveSiteUrl(),
} as const;

/**
 * Build an absolute URL from the configured site origin.
 * Handles trailing-slash stripping on the origin and leading-slash stripping
 * on the path to avoid double-slash artifacts.
 */
export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return siteConfig.url;
  return `${siteConfig.url}/${path.replace(/^\/+/, '')}`;
}
