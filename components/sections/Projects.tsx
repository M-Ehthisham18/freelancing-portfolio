import React from 'react';
import Link from 'next/link';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ProjectCard } from '../cards/ProjectCard';
import { projects } from '@/lib/data/projects';

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
            />
          ))}
        </div>

        {/* Section End CTA */}
        <div className="mt-16 text-center">
          <button data-magnetic="View All" className="px-8 py-4 bg-transparent border border-outline text-on-background rounded-lg font-medium text-body-md font-headline-md hover:bg-surface-container transition-all active:scale-95">
            View All Projects
          </button>
        </div>
      </Container>
    </Section>
  );
}
