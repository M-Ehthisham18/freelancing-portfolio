'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. Every collaboration begins with a clear roadmap and a schedule tailored to your business needs.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. I specialize in modernizing platforms to improve design, performance, and accessibility, aligned with your strategic goals.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Yes. Every project follows a mobile-first philosophy, aiming to support a high-performing experience across all screen sizes.',
  },
  {
    question: 'Can AI features be integrated into my website?',
    answer: 'Yes. I can integrate AI-powered features designed to support efficiency, whether it\'s chat assistants or workflow automation.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. I offer support and future enhancements focused on your digital solution continuing to perform as your business grows.',
  },
  {
    question: 'How do we get started?',
    answer: 'The best way is to book a free consultation. We will discuss your goals and requirements to help determine if we are a good fit for your project.',
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-surface-container-lowest border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[30px] leading-[1.2] sm:text-[34px] md:text-headline-lg font-headline-lg text-on-background mb-4 md:mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-body-lg font-body-lg text-on-surface-variant">
            Have questions before we start? Here are answers to some common inquiries focused on helping you build or improve your digital presence.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-16 max-w-[760px] mx-auto w-full">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all"
              >
                <div className="flex flex-col gap-0">
                  <button
                    type="button"
                    className="flex items-center justify-between gap-4 w-full p-5 sm:p-6 text-left cursor-pointer min-h-[56px] sm:min-h-[64px]"
                    aria-expanded={isExpanded}
                    aria-controls={answerId}
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-[15px] sm:text-body-md font-bold text-on-surface">{faq.question}</h3>
                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 text-primary/60 transition-transform duration-300 shrink-0"
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  <div
                    id={answerId}
                    role="region"
                    aria-hidden={!isExpanded}
                    className="overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6"
                    style={{
                      maxHeight: isExpanded ? '320px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <p className="text-[14px] sm:text-label-sm text-on-surface-variant pb-5 sm:pb-6 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[15px] sm:text-body-md font-medium text-on-surface-variant opacity-80">
            Don&apos;t see your question here? Feel free to reach out—I&apos;m happy to discuss your specific needs.
          </p>
        </div>
      </Container>
    </Section>
  );
}
