import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function WhyChooseMe() {
  return (
    <Section id="why-work-with-me" className="bg-background border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            Why Work With Me
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Successful projects are built on clear communication, meticulous planning, and a focus on delivering real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">work</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Business-First Approach</h3>
              <p className="text-body-md text-on-surface-variant">Every project starts by focusing on your business goals before development begins.</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">forum</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Clear Communication</h3>
              <p className="text-body-md text-on-surface-variant">Stay informed with regular updates, transparent discussions, and timely responses throughout the project.</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Modern Development</h3>
              <p className="text-body-md text-on-surface-variant">Build with reliable technologies and industry best practices for long-term performance and scalability.</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">devices</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Responsive by Default</h3>
              <p className="text-body-md text-on-surface-variant">Focus on delivering seamless experiences across desktop, tablet, and mobile devices.</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Performance & SEO</h3>
              <p className="text-body-md text-on-surface-variant">Optimize every website for speed, accessibility, and search engine visibility.</p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">verified_user</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">Long-Term Support</h3>
              <p className="text-body-md text-on-surface-variant">Receive post-launch assistance and guidance focused on your growth as your business grows.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-body-lg font-medium text-on-surface-variant opacity-80">
            My goal is to be a reliable long-term technology partner, aiming to support your digital presence as it evolves with your business.
          </p>
        </div>
      </Container>
    </Section>
  );
}
