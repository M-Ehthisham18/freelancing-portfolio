interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div data-cursor-card className="p-8 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all hover-lift">
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <h3 className="text-headline-md font-bold text-on-surface">{title}</h3>
        <p className="text-body-md text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}
