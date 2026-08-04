import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { ErrorState } from '@/components/ui/error-state';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <Section className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Container>
          <ErrorState
            type="not-found"
            title="Project Not Found"
            description="We couldn't find the project you're looking for. It may have been moved or removed from our portfolio."
            primaryAction={{
              label: "Back to Projects",
              href: "/",
            }}
          />
        </Container>
      </Section>
    );
  }

  return (
    <Section className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Container>
        <div className="text-center">
          <h1 className="text-headline-lg font-bold text-on-background mb-4">{project.title}</h1>
          <p className="text-body-lg text-on-surface-variant">
            Project details for {project.title} will be implemented here.
          </p>
        </div>
      </Container>
    </Section>
  );
}
