import React from 'react';
import { MessageSquare, Map, SquareTerminal, BadgeCheck } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start with a deep dive into your business goals, target audience, and technical requirements through a free consultation.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'I create a detailed roadmap, defining priorities and the technical architecture needed to scale your vision.',
    icon: Map,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Iterative development with regular updates. I handle the design, engineering, and testing focused on a successful launch.',
    icon: SquareTerminal,
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Seamless deployment followed by ongoing maintenance and optimization focused on your site performing at its peak.',
    icon: BadgeCheck,
  },
];

export function Process() {
  return (
    <Section id="process" className="bg-surface-container-lowest border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-[26px] leading-[1.15] sm:text-[30px] md:text-headline-lg font-headline-lg text-on-background mb-3 md:mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-[15px] leading-[1.6] sm:text-body-lg font-body-lg text-on-surface-variant">
            A structured approach aims to support every project being delivered with precision and clarity.
          </p>
        </div>

        {/* ═══ Mobile & Tablet: Vertical Timeline ═══ */}
        <div className="relative max-w-5xl mx-auto lg:hidden">
          {/* Vertical connector */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-outline-variant/20 to-primary/30"
          ></div>

          <ol className="flex flex-col gap-0">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.number}
                  data-cursor-card
                  className={`
                    relative
                    flex items-start gap-4 pl-12 pr-0 py-5
                    ${!isLast ? 'border-b border-outline-variant/0' : ''}
                  `}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-5 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-low border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-[13px] sm:text-base z-10">
                    {step.number}
                  </div>

                  <div className="flex-grow flex flex-col gap-1.5 md:gap-3">
                    <div>
                      <h3 className="text-[17px] leading-[1.3] sm:text-headline-md font-bold text-on-surface mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-[1.55] sm:text-body-md text-on-surface-variant max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ═══ Desktop: Premium Horizontal Process Timeline ═══ */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Horizontal connector line */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gradient-to-r from-primary/30 via-outline-variant/20 to-primary/30"
            ></div>

            <ol className="grid grid-cols-4 gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.number} data-cursor-card className="relative flex flex-col items-center text-center group">
                    {/* Step marker node */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-surface-container-lowest border border-primary/20 flex items-center justify-center text-primary font-bold text-base mb-6 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="flex-1 w-full p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all duration-300 hover-lift">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-body-md font-bold text-on-surface mb-2">
                        {step.title}
                      </h3>
                      <p className="text-label-sm text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <p className="text-[11px] sm:text-label-sm font-label-sm text-on-surface-variant opacity-60">
            A structured approach supports delivery with precision and clarity.
          </p>
        </div>
      </Container>
    </Section>
  );
}
