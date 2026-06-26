import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';
import TrustBadges from '@/components/TrustBadges';
import TrustStrip from '@/components/TrustStrip';
import MeetJack from '@/components/MeetJack';

export const metadata: Metadata = {
  title: "Plaster Hole Repair Sydney — Fixed Price From $290 | Jack's Plastering Northern Beaches",
  description:
    'Holes in your walls? TV bracket damage? Doorknob dents? DIY patch gone wrong? Fixed-price plaster hole repair from $290. All repairs done in one visit, paint-ready finish. Backed by our 2-year written workmanship guarantee. Call Jack now.',
  alternates: { canonical: `${SITE.url}/services/plaster-hole-patch` },
  openGraph: {
    title: 'Plaster Hole Repair Sydney — Fixed Price From $290',
    description:
      'TV bracket holes? Doorknob dents? DIY patch gone wrong? Fixed price from $290 per hole. Bundle multiple rooms and save. Paint-ready finish, one visit.',
    url: `${SITE.url}/services/plaster-hole-patch`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'How much does plaster hole repair cost?', a: 'Single small holes (TV bracket, doorknob, picture-hook damage) start at $290 fixed price — patched, skimmed, sanded, paint-ready. Bundle multiple rooms and each additional hole drops to $180. Larger holes (200mm+) or holes through plasterboard sheeting are usually $390–$650. Every quote is fixed-price and written.' },
  { q: 'How long does a hole repair take?', a: 'Most single-room patches are done in 1–3 hours. If we’re bundling several rooms or multiple large holes, we plan a half-day or full-day visit. Paint-ready finish on the same visit in most cases.' },
  { q: 'Will the patch be invisible once painted?', a: 'Yes — that&apos;s the whole point. We skim, sand, and feather the patch so it disappears under your existing wall paint. Small patches blend perfectly. Bigger patches sometimes benefit from re-painting the whole wall to match age and sheen.' },
  { q: 'Can you fix my DIY patch that went wrong?', a: 'Yes — we fix bad DIY patches all the time. We&apos;ll skim back the high spots, re-feather the edges, and finish it properly. Cheaper than you think, and you stop staring at the lumpy bit every morning.' },
  { q: 'I have a rental — can you invoice for the bond / depreciation?', a: 'Yes — every job comes with a GST invoice you can pass to your property manager or claim against the bond. Just ask at the quote stage if you need it in a specific format.' },
  { q: 'What if the repair fails or cracks later?', a: 'Our 2-year written workmanship guarantee covers any cracking or finish failure caused by our work. Jack comes back and fixes it free.' },
  { q: 'Do I need to be home?', a: 'For single-hole patches we can often work with the keys left at reception (managed apartments) or with you briefly on site to point out the work. For multi-room jobs we like you to be there at the quote stage at least.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes — Jack is a NSW Fair Trading licensed plasterer. Licence number is provided in writing with every quote, verifiable at service.nsw.gov.au.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE.url}/services/plaster-hole-patch#service`,
  name: 'Plaster Hole Repair Sydney', serviceType: 'Plaster Hole Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({ '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' } })),
  description: 'Fixed-price plaster and gyprock hole repair across Sydney. TV bracket damage, doorknob dents, DIY patches gone wrong, multi-hole bundle pricing. From $290 fixed price. Backed by our 2-year written workmanship guarantee.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'AUD', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', minPrice: 290, maxPrice: 1500 }, url: `${SITE.url}/services/plaster-hole-patch` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plaster Hole Repair Sydney', item: `${SITE.url}/services/plaster-hole-patch` },
  ],
};

export default function Page() {
  return (
    <>
      <a href={`tel:${phoneTel}`} className="md:hidden fixed bottom-0 left-0 right-0 z-50 v2-cta-gradient text-navy-900 font-extrabold text-center py-4 shadow-2xl">
        📞 Call Jack now — {phoneDisplay}
      </a>

      <TrustBar />

      <header className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight"><span className="font-extrabold text-navy-900 text-lg">{SITE.name}</span><span className="font-extrabold text-brand-600 text-lg">{SITE.tagline}</span></Link>
          <a href={`tel:${phoneTel}`} className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors">📞 {phoneDisplay}</a>
        </div>
      </header>

      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        <Image src="/jack.webp" alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney" fill priority sizes="100vw" className="hidden md:block object-cover object-right opacity-95 z-0" />
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              TV Bracket Holes? Doorknob Dents? DIY Patch Gone Wrong?
              <span className="block mt-3 text-brand-400">Like the holes were never there.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">From $290 fixed price</strong> — patched, skimmed, paint-ready.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Bundle multiple rooms</strong> — every additional hole only $180.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">All repairs done in one visit</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call Jack now</strong> — first-ring answer, or 15-min callback.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="plaster-hole-patch" problem="Plaster Hole Repair" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <TrustStrip items={['From $290 fixed price', 'Bundle pricing — save', 'Paint-ready finish', '2-year written guarantee']} />

      <MeetJack />

      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. Fixed price. Paint-ready by the time we leave.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Tell us how many holes and which rooms. Jack rings you back within 24 hours with a rough estimate so you can budget straight away.' },
              { n: '2', title: 'Fixed-price quote at your door within 24 hours', body: 'Jack arrives, counts the holes, and writes a fixed-price quote on the spot. Bundle pricing applied — extra rooms at the discount rate.' },
              { n: '3', title: 'Patched, skimmed, paint-ready — one visit', body: 'Most jobs done in a few hours. Walls left clean, paint-ready, dust controlled. GST invoice in your inbox before we&apos;ve left the street.' },
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
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent plaster hole repairs</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent hole-patch jobs across Sydney.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'End-of-lease — 8 holes across 3 rooms', time: 'One visit, paint-ready, $1,560 bundle' },
              { suburb: 'Brookvale', job: 'TV bracket + doorknob in kids&apos; bedroom', time: '90 minutes, $390' },
              { suburb: 'Dee Why', job: 'DIY patch re-do, hallway wall', time: 'Half-day, $480' },
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

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Picture your walls, one week from now.</h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The TV bracket hole — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The doorknob dent — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The lumpy DIY patch you stare at every morning — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">Just clean walls. Like the holes were never there.</p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">From $290. Paint-ready. One visit. 2-year written guarantee.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">What Sydney homeowners say</h2>
          <p className="text-navy-600 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Eight holes across the rental before inspection. Jack quoted $1,560 fixed, came back the next day, and was gone in three hours. Bond inspection passed clean.', name: 'Sarah M.', suburb: 'Manly' },
              { stars: 5, quote: 'I&apos;d butchered a DIY patch with Polyfilla. Jack skimmed back the mess and made it disappear. Painter couldn&apos;t find the spot afterwards.', name: 'David K.', suburb: 'Dee Why' },
              { stars: 5, quote: 'Two holes from the kids, week before the open home. Quoted Tuesday, fixed Wednesday, sold Saturday.', name: 'Priya R.', suburb: 'Brookvale' },
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

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">2yr</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Like the holes were never there — for 2 full years.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">
            Every patch we do is backed in writing for 2 full years. If the work cracks, lifts or fails — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Jack's Plastering Northern Beaches.
          </p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">One short call. Holes patched. Walls paint-ready. Same week.</h2>
          <p className="text-navy-200 mb-6">From $290 fixed price. Bundle multiple rooms and save.</p>
          <div className="flex justify-center">
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30">
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Plaster hole repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions we get most often before quoting a hole-patch job.</p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <article key={i} itemScope itemType="https://schema.org/Question" className="bg-navy-50 rounded-xl border border-navy-100 p-5 md:p-6">
                <h3 itemProp="name" className="font-bold text-navy-900 text-base md:text-lg mb-3">{f.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-navy-700 leading-relaxed">{f.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready for walls that look like the holes were never there?</h2>
            <p className="text-navy-100 text-lg mb-6">Two ways to reach Jack. Pick whichever&apos;s easiest. From $290 fixed price.</p>
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
              <li>✓ From $290 fixed price — no hourly rates</li>
              <li>✓ Bundle multiple rooms and save</li>
              <li>✓ 2-year written guarantee</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="plaster-hole-patch-bottom" problem="Plaster Hole Repair" /></div>
        </div>
      </section>

      <footer className="bg-navy-900 text-navy-300 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">NSW Fair Trading licensed plasterer · Serving Sydney and the Northern Beaches</p>
          <address className="mb-3 not-italic text-sm text-navy-300"><a href="https://www.google.com/maps/search/?api=1&query=14%2F39-41+Pacific+Parade+Dee+Why+NSW+2099" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 hover:underline">14/39-41 Pacific Parade, Dee Why NSW 2099</a></address>
          <p className="mb-4"><a href={`tel:${phoneTel}`} className="text-brand-400 font-semibold hover:underline">{phoneDisplay}</a></p>
          <p className="text-navy-500 text-xs">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved. <Link href="/" className="hover:underline">Home</Link></p>
        </div>
      </footer>

      <div className="h-16 md:hidden" aria-hidden="true" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    </>
  );
}
