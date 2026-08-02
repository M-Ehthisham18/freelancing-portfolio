import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ProjectCard } from '../cards/ProjectCard';

const projects = [
  {
    image: '/images/projects/movie-ticket-booking.jpg',
    imageAlt: 'Movie Ticket Booking Platform',
    category: 'Full-Stack Web Application',
    title: 'Movie Ticket Booking Platform',
    description: 'A modern movie ticket booking platform designed to help users browse movies and select seats through an intuitive experience.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    image: '/images/projects/business-dashboard.jpg',
    imageAlt: 'Business Dashboard',
    category: 'Business Management',
    title: 'Business Dashboard',
    description: 'A responsive dashboard focused on simplifying data management, reporting, and daily business operations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    image: '/images/projects/ai-productivity-assistant.jpg',
    imageAlt: 'AI Productivity Assistant',
    category: 'AI Web Application',
    title: 'AI Productivity Assistant',
    description: 'An intelligent web application designed to help automate repetitive tasks using AI-powered features.',
    tags: ['Next.js', 'OpenAI', 'Node.js'],
  },
];

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
            />
          ))}
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
