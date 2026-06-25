import { SITE } from '@/data/site';

// Lime-palette trust bar.

export default function LimeTrustBar() {
  return (
    <div className="bg-slate-900 text-slate-100 text-xs md:text-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center md:justify-between gap-x-5 gap-y-1.5">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          <span className="flex items-center gap-1.5">
            <span className="text-lime-400">📍</span>
            <span>Northern Beaches Local</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="text-lime-400">✓</span>
            <span>NSW Fair Trading Licensed</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <span className="text-lime-400">🛡</span>
            <span>2-Year Written Guarantee</span>
          </span>
          <span className="hidden lg:flex items-center gap-1.5">
            <span className="text-lime-400">📝</span>
            <span>Fixed-Price Quote in 24 Hours</span>
          </span>
        </div>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex items-center gap-1.5 font-bold text-lime-400 hover:text-lime-300 whitespace-nowrap"
        >
          <span>📞</span>
          <span>{SITE.phone}</span>
        </a>
      </div>
    </div>
  );
}
