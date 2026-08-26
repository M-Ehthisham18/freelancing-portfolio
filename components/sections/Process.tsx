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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[30px] leading-[1.2] sm:text-[34px] md:text-headline-lg font-headline-lg text-on-background mb-4 md:mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-base sm:text-body-lg font-body-lg text-on-surface-variant">
            A structured approach aims to support every project being delivered with precision and clarity.
          </p>
        </div>

        {/* Mobile timeline: vertical rail with numbered nodes. Desktop reverts to horizontal row layout. */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connector — mobile only. Uses outline-variant for token-aligned divider. */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[23px] top-2 bottom-2 w-px bg-outline-variant/20"
          ></div>

          <ol className="flex flex-col md:flex-row gap-4 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  data-cursor-card
                  className="relative md:flex-1 p-5 sm:p-6 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pl-14 sm:pl-16 md:pl-8"
                >
                  {/* Numbered node — left-anchored on mobile, top-left on desktop. */}
                  <div className="absolute md:relative left-4 top-5 md:left-auto md:top-auto flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base sm:text-lg border border-primary/20">
                    {step.number}
                  </div>

                  <div className="flex-grow flex flex-col gap-2 md:gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-[18px] leading-[1.3] sm:text-headline-md font-bold text-on-surface mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[15px] sm:text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                    <Icon
                      className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors hidden md:block flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <p className="text-label-sm font-label-sm text-on-surface-variant opacity-60">
            A structured approach supports delivery with precision and clarity.
          </p>
        </div>
      </Container>
    </Section>
  );
}
