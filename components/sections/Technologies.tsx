import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function Technologies() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            Built with Modern Technologies
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            We leverage a technology stack selected for high performance, modern security best practices, and scalability to support your business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Frontend */}
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary">web</span>
              <h3 className="text-body-md font-bold text-on-surface">Frontend</h3>
              <p className="text-label-sm text-on-surface-variant">Next.js, React, TypeScript, Tailwind CSS</p>
            </div>
          </div>
          {/* Backend */}
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary">dns</span>
              <h3 className="text-body-md font-bold text-on-surface">Backend</h3>
              <p className="text-label-sm text-on-surface-variant">Node.js, Express.js</p>
            </div>
          </div>
          {/* Database */}
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary">database</span>
              <h3 className="text-body-md font-bold text-on-surface">Database</h3>
              <p className="text-label-sm text-on-surface-variant">MongoDB</p>
            </div>
          </div>
          {/* AI */}
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h3 className="text-body-md font-bold text-on-surface">AI</h3>
              <p className="text-label-sm text-on-surface-variant">OpenAI, Google Gemini, Claude API</p>
            </div>
          </div>
          {/* Deployment */}
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary">rocket_launch</span>
              <h3 className="text-body-md font-bold text-on-surface">Deployment</h3>
              <p className="text-label-sm text-on-surface-variant">Vercel, Cloudflare, Git, GitHub</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
