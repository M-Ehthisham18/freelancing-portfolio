import Link from 'next/link';
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
}

export function ProjectCard({ image, imageAlt, category, title, description, tags, slug, liveUrl }: ProjectCardProps) {
  return (
    <div data-cursor-card className="group flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden hover-lift hover:bg-surface-container transition-all duration-300">
      <div className="relative aspect-video overflow-hidden border-b border-outline-variant/10">
        <Image
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          width={600}
          height={400}
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">
            {category}
          </span>
        </div>
        <h3 className="text-headline-md font-bold text-on-surface mb-3">{title}</h3>
        <p className="text-body-md text-on-surface-variant mb-6 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-medium rounded border border-outline-variant/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* "View Code" intentionally hidden for now — no repository URL configured.
            Preserve the underlying capability by adding a `repoUrl` field to the
            project data model and restoring a button here when available. */}
        <div className="flex gap-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95 text-center"
            >
              View Project
            </a>
          ) : (
            <Link
              href={`/projects/${slug}`}
              className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-90 transition-all active:scale-95 text-center"
            >
              View Project
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
