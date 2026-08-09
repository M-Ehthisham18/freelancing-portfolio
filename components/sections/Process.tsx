import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function Process() {
  return (
    <Section id="process" className="bg-surface-container-lowest border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            How We Work
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A structured approach aims to support every project being delivered with precision and clarity.
          </p>
        </div>
        
        {/* Simplified Process Container */}
        <div className="relative max-w-5xl mx-auto flex flex-col gap-4">
          {/* Step 1 */}
          <div data-cursor-card className="group p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">01</div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-headline-md font-bold text-on-surface mb-1">Discover</h3>
                <p className="text-body-md text-on-surface-variant max-w-2xl">We start with a deep dive into your business goals, target audience, and technical requirements through a free consultation.</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors hidden md:block">chat</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div data-cursor-card className="group p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">02</div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-headline-md font-bold text-on-surface mb-1">Plan</h3>
                <p className="text-body-md text-on-surface-variant max-w-2xl">I create a detailed roadmap, defining priorities and the technical architecture needed to scale your vision.</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors hidden md:block">map</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div data-cursor-card className="group p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">03</div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-headline-md font-bold text-on-surface mb-1">Build</h3>
                <p className="text-body-md text-on-surface-variant max-w-2xl">Iterative development with regular updates. I handle the design, engineering, and testing focused on a successful launch.</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors hidden md:block">terminal</span>
            </div>
          </div>
          
          {/* Step 4 */}
          <div data-cursor-card className="group p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">04</div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-headline-md font-bold text-on-surface mb-1">Launch & Support</h3>
                <p className="text-body-md text-on-surface-variant max-w-2xl">Seamless deployment followed by ongoing maintenance and optimization focused on your site performing at its peak.</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors hidden md:block">verified</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-label-sm font-label-sm text-on-surface-variant opacity-60">A structured approach supports delivery with precision and clarity.</p>
        </div>
      </Container>
    </Section>
  );
}
