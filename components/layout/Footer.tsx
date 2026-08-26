import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 pt-12 sm:pt-16 pb-8">
      <div className="max-w-container-max mx-auto px-5 sm:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
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
            <p className="text-label-sm text-on-surface-variant max-w-xs leading-relaxed">
              High-performance web solutions aimed at supporting business growth.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h2 className="text-body-md font-bold text-on-surface">Navigation</h2>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
              <Link href="/#services" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center">
                Services
              </Link>
              <Link href="/#projects" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center">
                Projects
              </Link>
              <Link href="/#process" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center">
                Process
              </Link>
              <Link href="/#contact" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-3">
            <h2 className="text-body-md font-bold text-on-surface">Connect</h2>
            <nav aria-label="Social links" className="flex flex-col gap-2.5">
              <a
                href="https://github.com/M-Ehthisham18"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="Github"
                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ehthisham-ul-haq-538abb295/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="LinkedIn"
                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
              >
                LinkedIn
              </a>
              <a
                href="https://calendly.com/ehthishamulhaq073/30min"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="Call"
                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
              >
                Schedule a Call
              </a>
              <a
                href="mailto:hello@studiodev.com"
                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
              >
                hello@studiodev.com
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 md:pt-8 border-t border-outline-variant/10">
          <p className="text-label-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} StudioDev. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-label-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 min-h-[36px] inline-flex items-center"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
