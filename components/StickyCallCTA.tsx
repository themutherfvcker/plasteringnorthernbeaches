import { SITE } from '@/data/site';

// Lime-green sticky bottom CTA. Shows on ALL screen sizes so desktop
// visitors also get an always-visible call prompt as they scroll.
// Extracted from the homepage into a shared component so every page
// gets identical treatment.
export default function StickyCallCTA() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed bottom-0 left-0 right-0 z-50 bg-lime-500 hover:bg-lime-400 text-slate-900 font-extrabold text-center py-3 md:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-colors"
    >
      <div className="text-base md:text-xl uppercase tracking-wide leading-tight">
        <span className="text-xl md:text-2xl mr-1">📞</span>
        CALL JACK NOW ON <span className="font-black">{SITE.phone}</span>
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider font-bold mt-1 opacity-90 leading-tight">
        For your FREE plastering quote
      </div>
    </a>
  );
}
