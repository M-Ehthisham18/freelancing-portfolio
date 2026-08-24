import React from 'react';
import Link from 'next/link';
import { AlertOctagon, SearchX, Package, Rocket } from 'lucide-react';
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
  const stateConfigs: Record<ErrorStateType, { icon: React.ReactNode; variant: 'destructive' | 'outline' | 'default'; HeadingTag: 'h1' | 'h3' }> = {
    error: {
      icon: <AlertOctagon className="h-10 w-10 text-primary" aria-hidden="true" />,
      variant: 'destructive',
      HeadingTag: 'h3',
    },
    'not-found': {
      icon: <SearchX className="h-10 w-10 text-primary" aria-hidden="true" />,
      variant: 'outline',
      HeadingTag: 'h1',
    },
    empty: {
      icon: <Package className="h-10 w-10 text-primary" aria-hidden="true" />,
      variant: 'outline',
      HeadingTag: 'h3',
    },
    'coming-soon': {
      icon: <Rocket className="h-10 w-10 text-primary" aria-hidden="true" />,
      variant: 'default',
      HeadingTag: 'h3',
    },
  };

  const config = stateConfigs[type];
  const HeadingTag = config.HeadingTag;

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
      <HeadingTag className="text-headline-md font-bold text-on-surface mb-3">
        {title}
      </HeadingTag>
      <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
        {description}
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {primaryAction && primaryAction.href ? (
          <Link href={primaryAction.href} className="w-full sm:w-auto">
            <Button variant={config.variant} className="w-full sm:w-auto">
              {primaryAction.label}
            </Button>
          </Link>
        ) : primaryAction ? (
          <Button
            variant={config.variant}
            className="w-full sm:w-auto"
            onClick={primaryAction.onClick}
          >
            {primaryAction.label}
          </Button>
        ) : null}

        {secondaryAction && secondaryAction.href ? (
          <Link href={secondaryAction.href} className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full sm:w-auto">
              {secondaryAction.label}
            </Button>
          </Link>
        ) : secondaryAction ? (
          <Button
            variant="ghost"
            className="w-full sm:w-auto"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
