'use client';

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "About", href: "/#why-work-with-me" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

// Matches Tailwind's `md` breakpoint used as the desktop/mobile boundary.
const MOBILE_BREAKPOINT = 768;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close the menu when the layout crosses into the desktop breakpoint.
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Lock body scroll while the mobile menu is open so the page beneath does
  // not bleed through. Cleanup restores original body overflow.
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[10000] bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-5 sm:px-gutter py-3 sm:py-4 flex justify-between items-center min-h-[60px] sm:min-h-[64px]">
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
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
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
          <Link
            href="/contact"
            data-magnetic="Book"
            className="hidden lg:flex px-6 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity active:scale-95 duration-150 items-center"
          >
            Book a Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="md:hidden p-2 text-on-background min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation — full-height overlay panel, scrollable inside the panel. */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          ref={navRef}
          className="md:hidden fixed inset-x-0 top-[60px] sm:top-[64px] bottom-0 bg-background/95 backdrop-blur-md border-t border-outline-variant/10 overflow-y-auto"
        >
          <nav aria-label="Mobile" className="max-w-container-max mx-auto px-5 py-6 flex flex-col gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-3.5 text-body-md text-on-surface-variant font-medium hover:text-primary transition-colors rounded-lg min-h-[48px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 px-6 py-3.5 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity text-center min-h-[48px] flex items-center justify-center"
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
