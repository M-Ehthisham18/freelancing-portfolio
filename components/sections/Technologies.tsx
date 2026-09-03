import React from 'react';
import { Globe, Server, Database, Brain, Rocket, Wrench } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const techCategories = [
  {
    icon: Globe,
    title: 'Frontend',
    techs: 'Next.js, React, TypeScript, Tailwind CSS',
  },
  {
    icon: Server,
    title: 'Backend',
    techs: 'Node.js, Express.js',
  },
  {
    icon: Database,
    title: 'Database',
    techs: 'MongoDB',
  },
  {
    icon: Brain,
    title: 'AI',
    techs: 'OpenAI, Google Gemini, Claude API',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    techs: 'Vercel, Cloudflare, Git, GitHub',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    techs: 'Updates, Monitoring, Fixes, and Optimization',
  },
];

export function Technologies() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-[26px] leading-[1.15] sm:text-[30px] md:text-headline-lg font-headline-lg text-on-background mb-3 md:mb-6 tracking-tight">
            Built with Modern Technologies
          </h2>
          <p className="text-[15px] leading-[1.6] sm:text-body-lg font-body-lg text-on-surface-variant">
            We leverage a technology stack selected for high performance, modern security best practices, and scalability to support your business growth.
          </p>
        </div>

        {/* 6 cards: mobile 2-col (3 rows), tablet 3-col (2 rows), desktop 3-col × 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-4 sm:p-5 md:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors"
              >
                <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
                  {/* Row 1: icon + heading */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" aria-hidden="true" />
                    <h3 className="text-body-md font-bold text-on-surface">{cat.title}</h3>
                  </div>
                  {/* Row 2: description */}
                  <p className="text-[13px] sm:text-label-sm text-on-surface-variant leading-relaxed pl-[calc(1.5rem+0.375rem)] sm:pl-[calc(1.75rem+0.75rem)]">
                    {cat.techs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
