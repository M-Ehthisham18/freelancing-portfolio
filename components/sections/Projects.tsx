import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ProjectCard } from '../cards/ProjectCard';
import { projects } from '@/lib/data/projects';

export function Projects() {
  return (
    <Section id="projects" className="bg-background border-t border-outline-variant/10">
      {/* Section Header — uses Container for proper padding */}
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-[26px] leading-[1.15] sm:text-[30px] md:text-headline-lg font-headline-lg text-on-background mb-3 md:mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[15px] leading-[1.6] sm:text-body-lg font-body-lg text-on-surface-variant">
            These projects demonstrate my focus on designing and developing modern, scalable web applications aimed at solving real business problems.
          </p>
        </div>
      </Container>

      {/* Mobile: Horizontal scroll-snap carousel. Desktop: standard 3-col grid inside Container. */}
      <div className="md:hidden relative">
        {/* Scroll indicator hint */}
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent pointer-events-none -z-10" aria-hidden="true" />

        <div className="flex gap-4 pb-4 overflow-x-auto scroll-snap-x scrollbar-hide -mx-5 px-5 sm:px-gutter">
          {projects.map((project) => (
            <div key={project.title} className="w-[85vw] max-w-[340px] min-w-[280px] flex-shrink-0 snap-center">
              <ProjectCard
                image={project.image}
                imageAlt={project.imageAlt}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: standard grid */}
      <Container className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              category={project.category}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </Container>

      {/* Section End CTA — "View All Projects" intentionally hidden for now.
          Re-enable by restoring a Link/button here when a /projects index page exists. */}
    </Section>
  );
}