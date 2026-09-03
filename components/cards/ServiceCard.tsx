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
      className="
        flex flex-col gap-3
        md:flex-col md:items-start md:gap-5 md:p-7 md:rounded-xl md:border md:border-outline-variant/10 md:bg-surface-container-low md:hover:bg-surface-container md:transition-all md:hover-lift
      "
    >
      {/* Row 1: Icon + Heading */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-[15px] leading-[1.3] md:text-[22px] md:leading-[1.3] font-bold text-on-surface">
          {title}
        </h3>
      </div>

      {/* Row 2: Description - indented under icon+heading */}
      <div className="pl-[calc(2.25rem+0.75rem)] md:pl-0">
        <p className="text-[14px] leading-[1.55] md:text-body-md text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}