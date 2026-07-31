import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function FAQ() {
  return (
    <Section id="faq" className="bg-surface-container-lowest border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Have questions before we start? Here are answers to some common inquiries focused on helping you build or improve your digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">How long does a typical project take?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">Project timelines vary based on scope. Every collaboration begins with a clear roadmap and a schedule tailored to your business needs.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">Can you redesign my existing website?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">Yes. I specialize in modernizing platforms to improve design, performance, and accessibility, aligned with your strategic goals.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">Will my website work on mobile devices?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">Yes. Every project follows a mobile-first philosophy, aiming to support a high-performing experience across all screen sizes.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">Can AI features be integrated into my website?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">Yes. I can integrate AI-powered features designed to support efficiency, whether it's chat assistants or workflow automation.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">Do you provide support after launch?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">Yes. I offer support and future enhancements focused on your digital solution continuing to perform as your business grows.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-body-md font-bold text-on-surface">How do we get started?</h3>
                <span className="material-symbols-outlined text-primary/60">expand_more</span>
              </div>
              <p className="text-label-sm text-on-surface-variant">The best way is to book a free consultation. We will discuss your goals and requirements to help determine if we are a good fit for your project.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-body-md font-medium text-on-surface-variant opacity-80">
            Don't see your question here? Feel free to reach out—I'm happy to discuss your specific needs.
          </p>
        </div>
      </Container>
    </Section>
  );
}
