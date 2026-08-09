import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ServiceCard } from '../cards/ServiceCard';

const services = [
  {
    icon: 'language',
    title: 'Business Website Development',
    description: 'Create professional, responsive websites designed to support conversion and help establish a professional presence.',
  },
  {
    icon: 'apps',
    title: 'Custom Web Applications',
    description: 'Develop tailored web applications designed to support your business workflows and help improve efficiency.',
  },
  {
    icon: 'smart_toy',
    title: 'AI-Powered Features & Automation',
    description: 'Integrate AI-powered capabilities designed to support intelligent assistants and workflow automation.',
  },
  {
    icon: 'auto_fix_high',
    title: 'Website Modernization & Performance',
    description: 'Improve existing websites with a focus on speed, accessibility, responsive design, and SEO.',
  },
];

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
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Subtle CTA */}
        <div className="flex justify-center">
          <button data-magnetic="Discuss" className="px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
            Let&apos;s Discuss Your Project
          </button>
        </div>
      </Container>
    </Section>
  );
}
