import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gauge, Smartphone, Code } from 'lucide-react';
import { Container } from '../layout/Container';

export function Hero() {
  return (
    <div className="relative pb-16 sm:pb-20 md:pb-section-gap overflow-hidden pt-28 sm:pt-36 md:pt-48">
      {/* Background Ambient Glow — scaled for mobile, larger on desktop */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] bg-tertiary/5 rounded-full blur-[80px] md:blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8 md:gap-16">
            {/* Availability / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                Supporting Businesses in Building Better Web Experiences
              </span>
            </div>

            {/* Headline — typography-led, dominant on mobile */}
            <h1 className="text-[40px] leading-[1.1] sm:text-[44px] md:text-headline-lg font-headline-lg text-on-background tracking-tight">
              Supporting Small Businesses in Building a Strong Online Presence
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              I build modern web applications focused on helping businesses establish credibility and streamline operations. Professional, clear, and focused on delivering tangible business value through high-quality engineering and user-centric design.
            </p>

            {/* CTAs — stacked vertically on mobile, side-by-side at sm+ */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                data-magnetic="Book"
                className="w-full sm:w-auto sm:flex-none px-8 py-4 bg-primary text-on-primary rounded-lg font-medium text-body-md font-headline-md hover:opacity-90 transition-all active:scale-95 text-center min-h-[48px] flex items-center justify-center"
              >
                Book a Free Consultation
              </Link>
              <a
                href="#projects"
                data-magnetic="View"
                className="w-full sm:w-auto sm:flex-none px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95 text-center min-h-[48px] flex items-center justify-center"
              >
                View My Work
              </a>
            </div>

            {/* Trust Row — compact 1-col on mobile, 3-col on sm+. Borders stay subtle. */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-16 w-full pt-8 md:pt-12 border-t border-outline-variant/10">
              <div className="flex flex-col gap-2 sm:gap-3">
                <Gauge className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
                <div className="text-body-md font-bold text-on-surface">Performance Focused</div>
                <p className="text-label-sm text-on-surface-variant leading-relaxed">Fast, responsive websites built for a smooth user experience.</p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <Smartphone className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
                <div className="text-body-md font-bold text-on-surface">Mobile-First Design</div>
                <p className="text-label-sm text-on-surface-variant leading-relaxed">Designed to support a beautiful experience across all devices.</p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <Code className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
                <div className="text-body-md font-bold text-on-surface">Clean & Scalable Code</div>
                <p className="text-label-sm text-on-surface-variant leading-relaxed">Built with maintainability and future growth in mind.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals — desktop only. Mobile hides the dashboard mock + floating cards. */}
          <div className="hidden lg:flex lg:col-span-6 relative perspective-1000 justify-center items-center">
            {/* Main Mockup Container */}
            <div className="relative w-full max-w-[560px] p-2 glass-card rounded-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
