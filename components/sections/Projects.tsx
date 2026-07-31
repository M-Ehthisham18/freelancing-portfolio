import React from 'react';
import Image from 'next/image';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

export function Projects() {
  return (
    <Section id="projects" className="bg-background border-t border-outline-variant/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-background mb-6">
            Featured Projects
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            These projects demonstrate my focus on designing and developing modern, scalable web applications aimed at solving real business problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="group flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden hover-lift hover:bg-surface-container transition-all duration-300">
            <div className="relative aspect-video overflow-hidden border-b border-outline-variant/10">
              <Image 
                alt="Movie Ticket Booking Platform" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64d2e1h4Ck2GLrWsPTBD3Q8T4N5_4bA2WQBtGJQdFEtjju8lZKJPk2PMThNyvnMcGU5OIRd2PHsEvDEWATMOG3t-b_b9tVOMJQdv2XCCjVaweR35CXOR2O8MEHaFErV0TyTV2Ikrx5O45n81ICIF88vUjzF1XBEVIw14uK5SogUffXXoIDwuA5dCnSToTzv38OR7I_vjS7ZJabyDSTF9Fzv6NO0v6wYw9jUjy3eXIv6UcF0CTjEC9lg"
                width={600}
                height={400}
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">Full-Stack Web Application</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface mb-3">Movie Ticket Booking Platform</h3>
              <p className="text-body-md text-on-surface-variant mb-6 flex-1">A modern movie ticket booking platform designed to help users browse movies and select seats through an intuitive experience.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">Next.js</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">Node.js</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95">View Project</button>
                <button className="flex-1 px-4 py-2 bg-transparent border border-outline text-on-background rounded-lg font-medium text-label-sm font-label-sm hover:bg-surface-container-highest transition-all active:scale-95">View Code</button>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="group flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden hover-lift hover:bg-surface-container transition-all duration-300">
            <div className="relative aspect-video overflow-hidden border-b border-outline-variant/10">
              <Image 
                alt="Business Dashboard" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUbHFcavkiuN9VOd-hgEI8y3l_HqkJbhVf7rk5UsKruy8mznY1ANLANsu5mjcWqIylDzylIC8jq4JDkPWcEEGuMEFSPJgRoUEzMgCdt51JjjbqW2HGN0NIt7tTsAZPpKSA_xuj3jeVnrcFQMKIWmdgkJCW_9xbKkWnZEz5mmFnc5VLuREH0e_aHrC8NJqXqBXoDcoMbAiE6_Xi2En5klr3eF-RZ-r2vsuDf4aUlxVUtZNqiQZHTWis-A"
                width={600}
                height={400}
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">Business Management</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface mb-3">Business Dashboard</h3>
              <p className="text-body-md text-on-surface-variant mb-6 flex-1">A responsive dashboard focused on simplifying data management, reporting, and daily business operations.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">React</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">TypeScript</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">Tailwind CSS</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95">View Project</button>
                <button className="flex-1 px-4 py-2 bg-transparent border border-outline text-on-background rounded-lg font-medium text-label-sm font-label-sm hover:bg-surface-container-highest transition-all active:scale-95">View Code</button>
              </div>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="group flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden hover-lift hover:bg-surface-container transition-all duration-300">
            <div className="relative aspect-video overflow-hidden border-b border-outline-variant/10">
              <Image 
                alt="AI Productivity Assistant" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUbURh-spcGPOJyISVraF4s9dxmZ2PrdKLVcfhh_Mfw2Uf9UQPbJR1epKmi6jCEa-RC4bgIFVAZRQVMnzQ-caTi7JZd4vqSQVbokRhgQ7pRLErf9GFnNxmP4GGjROxCbEQ_zE1dDq3d_VJBeNnVJ_pQkcEHxbXQicVzauLmwSyDCj7fX2Qqzwo_mnYa1nvRt0medUAgkTNTbUgqg8GoB8WZIk_F9YDjyBnFTmhnVIkiSipw4U4vGMpmQ"
                width={600}
                height={400}
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">AI Web Application</span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface mb-3">AI Productivity Assistant</h3>
              <p className="text-body-md text-on-surface-variant mb-6 flex-1">An intelligent web application designed to help automate repetitive tasks using AI-powered features.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">Next.js</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">OpenAI</span>
                <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20">Node.js</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95">View Project</button>
                <button className="flex-1 px-4 py-2 bg-transparent border border-outline text-on-background rounded-lg font-medium text-label-sm font-label-sm hover:bg-surface-container-highest transition-all active:scale-95">View Code</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section End CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
            View All Projects
          </button>
        </div>
      </Container>
    </Section>
  );
}
