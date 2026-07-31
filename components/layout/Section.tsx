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
      className={cn("py-section-gap relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}
