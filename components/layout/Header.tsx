import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center h-16">
        {/* Brand Identity */}
        <div className="flex items-center gap-2">
          <Image
            alt="StudioDev Logo"
            className="w-8 h-8 rounded-lg object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzEg32LPxkiqs2ZlEJ5ko11MYNkADZcD9vGlQmYmYnn1fytkFPDje-bs9o74ClbLyJK_AiK09Vf-mVKcgcl0ObBwL_dUV3PeL7bL5gNwgL9HJquUiGsrd57u_o26biVg4Ta5msml4jbo-kU9pGxRYeUor-PQ6oCL-FRGGsfk6M7Ne8hCSk1Gu3_1DQ4kIbLxrsohs6qsyyrw2Q7WtRPkYvBXUZ3o4u43pHYq4KgXDAiljasme6jKJ9A"
            width={32}
            height={32}
            unoptimized
          />
          <span className="text-body-lg font-headline-lg font-bold text-on-background tracking-tight">
            StudioDev
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Services", "Process", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-sm font-label-sm"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-stack-md">
          <button className="hidden lg:flex px-6 py-2 bg-primary text-on-primary rounded-lg font-medium text-label-sm font-label-sm hover:opacity-80 transition-opacity active:scale-95 duration-150">
            Book a Free Consultation
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-on-background" aria-label="Toggle Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
