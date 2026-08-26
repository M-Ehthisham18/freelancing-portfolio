import React from 'react';
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    // Mobile-first: 20px gutter, scales up at sm.
    <div className={cn("max-w-container-max mx-auto px-5 sm:px-gutter", className)}>
      {children}
    </div>
  );
}
