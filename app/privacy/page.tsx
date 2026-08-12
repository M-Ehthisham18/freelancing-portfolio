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
  title: 'Privacy Policy',
  description:
    'Privacy Policy for StudioDev explaining how contact inquiries and website-related personal information are handled.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy',
    description:
      'Privacy Policy for StudioDev explaining how contact inquiries and website-related personal information are handled.',
    url: '/privacy',
    type: 'website',
  },
};

/* -------------------------------------------------------------------------- */
/*  Small layout helpers                                                      */
/* -------------------------------------------------------------------------- */

function PolicySection({
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
      aria-labelledby={`policy-${index}`}
      className="p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low"
    >
      <h2
        id={`policy-${index}`}
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

export default function PrivacyPage() {
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
                  privacy_tip
                </span>
                <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                  Privacy
                </span>
              </div>
              <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
                Privacy Policy
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
                    Please note:
                  </span>{' '}
                  Submitting an inquiry or consultation request through this
                  website does not create a client or contractual relationship
                  with StudioDev. Services are provided only under a separate
                  written agreement.
                </p>
              </div>

              {/* ── 1. Operator ──────────────────────────────────────────── */}
              <PolicySection
                index="1"
                title="Who operates this website"
                id="operator"
              >
                <p>
                  This website is operated by{' '}
                  <span className="text-on-surface font-medium">
                    Ehthisham Ul Haq, trading as StudioDev
                  </span>{' '}
                  (&ldquo;StudioDev,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                  or &ldquo;our&rdquo;). StudioDev is a freelance web-development
                  practice. This website presents StudioDev&apos;s services and
                  provides a way to submit project inquiries through a contact
                  form.
                </p>
              </PolicySection>

              {/* ── 2. Information collected ─────────────────────────────── */}
              <PolicySection
                index="2"
                title="Information we collect"
                id="information-collected"
              >
                <p>
                  We collect personal information only when you choose to submit
                  it through the contact form at{' '}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    /contact
                  </Link>
                  .
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                    <h3 className="text-body-md font-bold text-on-surface mb-2">
                      Required fields
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Project type</li>
                      <li>Project description</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                    <h3 className="text-body-md font-bold text-on-surface mb-2">
                      Optional fields
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Company or business name</li>
                      <li>Current project status</li>
                      <li>Budget range</li>
                      <li>Timeline</li>
                      <li>Preferred consultation date</li>
                      <li>Preferred consultation time</li>
                      <li>Additional information</li>
                    </ul>
                  </div>
                </div>

                <p>
                  When the form is submitted, the date and time of submission are
                  also recorded, along with a server-generated timestamp and an
                  internal inquiry identifier. These are used to manage and
                  respond to your inquiry.
                </p>

                <p>
                  The website does not set cookies, use browser storage, or
                  collect IP addresses, user-agent strings, browser
                  fingerprints, analytics identifiers, or other technical
                  visitor data as part of the contact form or general browsing
                  experience.
                </p>
              </PolicySection>

              {/* ── 3. Use of information ────────────────────────────────── */}
              <PolicySection
                index="3"
                title="How we use your information"
                id="use-of-information"
              >
                <p>
                  Information submitted through the contact form is used to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Respond to your inquiry</li>
                  <li>
                    Discuss a potential project or free initial consultation
                  </li>
                  <li>Keep a record of our communication</li>
                </ul>
                <p>
                  We do not sell personal information. We do not use submitted
                  information for marketing, advertising, profiling, or any
                  automated decision-making.
                </p>
                <p className="text-label-sm text-on-surface-variant/70 italic">
                  Submitting an inquiry does not create a client or contractual
                  relationship. Services are provided only under a separate
                  written agreement.
                </p>
              </PolicySection>

              {/* ── 4. Storage ───────────────────────────────────────────── */}
              <PolicySection
                index="4"
                title="How inquiry information is stored"
                id="storage"
              >
                <p>
                  Submitted inquiries are stored server-side in a structured JSON
                  file (<code className="text-label-sm bg-surface-container px-1.5 py-0.5 rounded">data/inquiries/inquiries.json</code>)
                  on the infrastructure that hosts this website. This file is not
                  publicly accessible and is excluded from version control. Only
                  the website operator has access to this stored information.
                </p>
              </PolicySection>

              {/* ── 5. Resend ────────────────────────────────────────────── */}
              <PolicySection
                index="5"
                title="Email delivery"
                id="email-delivery"
              >
                <p>
                  Contact inquiries are delivered to StudioDev as an email
                  notification through{' '}
                  <span className="text-on-surface font-medium">Resend</span>, a
                  third-party transactional email service. The content of your
                  inquiry — including the fields listed in section 2 — is sent to
                  Resend so that it can be delivered to StudioDev&apos;s email
                  inbox. Your email address is included as the Reply-To address
                  so StudioDev can respond directly to you.
                </p>
                <p>
                  StudioDev does not use Resend for marketing email. Resend acts
                  as a data processor for the limited purpose of delivering your
                  inquiry notification.
                </p>
              </PolicySection>

              {/* ── 6. Icons and fonts ───────────────────────────────────── */}
              <PolicySection
                index="6"
                title="Icons and fonts"
                id="icons-and-fonts"
              >
                <p>
                  To display icons throughout the website, the browser loads the{' '}
                  <span className="text-on-surface font-medium">
                    Material Symbols
                  </span>{' '}
                  icon stylesheet from{' '}
                  <span className="text-on-surface font-medium">
                    fonts.googleapis.com
                  </span>{' '}
                  at runtime. When your browser makes this request, Google may
                  receive request metadata such as your IP address and
                  user-agent string. StudioDev does not control how Google
                  processes that data.
                </p>
                <p>
                  The Geist and JetBrains Mono text fonts used by the website are
                  self-hosted using Next.js and are{' '}
                  <span className="text-on-surface font-medium">
                    not loaded from Google at runtime
                  </span>
                  .
                </p>
              </PolicySection>

              {/* ── 7. External links ────────────────────────────────────── */}
              <PolicySection
                index="7"
                title="External links and third-party services"
                id="external-links"
              >
                <p>
                  The website includes links to external services and profiles,
                  including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="text-on-surface font-medium">Calendly</span>{' '}
                    — scheduling (external link only; no embedded widget or
                    iframe)
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">GitHub</span>{' '}
                    — profile
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">LinkedIn</span>{' '}
                    — profile
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">
                      Google Docs
                    </span>{' '}
                    — resume
                  </li>
                  <li>
                    <span className="text-on-surface font-medium">Render</span>{' '}
                    — hosted project demo
                  </li>
                </ul>
                <p>
                  These are external links only. StudioDev does not embed
                  widgets, iframes, or tracking scripts from these services.
                  When you follow an external link, you leave the StudioDev
                  website and any information you provide on that third-party
                  site is governed by that provider&apos;s own privacy policy.
                  StudioDev does not control and is not responsible for the
                  privacy practices of external services.
                </p>
              </PolicySection>

              {/* ── 8. Analytics ─────────────────────────────────────────── */}
              <PolicySection
                index="8"
                title="Analytics and tracking"
                id="analytics"
              >
                <p>
                  This website does not use analytics tools, tracking pixels,
                  advertising scripts, session recording tools, or behavioral
                  tracking of any kind. No visitor analytics data is collected
                  or processed.
                </p>
              </PolicySection>

              {/* ── 9. Cookies / storage ─────────────────────────────────── */}
              <PolicySection
                index="9"
                title="Cookies and browser storage"
                id="cookies-and-storage"
              >
                <p>
                  This website does not set cookies and does not use localStorage
                  or sessionStorage. Because no cookies or browser-based tracking
                  are used, no cookie-consent mechanism is present on the site.
                </p>
              </PolicySection>

              {/* ── 10. Retention ─────────────────────────────────────────── */}
              <PolicySection
                index="10"
                title="Data retention"
                id="retention"
              >
                <p>
                  The current policy target is to retain unconverted inquiry
                  records for up to{' '}
                  <span className="text-on-surface font-medium">24 months</span>,
                  after which they are reviewed and deleted in accordance with
                  the planned retention process.
                </p>
                <p>
                  Retention and deletion are currently performed manually; there
                  is no automated deletion process within the website itself.
                </p>
                <p>
                  Inquiries connected to an ongoing project or established client
                  relationship may be retained longer in accordance with the
                  applicable project agreement and legal obligations.
                </p>
              </PolicySection>

              {/* ── 11. Security ─────────────────────────────────────────── */}
              <PolicySection
                index="11"
                title="Security"
                id="security"
              >
                <p>
                  We take reasonable measures to protect the information you
                  submit. Inquiry data is stored on the server rather than in
                  the browser, submitted data is validated before being accepted,
                  and the storage directory is excluded from version control. No
                  method of online transmission or electronic storage is
                  completely secure, and StudioDev cannot guarantee absolute
                  security of information.
                </p>
              </PolicySection>

              {/* ── 12. Rights ───────────────────────────────────────────── */}
              <PolicySection
                index="12"
                title="Your privacy rights"
                id="rights"
              >
                <p>
                  Depending on where you are located and which privacy laws apply
                  to your personal information, you may have rights including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Objection to processing</li>
                  <li>Portability where applicable</li>
                  <li>
                    Withdrawal of consent where processing relies on consent
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, please contact StudioDev using
                  the details in section 13.
                </p>
              </PolicySection>

              {/* ── 13. Contact ──────────────────────────────────────────── */}
              <PolicySection
                index="13"
                title="Contacting StudioDev about privacy"
                id="privacy-contact"
              >
                <p>
                  If you have a question about this Privacy Policy, wish to
                  exercise a privacy right, or have a privacy concern, please
                  contact StudioDev by email:{' '}
                  <a
                    href="mailto:hello@studiodev.com"
                    className="text-primary hover:underline"
                  >
                    hello@studiodev.com
                  </a>
                  .
                </p>
                <p>
                  Please contact us by email first. We may need to verify your
                  identity before processing a request. We will aim to respond as
                  promptly as practical.
                </p>
              </PolicySection>

              {/* ── 14. Complaints ───────────────────────────────────────── */}
              <PolicySection
                index="14"
                title="Complaints and supervisory authorities"
                id="complaints"
              >
                <p>
                  If you believe your privacy rights have not been respected, you
                  may contact StudioDev at{' '}
                  <a
                    href="mailto:hello@studiodev.com"
                    className="text-primary hover:underline"
                  >
                    hello@studiodev.com
                  </a>
                  .
                </p>
                <p>
                  Depending on where you are located, you may also have the right
                  to lodge a complaint with a relevant data protection or
                  supervisory authority in your jurisdiction.
                </p>
              </PolicySection>

              {/* ── 15. Changes ──────────────────────────────────────────── */}
              <PolicySection
                index="15"
                title="Changes to this Privacy Policy"
                id="changes"
              >
                <p>
                  We may update this Privacy Policy from time to time. When we
                  do, the &ldquo;Last updated&rdquo; date at the top of this
                  page will be revised. Material changes will be reflected on
                  this page.
                </p>
              </PolicySection>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
