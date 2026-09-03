import Link from "next/link";
import Image from "next/image";

const navigationItems = [
  { label: "About", href: "/#why-work-with-me" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[10000] bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-5 sm:px-gutter py-2.5 sm:py-4 flex justify-between items-center min-h-[56px] sm:min-h-[64px]">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2" aria-label="StudioDev — home">
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-sm font-label-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-stack-md">
          {/* Desktop: full CTA */}
          <Link
            href="/contact"
            data-magnetic="Book"
            className="hidden lg:flex px-6 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity active:scale-95 duration-150 items-center"
          >
            Book a Free Consultation
          </Link>

          {/* Mobile / Tablet: compact Contact button */}
          <Link
            href="/contact"
            className="lg:hidden px-4 py-2 border border-primary/40 text-primary rounded-lg font-medium text-[13px] font-label-sm tracking-wide hover:bg-primary/10 transition-colors active:scale-95 min-h-[44px] flex items-center justify-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

