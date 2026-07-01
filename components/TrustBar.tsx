// Slim top trust strip — sits ABOVE the page header on every service landing
// page. Vista-pattern. 3 trust signals only (Joe — 2026-06-25: removed
// "Northern Beaches Local" + phone number to broaden the positioning to all
// of Sydney).

export default function TrustBar() {
  return (
    <div className="bg-navy-900 text-navy-100 text-sm md:text-base border-b border-navy-800">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
        <span className="flex items-center gap-1.5">
          <span className="text-brand-400">✓</span>
          <span>NSW Fair Trading Licensed</span>
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <span className="text-brand-400">🛡</span>
          <span>2-Year Written Guarantee</span>
        </span>
        <span className="hidden lg:flex items-center gap-1.5">
          <span className="text-brand-400">📝</span>
          <span>Fixed-Price Quote in 24 Hours</span>
        </span>
      </div>
    </div>
  );
}
