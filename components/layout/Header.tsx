'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "About", href: "/#why-work-with-me" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/contact" },
];

// Matches Tailwind's `md` breakpoint used as the desktop/mobile boundary.
const MOBILE_BREAKPOINT = 768;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the menu when the layout crosses into the desktop breakpoint.
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

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
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center h-16">
        {/* Brand Identity */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
          <Link href="/contact" data-magnetic="Book" className="hidden lg:flex px-6 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity active:scale-95 duration-150 items-center">
            Book a Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="md:hidden p-2 text-on-background"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-outline-variant/10"
        >
          <nav className="max-w-container-max mx-auto px-gutter py-6 flex flex-col gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-2 py-3 text-body-md text-on-surface-variant font-medium hover:text-primary transition-colors rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 px-6 py-3 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity text-center"
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
