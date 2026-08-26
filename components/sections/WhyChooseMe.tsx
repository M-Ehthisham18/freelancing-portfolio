import React from 'react';
import { Briefcase, MessagesSquare, Terminal, Smartphone, Rocket, UserCheck } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const reasons = [
  {
    icon: Briefcase,
    title: 'Business-First Approach',
    description: 'Every project starts by focusing on your business goals before development begins.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication',
    description: 'Stay informed with regular updates, transparent discussions, and timely responses throughout the project.',
  },
  {
    icon: Terminal,
    title: 'Modern Development',
    description: 'Build with reliable technologies and industry best practices for long-term performance and scalability.',
  },
  {
    icon: Smartphone,
    title: 'Responsive by Default',
    description: 'Focus on delivering seamless experiences across desktop, tablet, and mobile devices.',
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    description: 'Optimize every website for speed, accessibility, and search engine visibility.',
  },
  {
    icon: UserCheck,
    title: 'Long-Term Support',
    description: 'Receive post-launch assistance and guidance focused on your growth as your business grows.',
  },
];

export function WhyChooseMe() {
  return (
    <Section id="why-work-with-me" className="bg-background border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[30px] leading-[1.2] sm:text-[34px] md:text-headline-lg font-headline-lg text-on-background mb-4 md:mb-6 tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-base sm:text-body-lg font-body-lg text-on-surface-variant">
            Successful projects are built on clear communication, meticulous planning, and a focus on delivering real business value.
          </p>
        </div>

        {/* Mobile: editorial numbered list with hairline dividers; md+: 2-col card grid; lg+: 3-col. */}
        <ol className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 mb-10 md:mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isLast = index === reasons.length - 1;
            return (
              <li
                key={reason.title}
                data-cursor-card
                className={[
                  // Mobile list row: divider between rows (not before first, not after last).
                  'flex items-start gap-4 py-5 sm:py-6 border-b border-outline-variant/10',
                  index === 0 ? 'md:border-b' : '',
                  isLast ? 'border-b-0' : '',
                  // Desktop card: rounded panel, larger padding.
                  'md:p-7 md:rounded-xl md:border md:border-outline-variant/10 md:bg-surface-container-low md:hover:bg-surface-container md:hover-lift md:flex-col md:items-start md:gap-5',
                ].join(' ')}
              >
                <div className="flex flex-col items-start gap-1 shrink-0 w-12 sm:w-14 md:w-auto">
                  <span className="text-label-sm font-label-sm font-bold text-primary tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <h3 className="text-[16px] sm:text-body-md font-bold text-on-surface">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] sm:text-label-sm text-on-surface-variant leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-body-lg font-medium text-on-surface-variant opacity-80">
            My goal is to be a reliable long-term technology partner, aiming to support your digital presence as it evolves with your business.
          </p>
        </div>
      </Container>
    </Section>
  );
}
