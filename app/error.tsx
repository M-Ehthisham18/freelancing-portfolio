'use client';

import React from 'react';
import { ErrorState } from '@/components/ui/error-state';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Container>
        <ErrorState
          type="error"
          title="Something Went Wrong"
          description="An unexpected error occurred while attempting to load this page. We've been notified and are looking into it."
          primaryAction={{
            label: "Try Again",
            onClick: () => reset(),
          }}
          secondaryAction={{
            label: "Return Home",
            href: "/",
          }}
        />
      </Container>
    </Section>
  );
}
