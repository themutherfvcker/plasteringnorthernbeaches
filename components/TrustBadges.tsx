// Industry-association trust badges shown under the hero lead form.
//
// ⚠ PRE-LAUNCH GATE: each of these badges implies a real, current membership.
// Before driving paid OR organic traffic to pages displaying these, Jack must
// actually be a member of each association in good standing — otherwise this
// is misleading conduct under the NSW Fair Trading Act 1987 + Australian
// Consumer Law (Sched 2 of the Competition and Consumer Act 2010), with real
// regulatory exposure.
//
// Current state: PLACEHOLDER text badges. Visual structure is in place so the
// page composition can be evaluated, but the badges must be either:
//   (a) replaced with the official PNG/SVG logo files from each body's brand
//       kit once Jack registers / pays membership, OR
//   (b) removed before any traffic is run if Jack is not a member.
//
// Logos to source once memberships confirmed (host at /public/badges/):
//   - HIA brand kit: https://hia.com.au/about/brand-guidelines
//   - MBA NSW: https://www.mbansw.asn.au — request member logo file
//   - CSR Gyprock Trade Centre: https://www.gyprock.com.au/professionals

export default function TrustBadges() {
  return (
    <div className="mt-4">
      <p className="text-center text-xs text-navy-200 uppercase tracking-wider font-semibold mb-3">
        Member of
      </p>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white border-2 border-navy-100 rounded-lg p-3 text-center shadow-sm">
          <div className="font-extrabold text-navy-900 text-lg leading-none mb-1">HIA</div>
          <div className="text-navy-500 text-[10px] leading-tight font-medium">
            Housing Industry Association
          </div>
        </div>
        <div className="bg-white border-2 border-navy-100 rounded-lg p-3 text-center shadow-sm">
          <div className="font-extrabold text-navy-900 text-lg leading-none mb-1">MBA NSW</div>
          <div className="text-navy-500 text-[10px] leading-tight font-medium">
            Master Builders NSW
          </div>
        </div>
        <div className="bg-white border-2 border-navy-100 rounded-lg p-3 text-center shadow-sm">
          <div className="font-extrabold text-navy-900 text-lg leading-none mb-1">GYPROCK</div>
          <div className="text-navy-500 text-[10px] leading-tight font-medium">
            CSR Authorised Installer
          </div>
        </div>
      </div>
    </div>
  );
}
