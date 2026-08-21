import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Website Terms of Use for StudioDev governing use of the StudioDev portfolio website.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use',
    description:
      'Website Terms of Use for StudioDev governing use of the StudioDev portfolio website.',
    url: '/terms',
    type: 'website',
  },
};

/* -------------------------------------------------------------------------- */
/*  Small layout helpers                                                      */
/* -------------------------------------------------------------------------- */

function TermsSection({
  index,
  title,
  id,
  children,
}: {
  index: string;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`terms-${index}`}
      className="p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low"
    >
      <h2
        id={`terms-${index}`}
        className="text-headline-md font-bold text-on-surface mb-4"
      >
        {index}. {title}
      </h2>
      <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Page header ──────────────────────────────────────────────── */}
        <Section className="pt-40">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 mb-8">
                <span className="material-symbols-outlined text-primary text-sm">
                  gavel
                </span>
                <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                  Legal
                </span>
              </div>
              <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
                Terms of Use
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Last updated: 12 August 2026
              </p>
            </div>
          </Container>
        </Section>

        {/* ── Document body ────────────────────────────────────────────── */}
        <Section className="pt-0">
          <Container>
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {/* ── Important notice ─────────────────────────────────────── */}
              <div className="p-5 md:p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  <span className="text-on-surface font-semibold">
                    Please read these Terms before using this website.
                  </span>{' '}
                  These Terms apply to use of the StudioDev website. They do not
                  create a client relationship or an obligation to provide
                  services. Development and other services are provided only
                  under a separate written agreement. Submitting an inquiry
                  through the contact form does not create a contract.
                </p>
              </div>

              {/* ── 1. Introduction / acceptance ─────────────────────────── */}
              <TermsSection
                index="1"
                title="Introduction and acceptance"
                id="introduction"
              >
                <p>
                  These Terms of Use (&ldquo;Terms&rdquo;) govern your access to
                  and use of the website operated by{' '}
                  <span className="text-on-surface font-medium">
                    Ehthisham Ul Haq, trading as StudioDev
                  </span>{' '}
                  (&ldquo;StudioDev,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                  or &ldquo;our&rdquo;).
                </p>
                <p>
                  By accessing or using this website, you agree to these Terms.
                  If you do not agree, please do not use the website.
                </p>
                <p>
                  These Terms govern website use only. The separate{' '}
                  <Link
                    href="/privacy"
                    className="text-primary underline underline-offset-2 hover:underline-offset-4"
                  >
                    Privacy Policy
                  </Link>{' '}
                  explains how personal information is handled on this website.
                  Services, projects, and other commercial engagements are
                  governed by separate written agreements, not by these Terms.
                </p>
              </TermsSection>

              {/* ── 2. Use of the website ────────────────────────────────── */}
              <TermsSection
                index="2"
                title="Use of the website"
                id="website-use"
              >
                <p>
                  This website presents StudioDev&apos;s portfolio, services,
                  and a way to submit project inquiries. You may access and use
                  the website for its intended purpose: learning about
                  StudioDev&apos;s services and getting in touch.
                </p>
                <p>
                  You agree to use the website lawfully and not in a way that
                  could damage, disable, or impair the website or interfere
                  with anyone else&apos;s use of it.
                </p>
              </TermsSection>

              {/* ── 3. Intellectual property ─────────────────────────────── */}
              <TermsSection
                index="3"
                title="Intellectual property"
                id="intellectual-property"
              >
                <p>
                  The content of this website — including its design, branding,
                  text, graphics, original visual assets, and portfolio
                  presentation — is protected by intellectual property laws and
                  is owned by or licensed to StudioDev, except as otherwise
                  stated.
                </p>
                <p>
                  Third-party materials used on or linked from the website,
                  including fonts, icons, and open-source components, remain
                  subject to their respective licenses and rights.
                </p>
                <p>
                  You may not copy, reproduce, distribute, or reuse substantial
                  portions of the website&apos;s content for commercial purposes
                  without prior written permission from StudioDev. Brief
                  reference or review of the site for its intended purpose is
                  permitted.
                </p>
              </TermsSection>

              {/* ── 4. User-submitted information ────────────────────────── */}
              <TermsSection
                index="4"
                title="User-submitted information and inquiries"
                id="user-submissions"
              >
                <p>
                  You may submit information through the contact form, such as
                  your name, email address, and details about a potential
                  project. You agree to provide accurate, current information and
                  not to submit content that is unlawful, misleading, or
                  infringes the rights of others.
                </p>
                <p>
                  Submitting an inquiry does not create a contractual
                  relationship, an obligation on StudioDev to respond, or an
                  obligation on StudioDev to provide services. StudioDev may
                  choose whether or not to respond to any inquiry.
                </p>
                <p>
                  Information submitted through the contact form is handled in
                  accordance with the{' '}
                  <Link
                    href="/privacy"
                    className="text-primary underline underline-offset-2 hover:underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </TermsSection>

              {/* ── 5. No client relationship ────────────────────────────── */}
              <TermsSection
                index="5"
                title="No client relationship"
                id="no-client-relationship"
              >
                <p>
                  Browsing this website, submitting an inquiry, requesting a
                  consultation, or communicating through the website does not
                  create a client relationship, a contract, an engagement, or an
                  obligation to provide services.
                </p>
                <p>
                  Any services are provided only under a separate written
                  agreement agreed between you and StudioDev. Such an agreement,
                  when entered into, is independent of these Terms and governed
                  by its own terms.
                </p>
              </TermsSection>

              {/* ── 6. Third-party links ─────────────────────────────────── */}
              <TermsSection
                index="6"
                title="Third-party links and services"
                id="third-party-links"
              >
                <p>
                  The website contains links to external websites and services,
                  including Calendly (scheduling), GitHub, LinkedIn, Google Docs,
                  and a hosted project demo.
                </p>
                <p>
                  These external websites are operated by third parties.
                  StudioDev does not control their content, availability, or
                  policies, and is not responsible for them. Following an
                  external link means you leave the StudioDev website, and those
                  third-party sites are subject to their own terms and privacy
                  practices.
                </p>
              </TermsSection>

              {/* ── 7. Availability ──────────────────────────────────────── */}
              <TermsSection
                index="7"
                title="Website availability"
                id="availability"
              >
                <p>
                  This website is provided on an availability basis. StudioDev
                  does not guarantee that the website will be uninterrupted,
                  error-free, or permanently available.
                </p>
                <p>
                  StudioDev may modify, suspend, or discontinue parts of the
                  website (or the website as a whole) at any time, with or
                  without notice.
                </p>
              </TermsSection>

              {/* ── 8. Disclaimer of warranties ──────────────────────────── */}
              <TermsSection
                index="8"
                title="Disclaimer of warranties"
                id="disclaimer"
              >
                <p>
                  The website and its content are provided &ldquo;as is&rdquo;
                  and &ldquo;as available&rdquo; without warranties of any kind,
                  whether express or implied, to the fullest extent permitted by
                  applicable law.
                </p>
                <p>
                  Portfolio projects are presented for informational purposes and
                  are not an offer to replicate a specific result. Individual
                  project outcomes vary.
                </p>
              </TermsSection>

              {/* ── 9. Limitation of liability ───────────────────────────── */}
              <TermsSection
                index="9"
                title="Limitation of liability"
                id="limitation-of-liability"
              >
                <p>
                  To the fullest extent permitted by applicable law, StudioDev
                  will not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of data,
                  profits, or business opportunities, arising out of or in
                  connection with your use of (or inability to use) this
                  website.
                </p>
                <p>
                  Nothing in these Terms limits or excludes liability that
                  cannot be limited or excluded under applicable law, including
                  liability for death or personal injury caused by negligence,
                  fraud, or fraudulent misrepresentation, or any other liability
                  that cannot lawfully be excluded or limited.
                </p>
              </TermsSection>

              {/* ── 10. Prohibited use ───────────────────────────────────── */}
              <TermsSection
                index="10"
                title="Prohibited use"
                id="prohibited-use"
              >
                <p>
                  When using this website, you agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use the website for any unlawful purpose or activity</li>
                  <li>
                    Attempt to gain unauthorized access to the website, its
                    server, or its underlying systems
                  </li>
                  <li>Interfere with the operation of the website</li>
                  <li>
                    Submit malicious code or attempt to abuse the website&apos;s
                    forms or endpoints
                  </li>
                  <li>
                    Scrape the website in a way that violates applicable law or
                    places an unreasonable load on it
                  </li>
                  <li>Attempt to bypass any security or access controls</li>
                </ul>
              </TermsSection>

              {/* ── 11. Changes to these Terms ───────────────────────────── */}
              <TermsSection
                index="11"
                title="Changes to these Terms"
                id="changes"
              >
                <p>
                  We may update these Terms from time to time. When we do, the
                  &ldquo;Last updated&rdquo; date at the top of this page will
                  be revised. Continued use of the website after changes are
                  posted constitutes acceptance of the revised Terms.
                </p>
              </TermsSection>

              {/* ── 12. Governing law ────────────────────────────────────── */}
              <TermsSection
                index="12"
                title="Governing law"
                id="governing-law"
              >
                <p>
                  These Terms are intended to be governed by the laws of the
                  jurisdiction in which the site operator is based.
                </p>
                <p className="text-on-surface font-medium">
                  [Governing jurisdiction to be finalized by the site owner
                  before publication.]
                </p>
              </TermsSection>

              {/* ── 13. Contact ──────────────────────────────────────────── */}
              <TermsSection
                index="13"
                title="Contact"
                id="contact"
              >
                <p>
                  If you have any questions about these Terms, please contact
                  StudioDev by email:{' '}
                  <a
                    href="mailto:hello@studiodev.com"
                    className="text-primary underline underline-offset-2 hover:underline-offset-4"
                  >
                    hello@studiodev.com
                  </a>
                  .
                </p>
              </TermsSection>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
