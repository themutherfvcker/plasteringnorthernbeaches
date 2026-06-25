import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';
import TrustBadges from '@/components/TrustBadges';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: "Water Damage Ceiling Repair Sydney — Fixed-Price Quote in 24 Hours | Jack's Plastering Northern Beaches",
  description:
    'Brown stain on the ceiling? Sagging plaster after a leak? Get a fixed-price water-damage ceiling repair quote within 24 hours. We deal directly with your insurance company. Backed by our 2-year written workmanship guarantee. Call Jack now.',
  alternates: { canonical: `${SITE.url}/services/water-damage-ceiling-repair` },
  openGraph: {
    title: 'Water Damage Ceiling Repair Sydney — Fixed-Price Quote in 24 Hours',
    description:
      'Brown stain spreading? Sagging ceiling after a leak? We restore your ceiling AND deal with your insurer directly. 2-year written guarantee.',
    url: `${SITE.url}/services/water-damage-ceiling-repair`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  {
    q: 'How much does water damage ceiling repair cost in Sydney?',
    a: 'Most water-damage ceiling repairs sit between $600 and $1,500 — section replacement, skim coat, paint-ready finish. Larger jobs (full ceiling replacement after a major leak) start around $2,200. Smaller jobs (single stain, surface repair) start around $290. Every quote is fixed-price and written before we start.',
  },
  {
    q: 'Do you deal directly with my insurance company?',
    a: 'Yes. We provide quotes formatted for insurance assessors, document the damage with photos, and coordinate timing directly with your insurer. Just tell us at the quote stage it’s an insurance job.',
  },
  {
    q: 'My ceiling is sagging — is that dangerous?',
    a: 'A sagging or bubbling ceiling holding water is a real safety risk — it can collapse without warning. Evacuate the room, don’t poke or touch it, and call us. We respond to sagging-ceiling emergencies within 1 hour across Sydney.',
  },
  {
    q: 'How long does water-damage repair take?',
    a: 'Most jobs are completed in one visit (3–6 hours). If the area needs drying time before plastering, we may need a second visit 24–48 hours later. We tell you up front before booking.',
  },
  {
    q: 'What if the repair fails or cracks?',
    a: 'Our 2-year written workmanship guarantee covers any cracking, sagging or finish failure caused by our work. Jack comes back and fixes it free.',
  },
  {
    q: 'Are you NSW Fair Trading licensed?',
    a: 'Yes — Jack is a NSW Fair Trading licensed plasterer. His licence number is provided in writing with every quote, and you can verify it directly at service.nsw.gov.au.',
  },
  {
    q: 'Can the water damage cause mould?',
    a: 'Yes — wet plasterboard left untreated grows mould within 24–72 hours. If your ceiling has been wet for more than a day, mention it on the call so we plan the repair (and any drying / treatment) accordingly.',
  },
  {
    q: 'How quickly can you come and quote?',
    a: 'For water damage and sagging ceilings we target same-day inspection across Sydney. Standard fixed-price quote is at your door within 24 hours of your call.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/services/water-damage-ceiling-repair#service`,
  name: 'Water Damage Ceiling Repair Sydney',
  serviceType: 'Water Damage Ceiling Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({
    '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' },
  })),
  description:
    'Fixed-price water-damage ceiling repair across Sydney. Brown stains, sagging plaster, storm leaks, burst-pipe damage. Insurance liaison included. Backed by our 2-year written workmanship guarantee.',
  offers: {
    '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'AUD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', minPrice: 290, maxPrice: 3500 },
    url: `${SITE.url}/services/water-damage-ceiling-repair`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Water Damage Ceiling Repair Sydney', item: `${SITE.url}/services/water-damage-ceiling-repair` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <a href={`tel:${phoneTel}`} className="md:hidden fixed bottom-0 left-0 right-0 z-50 v2-cta-gradient text-navy-900 font-extrabold text-center py-4 shadow-2xl">
        📞 Call Jack now — {phoneDisplay}
      </a>

      <TrustBar />

      <header className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight"><span className="font-extrabold text-navy-900 text-lg">{SITE.name}</span><span className="text-navy-500 text-xs font-medium">{SITE.tagline}</span></Link>
          <a href={`tel:${phoneTel}`} className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors">
            📞 {phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Brown Stain? Sagging Ceiling? Storm Damage?
              <span className="block mt-3 text-brand-400">Your home, safe again.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Get a <strong className="text-white">fixed-price quote within 24 hours</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">We deal with your insurance company directly.</strong></span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Most water-damage repairs <strong className="text-white">completed in one visit</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call Jack now</strong> — sagging-ceiling emergencies answered within 1 hour.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="water-damage-ceiling-repair" problem="Water Damage Ceiling Repair" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <TrustStrip items={['1-hour emergency response', 'Insurance liaison included', '2-year written guarantee', 'NSW Fair Trading licensed']} />

      {/* Sound familiar */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Sound familiar?</h2>
          <p className="text-navy-600 text-center text-lg mb-10 max-w-2xl mx-auto">
            If any of this is you, you&apos;re not alone. Here&apos;s what we hear every week from panicked Sydney homeowners:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Brown patch on the ceiling, getting bigger every week. Can&apos;t even sleep under it.&rdquo;</p>
              <p className="text-navy-500 text-sm font-semibold">— Pure water-damage panic</p>
            </blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;We refused the insurer&apos;s cash settlement. Now I&apos;ve been waiting six weeks for someone to start the work.&rdquo;</p>
              <p className="text-navy-500 text-sm font-semibold">— Insurance limbo</p>
            </blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6">
              <p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Part of the ceiling fell off during the storm. Kids&apos; bedroom. We slept in the lounge that night.&rdquo;</p>
              <p className="text-navy-500 text-sm font-semibold">— Storm event panic</p>
            </blockquote>
          </div>
          <div className="text-center mt-10">
            <p className="text-navy-800 text-lg md:text-xl font-semibold max-w-2xl mx-auto">
              We hear you. Here&apos;s exactly how it works with us — no chasing, no insurance runaround, no surprise bills.
            </p>
          </div>
        </div>
      </section>

      {/* After-state */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            Picture your ceiling, ten days from now.
          </h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The brown stain — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The sag — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The worry that it might come down on the kids — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">
              Your ceiling restored. Your home safe again. Your insurance sorted.
            </p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">
            That&apos;s what we build for you. Fixed price, insurer-liaison included, 2-year written guarantee.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. We handle the insurer. You stop worrying.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'For sagging or actively-leaking ceilings, call straight away — we respond within 1 hour across Sydney. For everything else, fill the form and Jack rings you back within 24 hours.' },
              { n: '2', title: 'Same-day or 24-hour quote at your door', body: 'Jack inspects the damage, documents it for your insurer (photos + measurements), and gives you a fixed-price written quote on the spot.' },
              { n: '3', title: 'We do the repair AND deal with your insurer', body: 'Most water-damage repairs are completed in one visit. We co-ordinate timing with your assessor and send them everything they need. You don&apos;t chase anyone.' },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-7 shadow-md">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-navy-900 font-extrabold text-xl flex items-center justify-center mb-4">{s.n}</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent water-damage repairs</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent insurance and direct-pay jobs across Sydney.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'Burst-pipe ceiling section + cornice', time: 'Insurance job — restored in 2 visits' },
              { suburb: 'Dee Why', job: 'Storm-damaged ceiling, sagging plaster', time: 'Same-day inspection, fixed in 3 days' },
              { suburb: 'Mona Vale', job: 'Brown stain + skim coat, paint-ready', time: 'One visit, 4 hours, done' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center">
                  <span className="text-navy-600 font-semibold text-sm">[ {j.suburb} before/after photo ]</span>
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
            Sagging ceiling? Don&apos;t wait. We respond within 1 hour.
          </h2>
          <p className="text-navy-200 mb-6">
            Insurance job or direct-pay — fixed-price quote, insurer-liaison included.
          </p>
          <div className="flex justify-center">
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30">
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">What Sydney homeowners say</h2>
          <p className="text-navy-600 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Burst pipe upstairs trashed our ceiling. Jack arrived same day, photographed everything for the insurer, and had the whole ceiling restored within the week. The insurer dealt with him directly — we didn&apos;t chase anything.', name: 'Sarah M.', suburb: 'Manly' },
              { stars: 5, quote: 'Storm cracked the ceiling open. Jack responded in under an hour. Restored it in two visits and the room looks like nothing happened. 10/10.', name: 'David K.', suburb: 'Dee Why' },
              { stars: 5, quote: 'Brown stain spreading after a roof leak. Texted on Tuesday, quoted Wednesday, fixed Friday. Easy.', name: 'Priya R.', suburb: 'Mona Vale' },
            ].map((t, i) => (
              <div key={i} className="bg-navy-50 rounded-2xl p-6 shadow-sm">
                <div className="text-brand-500 text-lg mb-3">{'★'.repeat(t.stars)}</div>
                <p className="text-navy-800 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-navy-200 pt-3">
                  <div className="font-bold text-navy-900">{t.name}</div>
                  <div className="text-navy-500 text-sm">{t.suburb} · Google review</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">2yr</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Your ceiling. Safe again. For 2 full years.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">
            Every water-damage repair is backed in writing for 2 full years. If the work cracks, sags or fails because of our craftsmanship — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Jack's Plastering Northern Beaches.
          </p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Water-damage ceiling repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions we get most often before quoting a water-damage job.</p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-navy-50 rounded-xl border border-navy-100 overflow-hidden">
                <summary className="cursor-pointer px-5 py-4 font-bold text-navy-900 text-base md:text-lg flex justify-between items-start gap-3 list-none">
                  <span>{f.q}</span>
                  <span className="text-brand-500 text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-navy-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to get your ceiling — and your home — safe again?</h2>
            <p className="text-navy-100 text-lg mb-6">
              Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price quote at your door within 24 hours. Insurance-liaison included.
            </p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
                <div className="font-bold text-lg">📞 Call Jack now</div>
                <div className="text-navy-200 text-sm">{phoneDisplay} · Sagging ceilings answered within 1 hour</div>
              </a>
              <div className="bg-white/10 border-2 border-white/30 rounded-xl p-5">
                <div className="font-bold text-lg">📝 Or use the 3-field form →</div>
                <div className="text-navy-200 text-sm">Jack calls you back within 24 hours</div>
              </div>
            </div>
            <ul className="text-navy-200 text-sm space-y-1.5">
              <li>✓ Fixed-price written quote — no hourly rates</li>
              <li>✓ We deal directly with your insurance company</li>
              <li>✓ 2-year written guarantee</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="water-damage-ceiling-repair-bottom" problem="Water Damage Ceiling Repair" /></div>
        </div>
      </section>

      <footer className="bg-navy-900 text-navy-300 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">NSW Fair Trading licensed plasterer · Serving Sydney and the Northern Beaches</p>
          <p className="mb-4"><a href={`tel:${phoneTel}`} className="text-brand-400 font-semibold hover:underline">{phoneDisplay}</a></p>
          <p className="text-navy-500 text-xs">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved. <Link href="/" className="hover:underline">Home</Link></p>
        </div>
      </footer>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
