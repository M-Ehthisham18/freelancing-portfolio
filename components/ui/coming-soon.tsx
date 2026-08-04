import React from 'react';
import { ErrorState } from './error-state';

interface ComingSoonProps {
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export function ComingSoon({
  title = "Coming Soon",
  description = "We're currently crafting this experience to ensure it meets our standards of technical excellence. Check back soon for updates.",
  primaryAction,
  secondaryAction,
  className,
}: ComingSoonProps) {
  return (
    <ErrorState
      type="coming-soon"
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      className={className}
    />
  );
}
