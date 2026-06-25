// Under-form trust marker. Joe (2026-06-25) replaced the 3 industry-association
// placeholder badges (HIA / MBA NSW / CSR Gyprock) with a single simple
// "Fully Licensed and Insured" line — true today without any membership claim,
// no Fair Trading Act exposure.

export default function TrustBadges() {
  return (
    <div className="mt-4 bg-white border-2 border-navy-100 rounded-lg py-3 px-4 text-center shadow-sm">
      <div className="flex items-center justify-center gap-2">
        <span className="text-green-600 text-lg font-bold">🛡</span>
        <span className="font-extrabold text-navy-900 text-sm md:text-base tracking-wide">
          Fully Licensed and Insured
        </span>
      </div>
    </div>
  );
}
