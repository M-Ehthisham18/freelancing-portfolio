import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Code2, Gauge, Search } from 'lucide-react';
import { Container } from '../layout/Container';

export function Hero() {
  return (
    <div className="relative pb-16 sm:pb-20 md:pb-section-gap overflow-hidden pt-24 sm:pt-36 md:pt-48">
      {/* Background Ambient Glow — scaled for mobile, larger on desktop */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] bg-tertiary/5 rounded-full blur-[80px] md:blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 sm:gap-8 md:gap-16">
            {/* Availability / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] sm:text-label-sm font-label-sm text-primary tracking-widest uppercase">
                Supporting Businesses in Building Better Web Experiences
              </span>
            </div>

            {/* Headline — strong mobile typography */}
            <h1 className="text-[32px] leading-[1.1] sm:text-[38px] md:text-headline-lg font-headline-lg text-on-background tracking-tight">
              Supporting Small{' '}
              <br className="sm:hidden" />
              Businesses in Building a Strong Online Presence
            </h1>

            {/* Subheadline — compact on mobile */}
            <p className="text-[15px] leading-[1.6] sm:text-body-lg font-body-lg text-on-surface-variant max-w-xl md:max-w-2xl lg:max-w-xl -mt-1 sm:mt-0">
              I build modern web applications focused on helping businesses establish credibility and streamline operations. Professional, clear, and focused on delivering practical business value through high-quality engineering and user-centric design.
            </p>

            {/* CTAs — stacked vertically on mobile, side-by-side at sm+ */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                data-magnetic="Book"
                className="w-full sm:w-auto sm:flex-none px-8 py-3.5 sm:py-4 bg-primary text-on-primary rounded-xl sm:rounded-lg font-bold text-[15px] sm:text-body-md font-headline-md hover:opacity-90 transition-all active:scale-95 text-center min-h-[48px] flex items-center justify-center shadow-lg shadow-primary/10 sm:shadow-none"
              >
                Book a Free Consultation
              </Link>
              <a
                href="#projects"
                data-magnetic="View"
                className="w-full sm:w-auto sm:flex-none px-8 py-3.5 sm:py-4 bg-transparent border border-outline text-on-background rounded-xl sm:rounded-lg font-medium text-[15px] sm:text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95 text-center min-h-[48px] flex items-center justify-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Visuals — DESKTOP only (lg+) */}
          <div className="hidden lg:flex lg:col-span-6 relative justify-center items-center">
            <div className="relative w-full max-w-[560px]">
              {/* Main Mockup Container */}
              <div className="relative p-2 glass-card rounded-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                <Image
                  alt="StudioDev Dashboard Mockup"
                  className="w-full h-auto rounded-lg shadow-inner object-cover"
                  src="/images/hero/dashboard-mockup.jpg"
                  width={560}
                  height={400}
                  priority
                />
                {/* Decorative Frame Details */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              {/* Desktop Floating Chips — editorial distribution */}
              {/* top-right */}
              <div className="absolute -top-5 -right-10 capability-chip floating-animation flex items-center gap-2 px-3 py-2 rounded-lg z-20" style={{ animationDelay: '0s' }}>
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Mobile-First Development</span>
              </div>
              {/* mid-right */}
              <div className="absolute top-1/3 -right-14 capability-chip floating-animation flex items-center gap-2 px-3 py-2 rounded-lg z-20" style={{ animationDelay: '0.8s' }}>
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Code2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Clean Architecture</span>
              </div>
              {/* lower-left */}
              <div className="absolute -bottom-5 -left-10 capability-chip floating-animation flex items-center gap-2 px-3 py-2 rounded-lg z-20" style={{ animationDelay: '1.6s' }}>
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Gauge className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Performance Optimized</span>
              </div>
              {/* lower-right */}
              <div className="absolute bottom-10 -right-8 capability-chip floating-animation flex items-center gap-2 px-3 py-2 rounded-lg z-20" style={{ animationDelay: '2.4s' }}>
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Search className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">SEO Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / Tablet Dashboard Visual + Capability Chips ── */}
        {/*
          Chips are absolutely positioned at the four corners of the dashboard
          wrapper so they overlap/surround the image on all mobile/tablet sizes.
          They are NOT placed in a grid below the image.

          Container provides px-5 (mobile) / px-gutter (sm+) so the
          slightly negative -left-2 / -right-2 offsets do not overflow the document.
        */}
        <div className="lg:hidden mt-10 sm:mt-12 md:mt-16 md:max-w-3xl md:mx-auto">
          {/* Dashboard wrapper — chips position relative to this */}
          <div className="relative">
            {/* Dashboard Mockup */}
            <div className="hero-dashboard-glow rounded-xl overflow-hidden border border-outline-variant/15">
              <div className="relative">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low border-b border-outline-variant/10">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                  <div className="ml-2 flex-1 h-4 bg-surface-container rounded-sm max-w-[120px]"></div>
                </div>
                <Image
                  alt="StudioDev Dashboard Mockup"
                  className="w-full h-auto object-cover"
                  src="/images/hero/dashboard-mockup.jpg"
                  width={560}
                  height={400}
                  priority
                />
              </div>
            </div>


            {/* top-left: Mobile-First Development */}
            <div
              className="absolute top-1 -left-1 md:top-2 md:-left-2 capability-chip floating-animation flex items-center gap-1 px-1.5 py-1 md:px-2 md:py-1.5 rounded-lg z-20"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-[16px] h-[16px] md:w-5 md:h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Smartphone className="h-[8px] w-[8px] md:h-[11px] md:w-[11px] text-primary" aria-hidden="true" />
              </div>
              <span className="text-[8px] md:text-[9px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Mobile-First</span>
            </div>

            {/* top-right: Clean Architecture */}
            <div
              className="absolute top-1 -right-1 md:top-2 md:-right-2 capability-chip floating-animation flex items-center gap-1 px-1.5 py-1 md:px-2 md:py-1.5 rounded-lg z-20"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-[16px] h-[16px] md:w-5 md:h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Code2 className="h-[8px] w-[8px] md:h-[11px] md:w-[11px] text-primary" aria-hidden="true" />
              </div>
              <span className="text-[8px] md:text-[9px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Clean Architecture</span>
            </div>

            {/* bottom-left: Performance Optimized */}
            <div
              className="absolute bottom-4 -left-1 md:bottom-6 md:-left-2 capability-chip floating-animation flex items-center gap-1 px-1.5 py-1 md:px-2 md:py-1.5 rounded-lg z-20"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="w-[16px] h-[16px] md:w-5 md:h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Gauge className="h-[8px] w-[8px] md:h-[11px] md:w-[11px] text-primary" aria-hidden="true" />
              </div>
              <span className="text-[8px] md:text-[9px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">Performance</span>
            </div>

            {/* bottom-right: SEO Ready */}
            <div
              className="absolute bottom-4 -right-1 md:bottom-6 md:-right-2 capability-chip floating-animation flex items-center gap-1 px-1.5 py-1 md:px-2 md:py-1.5 rounded-lg z-20"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="w-[16px] h-[16px] md:w-5 md:h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Search className="h-[8px] w-[8px] md:h-[11px] md:w-[11px] text-primary" aria-hidden="true" />
              </div>
              <span className="text-[8px] md:text-[9px] font-label-sm font-medium text-on-surface-variant tracking-wide whitespace-nowrap">SEO Ready</span>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
