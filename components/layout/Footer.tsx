import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 pt-16 pb-8">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                alt="StudioDev Logo"
                className="w-8 h-8 rounded-lg object-cover"
                src="/images/logo/studiodev-logo.jpg"
                width={32}
                height={32}
              />
              <span className="text-body-lg font-headline-lg font-bold text-on-background tracking-tight">
                StudioDev
              </span>
            </div>
            <p className="text-label-sm text-on-surface-variant max-w-xs">
              High-performance web solutions aimed at supporting business growth.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-body-md font-bold text-on-surface">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#services" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#process" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                Process
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-body-md font-bold text-on-surface">Contact</h4>
            <nav className="flex flex-col gap-3">
              <a href="mailto:hello@studiodev.com" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                hello@studiodev.com
              </a>
              <Link href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                Schedule a Call
              </Link>
            </nav>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-body-md font-bold text-on-surface">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" aria-label="Website">
                <span className="material-symbols-outlined text-[20px]">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" aria-label="Share">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant/10">
          <p className="text-label-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} StudioDev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-label-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="text-label-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
