import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function CTA() {
  return (
    <Section id="contact" className="bg-background border-t border-outline-variant/10">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/4 translate-y-1/4"></div>
      <Container>
        <div className="relative glass-card bg-surface-container/30 border border-outline-variant/20 rounded-xl md:rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent -z-10"></div>
          
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background leading-tight">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Whether you need a business website, a custom application, or AI features, the first step is a conversation about your unique goals. I provide professional engineering and design focused on your long-term success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button data-magnetic="Book" className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary rounded-lg font-bold text-body-md font-headline-md hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                Book a Free Consultation
              </button>
              <button data-magnetic="View" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
                View My Projects
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 border-t border-outline-variant/10 w-full max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-label-sm font-medium text-on-surface-variant">Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">chat</span>
                <span className="text-label-sm font-medium text-on-surface-variant">Transparent Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">task_alt</span>
                <span className="text-label-sm font-medium text-on-surface-variant">No Obligation Discussion</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
