// Slim after-hero trust strip. Lighter than the original 6-item version —
// 4 inline ✓ signals, single line on desktop. Each page passes its own
// problem-specific 4 items.

export default function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="bg-navy-50 border-y border-navy-100 px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-800">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span className="font-medium leading-tight">{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
