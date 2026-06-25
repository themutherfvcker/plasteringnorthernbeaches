import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

// Post-job review-generation landing page. Jack texts customers a link
// to this page after every completed job; one big CTA out to the Google
// review form. Robots noindex — not for ranking, not for paid traffic.
//
// PRE-LAUNCH SETUP:
//   1. Set up Jack's Google Business Profile (requires real business
//      address — partner-blocked at the moment).
//   2. Once GBP is live, generate the review link via:
//      Google Business → Get more reviews → copy the short URL.
//   3. Replace GOOGLE_REVIEW_URL constant below with the real short URL.
//   4. Generate a QR code from this page's URL and stick it on Jack's
//      invoices + a fridge magnet customers can keep.

const GOOGLE_REVIEW_URL = 'https://g.page/r/PLACEHOLDER_REPLACE_WITH_REAL_REVIEW_LINK/review';

export const metadata: Metadata = {
  title: 'Leave Jack a review · Plastering Northern Beaches',
  description: 'Thanks for choosing Plastering Northern Beaches. Take 30 seconds to leave Jack a Google review — it makes a huge difference for a local tradie.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/leave-a-review` },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

export default function Page() {
  return (
    <main className="min-h-screen bg-navy-50 flex flex-col">
      {/* Slim header */}
      <header className="bg-white border-b border-navy-100">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-navy-900 text-lg">Plastering Northern Beaches</Link>
          <a href={`tel:${phoneTel}`} className="text-brand-600 font-bold text-sm">📞 {phoneDisplay}</a>
        </div>
      </header>

      <section className="flex-1 px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Trust mark */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-navy-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-brand-500 text-lg">★★★★★</span>
              <span className="text-navy-700 font-bold text-sm">Google reviews</span>
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-navy-900 text-center mb-4 leading-tight">
            Thanks for choosing Jack.
          </h1>
          <p className="text-navy-600 text-lg md:text-xl text-center mb-10 leading-relaxed">
            If we did a good job, a 30-second Google review makes a <strong className="text-navy-900">huge difference</strong>{' '}
            for a small Northern Beaches tradie. It&apos;s the single most helpful thing you can do for us.
          </p>

          {/* The CTA */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-navy-100 mb-8">
            <p className="text-navy-700 text-base text-center mb-6">
              One click → write a quick line → done.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full v2-cta-gradient text-navy-900 font-extrabold text-lg md:text-xl text-center py-5 rounded-xl shadow-lg shadow-brand-500/30 hover:scale-[1.02] transition-transform"
            >
              ⭐ Leave a Google review →
            </a>
            <p className="text-navy-500 text-xs text-center mt-4">
              Opens Google in a new tab. We don&apos;t see what you write until you submit it.
            </p>
          </div>

          {/* Why it matters */}
          <div className="bg-white border border-navy-100 rounded-2xl p-6 mb-6">
            <h2 className="font-bold text-navy-900 text-lg mb-3">Why does it matter?</h2>
            <ul className="space-y-2 text-navy-700">
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold mt-0.5">•</span>
                <span>Every review helps the next Northern Beaches homeowner find a tradie they can trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold mt-0.5">•</span>
                <span>Google reviews directly affect whether we show up when your neighbours search for a plasterer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold mt-0.5">•</span>
                <span>If anything wasn&apos;t right, please call Jack first — we&apos;ll fix it. The 2-year guarantee is real.</span>
              </li>
            </ul>
          </div>

          {/* Issue path */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
            <h2 className="font-bold text-navy-900 text-base mb-2">⚠ Something not right?</h2>
            <p className="text-navy-700 text-sm leading-relaxed">
              Please call Jack first on{' '}
              <a href={`tel:${phoneTel}`} className="font-bold text-brand-700 underline">{phoneDisplay}</a>
              {' '}before leaving a review. The 2-year written workmanship guarantee is real — we&apos;ll come back and fix anything that didn&apos;t turn out the way it should have, no excuses.
            </p>
          </div>

          <p className="text-navy-500 text-sm text-center">
            Cheers. — Jack &amp; the Plastering Northern Beaches team
          </p>
        </div>
      </section>

      <footer className="bg-navy-900 text-navy-300 px-4 py-6">
        <div className="max-w-3xl mx-auto text-center text-xs">
          <p>© {new Date().getFullYear()} {SITE.legalName}. <Link href="/" className="hover:underline">Home</Link></p>
        </div>
      </footer>
    </main>
  );
}
