import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import LimeQuoteForm from '@/components/LimeQuoteForm';
import LimeTrustBar from '@/components/LimeTrustBar';

// PALETTE TEST PAGE — ceiling-repair content + fresh lime/slate/white palette.
// Robots noindex so this doesn't compete with the live /services/ceiling-repair-sydney
// page during the visual test.

export const metadata: Metadata = {
  title: 'Palette Test — Lime / Slate / White | Plastering Northern Beaches',
  description: 'Internal palette test page. Not for public traffic.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/test/lime` },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'How much does ceiling repair cost in Sydney?', a: 'Most ceiling crack repairs on the Northern Beaches sit between $290 and $800 depending on size and access. Water-damage repairs (replacing a 1m² section + skim coat + paint-ready finish) are usually $600–$1,500. A full ceiling replacement starts around $2,200. Every quote is fixed-price and written.' },
  { q: 'How long does a ceiling repair take?', a: 'Most jobs are completed in one visit — usually 2 to 6 hours. Larger water-damage repairs sometimes need a second visit if drying time is required (24–48 hours).' },
  { q: 'What if the repair fails or cracks again?', a: 'Our 2-year written workmanship guarantee covers any cracking, sagging or finish failure caused by our work. If it fails inside two years, Jack comes back and fixes it free.' },
  { q: 'Do you deal with my insurance company directly?', a: 'Yes — for water damage and storm damage repairs we provide quotes formatted for insurance assessors and coordinate timing with your insurer.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes. Jack is a NSW Fair Trading licensed plasterer. His licence number is provided in writing with every quote.' },
  { q: 'How quickly can you come and quote?', a: 'We aim to be at your door within 24 hours of your enquiry. For storm damage or sagging ceilings we usually get there the same day.' },
];

export default function Page() {
  return (
    <>
      {/* Sticky mobile call bar */}
      <a
        href={`tel:${phoneTel}`}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-lime-500 text-slate-900 font-extrabold text-center py-4 shadow-2xl"
      >
        📞 Call Jack now — {phoneDisplay}
      </a>

      <LimeTrustBar />

      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-slate-900 text-lg">Plastering Northern Beaches</Link>
          <a
            href={`tel:${phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors"
          >
            📞 {phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO — clean white + lime accent · Jack's photo as background */}
      <section className="relative bg-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background image — real Jack in lime polo (matches the brand colour). Shows on every screen. */}
        <Image
          src="/jack.webp"
          alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-95 z-0"
        />
        {/* Light overlay — mobile gets a strong top-down white wash so the dark hero text stays
            readable over the photo; desktop fades left-to-right so Jack stays clear on the right. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/65 md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-slate-900">
              Cracked Ceiling? Water Stain? Sagging Plaster?
              <span className="block mt-3 text-lime-600">Make it look like it never happened.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-slate-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-lime-600 mt-0.5">✓</span>
                <span>Get a <strong className="text-slate-900">fixed-price quote within 24 hours</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 mt-0.5">✓</span>
                <span><strong className="text-slate-900">Most ceiling repairs completed in one visit.</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 mt-0.5">✓</span>
                <span>Backed by our <strong className="text-slate-900">2-year written workmanship guarantee</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 mt-0.5">✓</span>
                <span><strong className="text-slate-900">Call now</strong> — Jack answers most calls on the first ring.</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-slate-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-lime-500/30 hover:scale-[1.02] transition-transform"
              >
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LimeQuoteForm source="test-lime-palette" problem="Ceiling Repair" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-50 border-y border-slate-200 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-slate-800">
          {['Fixed-price written quote', '24-hour on-site quote', 'Most repairs in one visit', '2-year written guarantee', 'NSW Fair Trading licensed', 'Fully invoiced, GST'].map((t) => (
            <div key={t} className="flex items-start gap-2">
              <span className="text-lime-600 font-bold mt-0.5">✓</span>
              <span className="font-medium leading-tight">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sound familiar */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">Sound familiar?</h2>
          <p className="text-slate-600 text-center text-lg mb-10 max-w-2xl mx-auto">
            If any of this is you, you&apos;re not alone. Here&apos;s what we hear every week from Sydney homeowners:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-slate-50 border-l-4 border-lime-500 rounded-r-xl p-6">
              <p className="text-slate-800 italic leading-relaxed mb-3">&ldquo;Brown patch on the ceiling, getting bigger every week. Can&apos;t even sleep under it.&rdquo;</p>
              <p className="text-slate-500 text-sm font-semibold">— Water damage panic</p>
            </blockquote>
            <blockquote className="bg-slate-50 border-l-4 border-lime-500 rounded-r-xl p-6">
              <p className="text-slate-800 italic leading-relaxed mb-3">&ldquo;Three plasterers ghosted me last week. Two never called back. One didn&apos;t show up.&rdquo;</p>
              <p className="text-slate-500 text-sm font-semibold">— Tired of being ghosted</p>
            </blockquote>
            <blockquote className="bg-slate-50 border-l-4 border-lime-500 rounded-r-xl p-6">
              <p className="text-slate-800 italic leading-relaxed mb-3">&ldquo;Quoted $2,200 to replace the ceiling. Is that fair? How am I even meant to know?&rdquo;</p>
              <p className="text-slate-500 text-sm font-semibold">— Sticker shock + no anchor</p>
            </blockquote>
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-800 text-lg md:text-xl font-semibold max-w-2xl mx-auto">
              We hear you. Here&apos;s exactly how it works with us — no chasing, no guesswork, no surprise bills.
            </p>
          </div>
        </div>
      </section>

      {/* After-state — dark slate for contrast rhythm */}
      <section className="bg-slate-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lime-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            Picture your ceiling, ten days from now.
          </h2>
          <div className="text-slate-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The crack — <span className="text-lime-400 font-semibold">gone</span>.</p>
            <p>The brown water stain — <span className="text-lime-400 font-semibold">gone</span>.</p>
            <p>That bit you&apos;ve been avoiding looking at every morning — <span className="text-lime-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">
              Just a clean ceiling. Like the damage never happened.
            </p>
          </div>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            That&apos;s what we build for you. Fixed price, one visit, 2-year written guarantee.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">How it works</h2>
          <p className="text-slate-600 text-center text-lg mb-12">Three steps. No back-and-forth. No mystery pricing.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Pick up the phone or send us your name, mobile and suburb. Jack answers most calls on the first ring, or rings you back within 24 hours.' },
              { n: '2', title: 'Fixed-price quote in 24 hours', body: 'Jack arrives at your door within 24 hours and gives you a clear written quote on the spot. No "we&apos;ll get back to you." No surprise add-ons.' },
              { n: '3', title: 'Most repairs done in one visit', body: 'We turn up when we say. Most ceiling repairs are finished in a single visit, paint-ready. Backed by our 2-year written workmanship guarantee.' },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-7 shadow-md border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-lime-500 text-slate-900 font-extrabold text-xl flex items-center justify-center mb-4">{s.n}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">Recent Northern Beaches ceiling repairs</h2>
          <p className="text-slate-600 text-center text-lg mb-10">A few of Jack&apos;s recent jobs. Same-day quote, fixed price, one-visit finish.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Dee Why', job: 'Water-damaged ceiling section', time: 'Quoted 9am, finished by 4pm' },
              { suburb: 'Manly', job: 'Sagging plaster repair + skim', time: 'One visit, paint-ready' },
              { suburb: 'Mona Vale', job: 'Storm-damaged ceiling + cornice', time: 'Quote within 24 hours, fixed in 2 days' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-600 font-semibold text-sm">[ {j.suburb} before/after photo ]</span>
                </div>
                <figcaption className="p-5">
                  <div className="font-bold text-slate-900 mb-1">{j.suburb}</div>
                  <div className="text-slate-700 text-sm mb-2">{j.job}</div>
                  <div className="text-slate-500 text-xs font-semibold">{j.time}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA — slate-900 with lime */}
      <section className="bg-slate-900 text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            One short call. Your ceiling looking like the damage never happened.
          </h2>
          <p className="text-slate-300 mb-6">
            Fixed-price quote in 24 hours. Most repairs done in one visit. Call Jack now.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-slate-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-lime-500/30 transition-colors"
            >
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">What Northern Beaches homeowners say</h2>
          <p className="text-slate-600 text-center text-lg mb-10">Real reviews from real Jack jobs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Jack turned up exactly when he said he would. Quoted $480 to fix our cracked ceiling and that was the final price — no surprises. Done in one afternoon and it looks brand new.', name: 'Sarah M.', suburb: 'Dee Why' },
              { stars: 5, quote: 'Insurance job after a storm leak. Jack handled the paperwork side, gave us a fixed price, and finished the ceiling in two days. Easiest tradie experience we&apos;ve had in years.', name: 'Mark T.', suburb: 'Mona Vale' },
              { stars: 5, quote: 'Texted a photo on the Tuesday, had a written quote on the Wednesday, ceiling fixed by Friday. Honestly the smoothest job we&apos;ve had done.', name: 'Priya R.', suburb: 'Manly' },
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-lime-500 text-lg mb-3">{'★'.repeat(t.stars)}</div>
                <p className="text-slate-800 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.suburb} · Google review</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-slate-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-500 text-slate-900 font-extrabold text-2xl mb-6 shadow-lg shadow-lime-500/30">
            2yr
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Looks like the damage never happened — for 2 full years.
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed mb-6">
            Every ceiling repair we do is backed in writing for 2 full years.
            If the work cracks, sags or fails because of our craftsmanship,
            Jack comes back and fixes it free. No paperwork hassle. No excuses.
            Backed by Plastering Northern Beaches.
          </p>
          <p className="text-slate-400 text-sm">
            Guarantee terms supplied with your written quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 text-center">
            Ceiling repair — your questions
          </h2>
          <p className="text-slate-600 text-center text-lg mb-10">
            The most common questions we get before quoting a ceiling job.
          </p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="cursor-pointer px-5 py-4 font-bold text-slate-900 text-base md:text-lg flex justify-between items-start gap-3 list-none">
                  <span>{f.q}</span>
                  <span className="text-lime-600 text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="bg-slate-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Ready for a ceiling that looks like the damage never happened?
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price quote at your door within 24 hours.
            </p>
            <div className="space-y-3 mb-8">
              <a
                href={`tel:${phoneTel}`}
                className="block bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 rounded-xl p-5 transition-colors"
              >
                <div className="font-bold text-lg text-white">📞 Call Jack now</div>
                <div className="text-slate-300 text-sm">{phoneDisplay} · Often answered on the first ring</div>
              </a>
              <div className="bg-slate-800 border-2 border-slate-700 rounded-xl p-5">
                <div className="font-bold text-lg text-white">📝 Or use the 3-field form →</div>
                <div className="text-slate-300 text-sm">Jack calls you back within 24 hours</div>
              </div>
            </div>
            <ul className="text-slate-300 text-sm space-y-1.5">
              <li><span className="text-lime-400 font-bold">✓</span> Fixed-price written quote — no hourly rates</li>
              <li><span className="text-lime-400 font-bold">✓</span> Most repairs done in one visit</li>
              <li><span className="text-lime-400 font-bold">✓</span> 2-year written guarantee</li>
              <li><span className="text-lime-400 font-bold">✓</span> NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div>
            <LimeQuoteForm source="test-lime-palette-bottom" problem="Ceiling Repair" />
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">NSW Fair Trading licensed plasterer · Serving Northern Beaches and Sydney</p>
          <p className="mb-4">
            <a href={`tel:${phoneTel}`} className="text-lime-400 font-semibold hover:underline">{phoneDisplay}</a>
          </p>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {SITE.legalName}. Internal palette test page (noindex).
            {' '}<Link href="/" className="hover:underline">Home</Link>
          </p>
        </div>
      </footer>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
