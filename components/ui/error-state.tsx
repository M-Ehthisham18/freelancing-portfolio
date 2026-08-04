import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export type ErrorStateType = 'error' | 'not-found' | 'empty' | 'coming-soon';

interface ErrorStateProps {
  type: ErrorStateType;
  title: string;
  description: string;
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
  icon?: React.ReactNode;
  className?: string;
}

export function ErrorState({
  type,
  title,
  description,
  primaryAction,
  secondaryAction,
  icon,
  className,
}: ErrorStateProps) {
  // Map state types to specific icons and styles based on the Executive Minimalist design system
  const stateConfigs = {
    error: {
      icon: <span className="material-symbols-outlined text-primary text-4xl">error</span>,
      variant: 'destructive',
    },
    'not-found': {
      icon: <span className="material-symbols-outlined text-primary text-4xl">search_off</span>,
      variant: 'outline',
    },
    empty: {
      icon: <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>,
      variant: 'outline',
    },
    'coming-soon': {
      icon: <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>,
      variant: 'default',
    },
  };

  const config = stateConfigs[type];

  return (
    <div className={cn(
      "flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all",
      className
    )}>
      {/* Icon Section */}
      <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20">
        {icon || config.icon}
      </div>

      {/* Text Content */}
      <h3 className="text-headline-md font-bold text-on-surface mb-3">
        {title}
      </h3>
      <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
        {description}
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {primaryAction && (
          <Button
            variant={config.variant}
            className="w-full sm:w-auto"
            onClick={primaryAction.onClick}
            as={primaryAction.href ? 'a' : 'button'}
            href={primaryAction.href}
          >
            {primaryAction.label}
          </Button>
        )}

        {secondaryAction && (
          <Button
            variant="ghost"
            className="w-full sm:w-auto"
            onClick={secondaryAction.onClick}
            as={secondaryAction.href ? 'a' : 'button'}
            href={secondaryAction.href}
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
