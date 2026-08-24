import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div data-cursor-card className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-headline-md font-bold text-on-surface">{title}</h3>
        <p className="text-body-md text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}
