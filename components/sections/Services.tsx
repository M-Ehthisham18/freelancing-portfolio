import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function Services() {
  return (
    <Section id="services" className="bg-background border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            How I Can Support Your Business
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            I build modern digital solutions designed to support credibility, improve operational efficiency, and aim to support sustainable business growth through expert engineering and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">language</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Business Website Development</h3>
              <p className="text-body-md text-on-surface-variant">Create professional, responsive websites designed to support conversion and help establish a professional presence.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">apps</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Custom Web Applications</h3>
              <p className="text-body-md text-on-surface-variant">Develop tailored web applications designed to support your business workflows and help improve efficiency.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">AI-Powered Features & Automation</h3>
              <p className="text-body-md text-on-surface-variant">Integrate AI-powered capabilities designed to support intelligent assistants and workflow automation.</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">auto_fix_high</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Website Modernization & Performance</h3>
              <p className="text-body-md text-on-surface-variant">Improve existing websites with a focus on speed, accessibility, responsive design, and SEO.</p>
            </div>
          </div>
        </div>
        
        {/* Subtle CTA */}
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
            Let's Discuss Your Project
          </button>
        </div>
      </Container>
    </Section>
  );
}
