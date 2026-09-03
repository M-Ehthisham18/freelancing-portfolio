import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  liveUrl?: string;
  repoUrl?: string;
}

export function ProjectCard({ image, imageAlt, category, title, description, tags, repoUrl }: ProjectCardProps) {
  const hasRepoUrl = Boolean(repoUrl);

  return (
    <div
      data-cursor-card
      className="group flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden hover-lift hover:bg-surface-container transition-all duration-300"
    >
      {/* Image — large and dominant, editorial feel */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-outline-variant/10 bg-surface-container">
        <Image
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          width={600}
          height={375}
        />
        {/* Category badge overlaid on image — mobile only */}
        <div className="absolute top-3 left-3 md:hidden">
          <span className="inline-block px-2.5 py-1 bg-background/80 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-md border border-outline-variant/20">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1">
        {/* Category — desktop */}
        <div className="mb-3 sm:mb-4 hidden md:block">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">
            {category}
          </span>
        </div>
        <h3 className="text-[18px] leading-[1.25] sm:text-[22px] md:text-headline-md font-bold text-on-surface mb-1.5 sm:mb-3">{title}</h3>
        <p className="text-[14px] leading-[1.55] sm:text-body-md text-on-surface-variant mb-4 sm:mb-6 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-0 sm:mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] sm:text-[11px] font-label-sm font-medium rounded border border-outline-variant/20 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        {hasRepoUrl && (
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 sm:py-2 bg-transparent border border-outline text-on-background rounded-lg font-medium text-label-sm font-label-sm hover:bg-surface-container transition-all active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              View Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
