// Under-form trust signals. 3 stacked text signals — all true today, no
// industry-association membership claims (zero Fair Trading Act risk).

export default function TrustBadges() {
  return (
    <div className="mt-4 bg-white border-2 border-navy-100 rounded-lg py-3 px-4 shadow-sm">
      <div className="grid grid-cols-1 gap-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-green-600 font-bold">✓</span>
          <span className="font-bold text-navy-900 text-sm">NSW Fair Trading Licensed</span>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-navy-100 pt-2">
          <span className="text-green-600 font-bold">✓</span>
          <span className="font-bold text-navy-900 text-sm">$20M Public Liability Insured</span>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-navy-100 pt-2">
          <span className="text-green-600 font-bold">✓</span>
          <span className="font-bold text-navy-900 text-sm">2-Year Guarantee · Brand-Backed</span>
        </div>
      </div>
    </div>
  );
}
