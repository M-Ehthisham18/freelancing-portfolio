import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div
      data-cursor-card
      className="p-6 sm:p-7 md:p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift"
    >
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-[20px] leading-[1.3] sm:text-[22px] md:text-headline-md font-bold text-on-surface">{title}</h3>
        <p className="text-[15px] sm:text-body-md text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
