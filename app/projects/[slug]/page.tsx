import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { ErrorState } from '@/components/ui/error-state';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { absoluteUrl, siteConfig } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalUrl = absoluteUrl(`/projects/${slug}`);

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex-1">
        <Section className="py-24">
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
      </main>
    );
  }

  return (
    <main className="flex-1">
      <Section className="py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-headline-lg font-bold text-on-background mb-4">{project.title}</h1>
            <p className="text-body-lg text-on-surface-variant">
              Project details for {project.title} will be implemented here.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
