import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Cornice Repair Sydney — Fixed-Price Quote in 24 Hours | Plastering Northern Beaches',
  description:
    'Cracked cornices? Sagging detail? Damaged plasterwork? Get a fixed-price cornice repair quote within 24 hours. Heritage profile matching available. Backed by our 2-year written workmanship guarantee. Call Jack now.',
  alternates: { canonical: `${SITE.url}/services/cornice-repair-sydney` },
  openGraph: {
    title: 'Cornice Repair Sydney — Fixed-Price Quote in 24 Hours',
    description: 'Cracked or sagging cornices restored. Heritage profile matching. Most jobs done in one visit. 2-year written guarantee.',
    url: `${SITE.url}/services/cornice-repair-sydney`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'How much does cornice repair cost in Sydney?', a: 'Most cornice crack and gap repairs sit between $290 and $600 per room. A full cornice replacement (5 lineal metres, modern profile) is usually $480–$850. Heritage / Federation profile replacement starts around $980. Bundle multiple rooms and the per-room rate drops. Every quote is fixed-price and written.' },
  { q: 'Can you match my heritage cornice profile?', a: 'Yes — we match Federation, Victorian and Edwardian profiles. We carry the common pre-cast profiles, and for unique heritage detail we can source or hand-form to match. Send a photo at the quote stage so we know what we&apos;re matching.' },
  { q: 'How long does cornice repair take?', a: 'Most single-room cornice repairs are completed in one visit (3–5 hours). Full-room replacement is typically a single day. Heritage profile matching with sourcing may need a second visit 5–10 days after the quote.' },
  { q: 'My cornice is just cracking at the corner — repair or replace?', a: 'Corner cracking from house movement is usually a repair, not a replace. We fill, feather, re-bond and paint-ready the section. Cost is much lower than replacement. Send a photo and we&apos;ll tell you straight at the quote stage which is the better call.' },
  { q: 'What if the repair fails or cracks?', a: 'Our 2-year written workmanship guarantee covers any cracking, lifting or finish failure caused by our work. Jack comes back and fixes it free.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes — Jack is a NSW Fair Trading licensed plasterer. Licence number provided in writing with every quote, verifiable at service.nsw.gov.au.' },
  { q: 'Do you do square-set / shadowline (no cornice) finishes too?', a: 'Yes — modern square-set ceilings are a common ask, especially in renovations. Quote and pricing different to cornice; mention it on the call so we plan correctly.' },
  { q: 'My painter says the cornice needs to be removed before painting — can you advise?', a: 'Yes — we look at the cornice and tell you straight whether it needs replacement, just a patch, or whether the painter is being overly cautious. No-cost honest opinion at the quote stage.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE.url}/services/cornice-repair-sydney#service`,
  name: 'Cornice Repair Sydney', serviceType: 'Cornice Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({ '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' } })),
  description: 'Fixed-price cornice repair and replacement across Sydney Northern Beaches. Cracks, sagging, heritage profile matching, full replacement. Backed by our 2-year written workmanship guarantee.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'AUD', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', minPrice: 290, maxPrice: 3500 }, url: `${SITE.url}/services/cornice-repair-sydney` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Cornice Repair Sydney', item: `${SITE.url}/services/cornice-repair-sydney` },
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
          <Link href="/" className="font-extrabold text-navy-900 text-lg">Plastering Northern Beaches</Link>
          <a href={`tel:${phoneTel}`} className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors">📞 {phoneDisplay}</a>
        </div>
      </header>

      <section className="v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Cracked Cornices? Sagging Detail? Damaged Plasterwork?
              <span className="block mt-3 text-brand-400">Restore your home&apos;s character.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Get a <strong className="text-white">fixed-price quote within 24 hours</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Most cornice repairs done in one visit</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Heritage profile matching</strong> — Federation, Victorian and Edwardian.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call Jack now</strong> for a fast quote.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="cornice-repair-sydney" problem="Cornice Repair" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 border-y border-navy-100 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-navy-800">
          {['Fixed-price written quote', 'Heritage profile match', 'Most done in one visit', '2-year written guarantee', 'NSW Fair Trading licensed', 'Fully invoiced, GST'].map((t) => (
            <div key={t} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span className="font-medium leading-tight">{t}</span></div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Sound familiar?</h2>
          <p className="text-navy-600 text-center text-lg mb-10 max-w-2xl mx-auto">If any of this is you, you&apos;re not alone. Here&apos;s what we hear every week from Northern Beaches homeowners:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Original Federation cornice. Cracked at the corners. I don&apos;t want a cheap modern replacement — I want my house to look right.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Heritage owner pride</p></blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Painter says the cornice needs to come off before he can paint. I need a second opinion before I let him touch it.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Tradie disagreement</p></blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Selling the house in six weeks. Cornice is chipped and crumbling in the hallway. Open homes start soon.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Pre-sale deadline</p></blockquote>
          </div>
          <div className="text-center mt-10"><p className="text-navy-800 text-lg md:text-xl font-semibold max-w-2xl mx-auto">We hear you. Here&apos;s exactly how it works — fixed price, profile-matched, paint-ready.</p></div>
        </div>
      </section>

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Picture your cornice, restored.</h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The crack at the corner — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The sagging detail — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The cheap-looking chip you&apos;ve been embarrassed about — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">Your home&apos;s character — back where it should be.</p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">Fixed price, profile-matched, one visit, 2-year written guarantee.</p>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. Profile matched. Paint-ready by the time we leave.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Tell us about the cornice — modern or heritage, crack or full replacement, single room or whole home. Jack rings back within 24 hours.' },
              { n: '2', title: 'Fixed-price quote at your door within 24 hours', body: 'Jack inspects the cornice, identifies the profile, and gives you a fixed-price written quote. Heritage profiles assessed for matching options before quoting.' },
              { n: '3', title: 'Restored in one visit — paint-ready', body: 'Most cornice work completed in a single visit. Walls left clean, profile matched, paint-ready. GST invoice in your inbox before we&apos;ve left the street.' },
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

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent cornice work</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent cornice jobs across the Northern Beaches.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'Federation cornice repair, hallway', time: 'Profile matched, one visit, $880' },
              { suburb: 'Balgowlah', job: 'Full cornice replacement, master bedroom', time: 'Single day, $1,150' },
              { suburb: 'Mona Vale', job: 'Corner cracking repair, two rooms', time: 'Two-room bundle, $580' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center"><span className="text-navy-600 font-semibold text-sm">[ {j.suburb} before/after photo ]</span></div>
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

      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">One short call. Cornice restored. Character back where it should be.</h2>
          <p className="text-navy-200 mb-6">Fixed-price quote in 24 hours. Heritage profile matching included.</p>
          <div className="flex justify-center"><a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30">📞 Call Jack — {phoneDisplay}</a></div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">What Northern Beaches homeowners say</h2>
          <p className="text-navy-600 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Federation home, original cornice deteriorating. Jack matched the profile perfectly — even the painter couldn&apos;t tell which sections we&apos;d replaced.', name: 'Sarah M.', suburb: 'Manly' },
              { stars: 5, quote: 'Quoted for a full replacement by another tradie. Jack came round, said it was just a corner repair, fixed it for a fifth of the price. Honest.', name: 'David K.', suburb: 'Balgowlah' },
              { stars: 5, quote: 'Cornice crumbling in the hallway, open home in three weeks. Quoted Tuesday, fixed Friday, sold Sunday.', name: 'Priya R.', suburb: 'Mona Vale' },
            ].map((t, i) => (
              <div key={i} className="bg-navy-50 rounded-2xl p-6 shadow-sm">
                <div className="text-brand-500 text-lg mb-3">{'★'.repeat(t.stars)}</div>
                <p className="text-navy-800 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-navy-200 pt-3"><div className="font-bold text-navy-900">{t.name}</div><div className="text-navy-500 text-sm">{t.suburb} · Google review</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">2yr</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Restored character — for 2 full years.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">
            Every cornice repair and replacement is backed in writing for 2 full years. If the work cracks, lifts or fails — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Plastering Northern Beaches.
          </p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Cornice repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions we get most often before quoting a cornice job.</p>
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

      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to restore your home&apos;s character?</h2>
            <p className="text-navy-100 text-lg mb-6">Two ways to reach Jack. Fixed-price quote at your door within 24 hours.</p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
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
              <li>✓ Heritage profile matching</li>
              <li>✓ 2-year written guarantee</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="cornice-repair-sydney-bottom" problem="Cornice Repair" /></div>
        </div>
      </section>

      <footer className="bg-navy-900 text-navy-300 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">NSW Fair Trading licensed plasterer · Serving Northern Beaches and Sydney</p>
          <p className="mb-4"><a href={`tel:${phoneTel}`} className="text-brand-400 font-semibold hover:underline">{phoneDisplay}</a></p>
          <p className="text-navy-500 text-xs">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved. <Link href="/" className="hover:underline">Home</Link></p>
        </div>
      </footer>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
