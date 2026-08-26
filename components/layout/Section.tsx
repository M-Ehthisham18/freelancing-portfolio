import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // Mobile-first: ~64px section gap (preserves 120px on larger screens via md+ override).
        "py-16 sm:py-20 md:py-section-gap relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
