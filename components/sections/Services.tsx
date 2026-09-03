import React from 'react';
import Link from 'next/link';
import { Globe, Layout, Sparkles, Wand2 } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ServiceCard } from '../cards/ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Business Website Development',
    description: 'Create professional, responsive websites designed to support conversion and help establish a professional presence.',
  },
  {
    icon: Layout,
    title: 'Custom Web Applications',
    description: 'Develop tailored web applications designed to support your business workflows and help improve efficiency.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Features & Automation',
    description: 'Integrate AI-powered capabilities designed to support intelligent assistants and workflow automation.',
  },
  {
    icon: Wand2,
    title: 'Website Modernization & Performance',
    description: 'Improve existing websites with a focus on speed, accessibility, responsive design, and SEO.',
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-background border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="text-[26px] leading-[1.15] sm:text-[30px] md:text-headline-lg font-headline-lg text-on-background mb-3 md:mb-6 tracking-tight">
            How I Can Support Your Business
          </h2>
          <p className="text-[15px] leading-[1.6] sm:text-body-lg font-body-lg text-on-surface-variant">
            I build modern digital solutions designed to support credibility, improve operational efficiency, and aim to support sustainable business growth through expert engineering and design.
          </p>
        </div>

        {/* Mobile: compact list with subtle dividers between items. Desktop: 2-col card grid. */}
        <div className="flex flex-col divide-y divide-outline-variant/10 md:divide-y-0 md:grid md:grid-cols-2 md:gap-8 mb-8 md:mb-16 md:max-w-4xl md:mx-auto lg:max-w-none">
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
          <Link
            href="/contact"
            data-magnetic="Discuss"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-transparent border border-outline text-on-background rounded-xl sm:rounded-lg font-medium text-[15px] sm:text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95 text-center inline-block min-h-[48px] flex items-center justify-center"
          >
            Let&apos;s Discuss Your Project
          </Link>
        </div>
      </Container>
    </Section>
  );
}
