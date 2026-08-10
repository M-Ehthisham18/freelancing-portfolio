import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | StudioDev — Start Your Project',
  description: 'Get in touch with StudioDev to discuss your web development project. Free initial consultation for new clients.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Section className="pt-40">
          <Container>
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                  Free Initial Consultation
                </span>
              </div>
              <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
                Let&apos;s Discuss Your Project
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Whether you need a business website, a custom application, or AI features, the first step is a conversation about your goals. Fill out the form below and StudioDev will follow up by email to schedule your free consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form — takes 2 columns */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Sidebar info */}
              <div className="flex flex-col gap-8">
                <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <h3 className="text-body-md font-bold text-on-surface">Email Us Directly</h3>
                  </div>
                  <a href="mailto:hello@studiodev.com" className="text-body-md text-primary hover:underline">
                    hello@studiodev.com
                  </a>
                </div>

                <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <h3 className="text-body-md font-bold text-on-surface">Consultation Process</h3>
                  </div>
                  <ol className="flex flex-col gap-3 text-label-sm text-on-surface-variant">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">1.</span>
                      Submit your inquiry with project details
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">2.</span>
                      StudioDev reviews and responds by email
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">3.</span>
                      Schedule your free consultation call
                    </li>
                  </ol>
                </div>

                <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <h3 className="text-body-md font-bold text-on-surface">No Obligation</h3>
                  </div>
                  <p className="text-label-sm text-on-surface-variant">
                    The initial consultation is completely free. Discuss your goals, get expert advice, and decide if StudioDev is the right fit — no strings attached.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
