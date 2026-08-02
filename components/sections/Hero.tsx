import React from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';

export function Hero() {
  return (
    <div className="relative pb-section-gap overflow-hidden pt-48">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                Supporting Businesses in Building Better Web Experiences
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background leading-tight">
              Supporting Small Businesses in Building a Strong Online Presence
            </h1>
            
            {/* Subheadline */}
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              I build modern web applications focused on helping businesses establish credibility and streamline operations. Professional, clear, and focused on delivering tangible business value through high-quality engineering and user-centric design.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-stack-md w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-8 py-4 bg-primary text-on-primary rounded-lg font-medium text-body-md font-headline-md hover:opacity-90 transition-all active:scale-95">
                Book a Free Consultation
              </button>
              <button className="flex-1 sm:flex-none px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
                View My Work
              </button>
            </div>
            
            {/* Trust Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full pt-12 border-t border-outline-variant/10">
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">speed</span>
                <h3 className="text-body-md font-bold text-on-surface">Performance Focused</h3>
                <p className="text-label-sm text-on-surface-variant">Fast, responsive websites built for a smooth user experience.</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">devices</span>
                <h3 className="text-body-md font-bold text-on-surface">Mobile-First Design</h3>
                <p className="text-label-sm text-on-surface-variant">Designed to support a beautiful experience across all devices.</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">code</span>
                <h3 className="text-body-md font-bold text-on-surface">Clean & Scalable Code</h3>
                <p className="text-label-sm text-on-surface-variant">Built with maintainability and future growth in mind.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Visuals */}
          <div className="lg:col-span-6 relative perspective-1000 flex justify-center items-center">
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
            
            {/* Floating Cards */}
            <div className="absolute -top-6 right-0 md:-right-4 floating-animation glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg z-20" style={{ animationDelay: '0s' }}>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">smartphone</span>
              </div>
              <div><p className="text-label-sm font-bold text-on-surface">Mobile-First Development</p></div>
            </div>
            
            <div className="absolute top-1/2 -left-4 md:-left-12 floating-animation glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg z-20" style={{ animationDelay: '1.5s' }}>
              <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">bolt</span>
              </div>
              <div><p className="text-label-sm font-bold text-on-surface">Performance Optimized</p></div>
            </div>
            
            <div className="absolute -bottom-8 right-12 floating-animation glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg z-20" style={{ animationDelay: '0.8s' }}>
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">search</span>
              </div>
              <div><p className="text-label-sm font-bold text-on-surface">SEO Ready</p></div>
            </div>
            
            <div className="absolute bottom-1/2 -right-8 floating-animation glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg z-20" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">architecture</span>
              </div>
              <div><p className="text-label-sm font-bold text-on-surface">Clean Architecture</p></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
