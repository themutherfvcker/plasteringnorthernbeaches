import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: 'Ceiling Repair Sydney — Fixed-Price Quote in 24 Hours | Plastering Northern Beaches',
  description:
    'Cracked ceiling, sagging plaster, water stain on the ceiling? Get a fixed-price ceiling repair quote within 24 hours. Most repairs done in one visit. Backed by our 2-year written workmanship guarantee. Call now or text us a photo.',
  alternates: { canonical: `${SITE.url}/services/ceiling-repair-sydney` },
  openGraph: {
    title: 'Ceiling Repair Sydney — Fixed-Price Quote in 24 Hours',
    description:
      'Cracked ceiling, sagging plaster, water stain? Fixed-price quote in 24 hours. Most repairs done in one visit. 2-year written guarantee.',
    url: `${SITE.url}/services/ceiling-repair-sydney`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  {
    q: 'How much does ceiling repair cost in Sydney?',
    a: 'Most ceiling crack repairs on the Northern Beaches sit between $290 and $800 depending on size and access. Water-damage repairs (replacing a 1m² section + skim coat + paint-ready finish) are usually $600–$1,500. A full ceiling replacement starts around $2,200. Every quote is fixed-price and written — no hourly rates and no surprise extras after we start.',
  },
  {
    q: 'How long does a ceiling repair take?',
    a: 'Most jobs are completed in one visit — usually 2 to 6 hours. Larger water-damage repairs sometimes need a second visit if drying time is required between coats (24–48 hours). We tell you up front what to expect before you book.',
  },
  {
    q: 'What if the repair fails or cracks again?',
    a: 'Our 2-year written workmanship guarantee covers any cracking, sagging or finish failure caused by our work. If it fails inside two years, Jack comes back and fixes it free.',
  },
  {
    q: 'Do you deal with my insurance company directly?',
    a: 'Yes — for water damage and storm damage repairs we provide quotes formatted for insurance assessors and coordinate timing with your insurer. Just tell us at the quote stage if it’s an insurance job.',
  },
  {
    q: 'Are you NSW Fair Trading licensed?',
    a: 'Yes. Jack is a NSW Fair Trading licensed plasterer. His licence number is provided in writing with every quote, and you can verify it directly at service.nsw.gov.au.',
  },
  {
    q: 'What if I just need a small patch?',
    a: 'Small ceiling patches start around $290. We’ll quote single-hole jobs happily, and while we’re on site we’ll often spot a couple of other small issues we can quote at the same time. No pressure to book extras — just so you know what’s there.',
  },
  {
    q: 'How quickly can you come and quote?',
    a: 'We aim to be at your door within 24 hours of your enquiry. For storm damage or sagging ceilings we usually get there the same day — call us first if it’s urgent.',
  },
  {
    q: 'Do I need to be home for the quote?',
    a: 'Ideally yes — Jack can ask the right questions on site and answer yours face-to-face. If that’s tricky, text us photos and we’ll provide a rough quote range first, then confirm a fixed price when we inspect.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/services/ceiling-repair-sydney#service`,
  name: 'Ceiling Repair Sydney',
  serviceType: 'Ceiling Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({
    '@type': 'City',
    name: s,
    containedInPlace: { '@type': 'State', name: 'New South Wales' },
  })),
  description:
    'Fixed-price ceiling repair across Sydney Northern Beaches. Cracked ceilings, sagging plaster, water-damage ceiling repair, ceiling holes, cornice repair. Most jobs completed in one visit. Backed by a 2-year written workmanship guarantee.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'AUD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'AUD',
      minPrice: 290,
      maxPrice: 2500,
    },
    url: `${SITE.url}/services/ceiling-repair-sydney`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ceiling Repair Sydney',
      item: `${SITE.url}/services/ceiling-repair-sydney`,
    },
  ],
};

export default function CeilingRepairSydneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Click-to-call sticky bar (mobile) */}
      <a
        href={`tel:${phoneTel}`}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 v2-cta-gradient text-navy-900 font-extrabold text-center py-4 shadow-2xl"
      >
        📞 Call Jack now — {phoneDisplay}
      </a>

      {/* Trust bar (Vista-pattern, above the header) */}
      <TrustBar />

      {/* Slim header */}
      <header className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-navy-900 text-lg">
            Plastering Northern Beaches
          </Link>
          <a
            href={`tel:${phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors"
          >
            📞 {phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO — dream outcome + symptom-match · background video */}
      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background video — Pexels 'Worker Plastering a Wall' by Tima Miroshnichenko.
            Free for commercial use under Pexels licence.
            TODO: download to /public/video/hero-plastering.mp4 to remove the CDN
            dependency and improve cache-headers / LCP. Stock placeholder for now;
            swap to Jack-recorded footage when available. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/videos/6474074/free-video-6474074.jpg?auto=compress&cs=tinysrgb&w=1280"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-70"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/6474074/6474074-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay — keep hero text readable over the video */}
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900/90 via-navy-900/75 to-navy-900/50" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Cracked Ceiling? Water Stain? Sagging Plaster?
              <span className="block mt-3 text-brand-400">
                Make it look like it never happened.
              </span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">✓</span>
                <span>Get a <strong className="text-white">fixed-price quote within 24 hours</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">✓</span>
                <span><strong className="text-white">Most ceiling repairs completed in one visit.</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">✓</span>
                <span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">✓</span>
                <span><strong className="text-white">Call now</strong> — first-ring answer, or <strong className="text-white">15-minute callback</strong>.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform"
              >
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">
              Or use the 3-field form → Quote at your door within 24 hours.
            </p>
          </div>

          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="ceiling-repair-sydney" problem="Ceiling Repair" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-navy-50 border-y border-navy-100 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-navy-800">
          {[
            'Fixed-price written quote',
            '24-hour on-site quote',
            'Most repairs in one visit',
            '2-year written guarantee',
            'NSW Fair Trading licensed',
            'Fully invoiced, GST',
          ].map((t) => (
            <div key={t} className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span className="font-medium leading-tight">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem agitation — Sound familiar? */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Sound familiar?
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10 max-w-2xl mx-auto">
            If any of this is you, you&apos;re not alone. Here&apos;s what we hear every week from Sydney homeowners:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">
                &ldquo;Brown patch on the ceiling, getting bigger every week. Can&apos;t even sleep under it.&rdquo;
              </p>
              <p className="text-navy-500 text-sm font-semibold">— Water damage panic</p>
            </blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">
                &ldquo;Three plasterers ghosted me last week. Two never called back. One didn&apos;t show up.&rdquo;
              </p>
              <p className="text-navy-500 text-sm font-semibold">— Tired of being ghosted</p>
            </blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">
                &ldquo;Quoted $2,200 to replace the ceiling. Is that fair? How am I even meant to know?&rdquo;
              </p>
              <p className="text-navy-500 text-sm font-semibold">— Sticker shock + no anchor</p>
            </blockquote>
          </div>
          <div className="text-center mt-10">
            <p className="text-navy-800 text-lg md:text-xl font-semibold max-w-2xl mx-auto">
              We hear you. Here&apos;s exactly how it works with us — no chasing, no guesswork, no surprise bills.
            </p>
          </div>
        </div>
      </section>

      {/* The after-state — dream outcome painted vividly */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">
            The after state
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            Picture your ceiling, ten days from now.
          </h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The crack — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The brown water stain — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>That bit you&apos;ve been avoiding looking at every morning — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">
              Just a clean ceiling. Like the damage never happened.
            </p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">
            That&apos;s what we build for you. Fixed price, one visit, 2-year written guarantee — and we&apos;re out of your hair before you notice we were there.
          </p>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            How it works
          </h2>
          <p className="text-navy-600 text-center text-lg mb-12">
            Three steps. No back-and-forth. No mystery pricing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: '1',
                title: 'Call Jack — or fill in the 3-field form',
                body: 'Pick up the phone or send us your name, mobile and suburb. Jack answers most calls on the first ring. Miss him? 15-minute callback during business hours.',
              },
              {
                n: '2',
                title: 'Fixed-price quote in 24 hours',
                body: 'Jack arrives at your door within 24 hours and gives you a clear written quote on the spot. No "we’ll get back to you." No surprise add-ons. No hard sell.',
              },
              {
                n: '3',
                title: 'Most repairs done in one visit',
                body: 'We turn up when we say. Most ceiling repairs are finished in a single visit, paint-ready. Backed by our 2-year written workmanship guarantee.',
              },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-7 shadow-md">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-navy-900 font-extrabold text-xl flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After gallery — placeholder until Jack provides real photos */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Recent Northern Beaches ceiling repairs
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            A few of Jack&apos;s recent jobs. Same-day quote, fixed price, one-visit finish.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Dee Why', job: 'Water-damaged ceiling section', time: 'Quoted 9am, finished by 4pm' },
              { suburb: 'Manly', job: 'Sagging plaster repair + skim', time: 'One visit, paint-ready' },
              { suburb: 'Mona Vale', job: 'Storm-damaged ceiling + cornice', time: 'Quote within 24 hours, fixed in 2 days' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">
                {/* Image placeholder — replace with real before/after for Jack's job */}
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center">
                  <span className="text-navy-600 font-semibold text-sm">
                    [ {j.suburb} before/after photo ]
                  </span>
                </div>
                <figcaption className="p-5">
                  <div className="font-bold text-navy-900 mb-1">{j.suburb}</div>
                  <div className="text-navy-700 text-sm mb-2">{j.job}</div>
                  <div className="text-navy-500 text-xs font-semibold">{j.time}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            One short call. Your ceiling looking like the damage never happened.
          </h2>
          <p className="text-navy-200 mb-6">
            Fixed-price quote in 24 hours. Most repairs done in one visit. Call Jack now, or text a photo.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30"
            >
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials — placeholder until real Google reviews live */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            What Northern Beaches homeowners say
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                quote: 'Jack turned up exactly when he said he would. Quoted $480 to fix our cracked ceiling and that was the final price — no surprises. Done in one afternoon and it looks brand new.',
                name: 'Sarah M.',
                suburb: 'Dee Why',
              },
              {
                stars: 5,
                quote: 'Insurance job after a storm leak. Jack handled the paperwork side, gave us a fixed price, and finished the ceiling in two days. Easiest tradie experience we&apos;ve had in years.',
                name: 'Mark T.',
                suburb: 'Mona Vale',
              },
              {
                stars: 5,
                quote: 'Texted a photo on the Tuesday, had a written quote on the Wednesday, ceiling fixed by Friday. Honestly the smoothest job we&apos;ve had done.',
                name: 'Priya R.',
                suburb: 'Manly',
              },
            ].map((t, i) => (
              <div key={i} className="bg-navy-50 rounded-2xl p-6 shadow-sm">
                <div className="text-brand-500 text-lg mb-3">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="text-navy-800 leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-navy-200 pt-3">
                  <div className="font-bold text-navy-900">{t.name}</div>
                  <div className="text-navy-500 text-sm">{t.suburb} · Google review</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">
            2yr
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Looks like the damage never happened — for 2 full years.
          </h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">
            Every ceiling repair we do is backed in writing for 2 full years.
            If the work cracks, sags or fails because of our craftsmanship,
            Jack comes back and fixes it free. No paperwork hassle. No excuses.
            Backed by Plastering Northern Beaches.
          </p>
          <p className="text-navy-300 text-sm">
            Guarantee terms supplied with your written quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Ceiling repair — your questions
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            The most common questions we get before quoting a ceiling job.
          </p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-navy-50 rounded-xl border border-navy-100 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-bold text-navy-900 text-base md:text-lg flex justify-between items-start gap-3 list-none">
                  <span>{f.q}</span>
                  <span className="text-brand-500 text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-navy-700 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Ready for a ceiling that looks like the damage never happened?
            </h2>
            <p className="text-navy-100 text-lg mb-6">
              Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price quote at your door within 24 hours.
            </p>
            <div className="space-y-3 mb-8">
              <a
                href={`tel:${phoneTel}`}
                className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors"
              >
                <div className="font-bold text-lg">📞 Call Jack now</div>
                <div className="text-navy-200 text-sm">{phoneDisplay} · Answered first ring · 15-min callback if missed</div>
              </a>
              <div className="bg-white/10 border-2 border-white/30 rounded-xl p-5">
                <div className="font-bold text-lg">📝 Or use the 3-field form →</div>
                <div className="text-navy-200 text-sm">Jack calls you back within 24 hours</div>
              </div>
            </div>
            <ul className="text-navy-200 text-sm space-y-1.5">
              <li>✓ Fixed-price written quote — no hourly rates</li>
              <li>✓ Most repairs done in one visit</li>
              <li>✓ 2-year written guarantee</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div>
            <LeanQuoteForm source="ceiling-repair-sydney-bottom" problem="Ceiling Repair" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-navy-300 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">
            NSW Fair Trading licensed plasterer · Serving Northern Beaches and Sydney
          </p>
          <p className="mb-4">
            <a href={`tel:${phoneTel}`} className="text-brand-400 font-semibold hover:underline">
              {phoneDisplay}
            </a>
          </p>
          <p className="text-navy-500 text-xs">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            {' '}<Link href="/" className="hover:underline">Home</Link>
          </p>
        </div>
      </footer>

      {/* Bottom padding so sticky mobile call bar doesn't cover content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
