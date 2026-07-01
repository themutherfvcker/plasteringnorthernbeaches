import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';

// Sticky white header with logo, nav, phone + Free Quote CTA. Extracted
// from the homepage so every page carries the same top-of-page density.
//
// Nav anchor strategy: `Services` links to the /plasterer-northern-beaches
// hub (a real page — works from anywhere). The remaining nav items point
// to homepage-only sections via absolute paths so they always resolve
// correctly, whether the visitor is on the homepage or an internal page.
export default function SiteHeader() {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-navy-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
            <Image src="/logo.webp" alt={`${SITE.name} logo`} fill sizes="48px" priority className="object-cover" />
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-navy-900 text-base md:text-lg block">{SITE.name}</span>
            <span className="font-extrabold text-brand-600 text-sm md:text-base block">{SITE.tagline}</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/plasterer-northern-beaches" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Services</Link>
          <a href="/#why-us" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Why Us</a>
          <a href="/#reviews" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Reviews</a>
          <a href="/#faq" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="hidden sm:flex items-center gap-2 text-navy-800 font-semibold hover:text-brand-600 transition-colors">
            📞 <span>{SITE.phone}</span>
          </a>
          <a href="/#quote" className="v2-cta-gradient text-navy-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg shadow-brand-500/20">
            Free Quote →
          </a>
        </div>
      </div>
    </header>
  );
}
