import React from 'react';
import { ErrorState } from '@/components/ui/error-state';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Section className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Container>
        <ErrorState
          type="not-found"
          title="Page Not Found"
          description="The page you're looking for doesn't exist or has been moved to a new location. Let's get you back on track."
          primaryAction={{
            label: "Return to Home",
            href: "/",
          }}
        />
      </Container>
    </Section>
  );
}
