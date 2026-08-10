'use client';

import React, { useState } from 'react';
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

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-surface-container-lowest border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Have questions before we start? Here are answers to some common inquiries focused on helping you build or improve your digital presence.
          </p>
        </div>

        <div
          className="flex flex-col gap-4 mb-16 max-w-[700px] mx-auto w-full"
          onMouseLeave={handleMouseLeave}
        >
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="rounded-lg border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-between gap-4 w-full p-6 text-left cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={answerId}
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-body-md font-bold text-on-surface">{faq.question}</h3>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary/60 transition-transform duration-300"
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    id={answerId}
                    className="overflow-hidden transition-all duration-300 ease-in-out px-6"
                    style={{
                      maxHeight: isExpanded ? '200px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <p className="text-label-sm text-on-surface-variant pb-6">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-body-md font-medium text-on-surface-variant opacity-80">
            Don&apos;t see your question here? Feel free to reach out—I&apos;m happy to discuss your specific needs.
          </p>
        </div>
      </Container>
    </Section>
  );
}
