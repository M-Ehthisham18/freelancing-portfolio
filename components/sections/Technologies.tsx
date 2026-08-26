import React from 'react';
import { Globe, Server, Database, Brain, Rocket } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function Technologies() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[30px] leading-[1.2] sm:text-[34px] md:text-headline-lg font-headline-lg text-on-background mb-4 md:mb-6 tracking-tight">
            Built with Modern Technologies
          </h2>
          <p className="text-base sm:text-body-lg font-body-lg text-on-surface-variant">
            We leverage a technology stack selected for high performance, modern security best practices, and scalability to support your business growth.
          </p>
        </div>
        {/* Mobile-first 2-col grid; md: 3-col; lg: 5-col. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {/* Frontend */}
          <div className="p-5 sm:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Globe className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
              <h3 className="text-body-md font-bold text-on-surface">Frontend</h3>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">Next.js, React, TypeScript, Tailwind CSS</p>
            </div>
          </div>
          {/* Backend */}
          <div className="p-5 sm:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Server className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
              <h3 className="text-body-md font-bold text-on-surface">Backend</h3>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">Node.js, Express.js</p>
            </div>
          </div>
          {/* Database */}
          <div className="p-5 sm:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Database className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
              <h3 className="text-body-md font-bold text-on-surface">Database</h3>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">MongoDB</p>
            </div>
          </div>
          {/* AI */}
          <div className="p-5 sm:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
              <h3 className="text-body-md font-bold text-on-surface">AI</h3>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">OpenAI, Google Gemini, Claude API</p>
            </div>
          </div>
          {/* Deployment */}
          <div className="p-5 sm:p-6 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-colors col-span-2 md:col-span-1">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Rocket className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
              <h3 className="text-body-md font-bold text-on-surface">Deployment</h3>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">Vercel, Cloudflare, Git, GitHub</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
