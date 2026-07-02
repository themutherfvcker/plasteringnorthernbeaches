import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';
import TrustBadges from '@/components/TrustBadges';
import TrustStrip from '@/components/TrustStrip';
import MeetJack from '@/components/MeetJack';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StickyCallCTA from '@/components/StickyCallCTA';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: "Plaster Crack Repair Sydney — 24hr Quote | Jack's Plastering",
  description:
    "Cracks in your walls or ceiling? Fixed-price plaster crack repair from $290. Cut-back, re-tape, skim, paint-ready. 2-yr guarantee. Call Jack.",
  alternates: { canonical: `${SITE.url}/services/plaster-crack-repair-sydney` },
  openGraph: {
    title: "Plaster Crack Repair Sydney — 24hr Quote | Jack's Plastering",
    description:
      "Cracks in your walls or ceiling? Fixed-price plaster crack repair from $290. Cut-back, re-tape, skim, paint-ready. 2-yr guarantee. Call Jack.",
    url: `${SITE.url}/services/plaster-crack-repair-sydney`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'How much does plaster crack repair cost in Sydney?', a: 'Most plaster crack repairs in Sydney cost $290 to $800 depending on crack length, location, and finish standard. A single hairline crack under a metre in an accessible room sits at the lower end. Multiple settlement cracks, cornice-junction cracks, or ceiling-crack repairs at height sit at the upper end. Every quote is fixed-price and written — no hourly rates.' },
  { q: 'Are plaster cracks in walls dangerous?', a: 'Most Sydney plaster cracks are cosmetic — house settlement, wet/dry seasonal movement, or minor impact. Hairline cracks under 1mm are almost always cosmetic. Cracks wider than 2mm, cracks that grow month-on-month, cracks running diagonally across load-bearing walls, or cracks accompanied by sagging or doors that suddenly stick — those need a plasterer to inspect, and possibly a structural engineer if we spot underlying movement.' },
  { q: 'Why do plaster walls crack?', a: 'Sydney plaster walls crack for five main reasons. (1) House settlement — soil expansion and contraction between wet and dry seasons, especially on the Northern Beaches sandstone-and-clay sites. (2) Age — plaster over 30 years old loses flexibility and cracks under normal thermal movement. (3) Impact — TV brackets, furniture knocks, DIY drilling. (4) Cornice failure — old cornices detach from the wall-ceiling junction and pull adjacent plaster with them. (5) Vibration — bus routes, nearby construction, upstairs renovation. Correct diagnosis matters for correct repair.' },
  { q: 'How do you repair a crack in a plaster ceiling?', a: 'The right method depends on crack width. Under 1mm: sand back, apply flexible filler, feather with joint compound, skim, sand, paint-ready. 1-3mm: cut back to sound plaster, re-tape with fibreglass mesh, apply topping compound over the tape, feather 300mm each side, sand, skim, paint-ready. Over 3mm or sagging: cut out the damaged section entirely, replace with new plasterboard, re-tape at joins, skim, paint-ready. All three methods carry the 2-year written guarantee.' },
  { q: 'Will the crack come back after you fix it?', a: "Not if we diagnose and repair correctly. Cracks re-emerge when the underlying cause is ignored — the classic mistake is skim-filling a settlement crack without cutting back, re-taping, and using a flexible compound. We inspect first, identify the cause (settlement / age / impact / cornice failure), and repair to the standard the cause requires. Cosmetic-only repairs on structural cracks are why some homeowners see the same crack return within a year. We won't do that. If our repair fails inside 2 years, Jack comes back and fixes it free." },
  { q: 'Can you fix cracks around cornices?', a: 'Yes — the cornice-junction crack (a horizontal crack running along where the cornice meets the wall or ceiling) is one of the most common Sydney plaster problems. Cause is usually cornice detachment from long-term thermal movement. Fix depends on cornice condition: if the cornice is sound we re-bond and skim; if the cornice is failing we replace the affected section and skim. Both approaches restore the profile invisibly.' },
  { q: 'How long does plaster crack repair take?', a: 'Most single-room crack repairs are done in one visit — usually 2 to 4 hours including drying time between compound coats. Multi-room bundle jobs run half a day to a full day. If a crack needs a section cut-out and replaced (over 3mm or with sagging), we sometimes need a second visit 24-48 hours later for the final skim once the first coat cures properly.' },
  { q: 'Do I need to repaint the whole wall after a crack repair?', a: 'For small cracks (under a metre), we blend the patch under your existing paint so well that touch-up painting the immediate area matches perfectly — you rarely need to repaint the whole wall. For longer repairs (2m+) or repairs across multiple walls, we recommend repainting the whole affected wall so the age and sheen match. We\'ll tell you honestly which approach makes sense for your job at the quote stage.' },
  { q: 'Are hairline cracks worth fixing?', a: 'Yes — but they can wait if you have other priorities. Hairline cracks under 1mm are cosmetic and grow slowly. The reason to fix them: they tend to widen over 3-5 years, they collect grime and become more visible, and they\'re trivial to repair while small ($290 range) vs. much more expensive once they widen. If you\'re selling the house or repainting soon, bundle them into that work.' },
  { q: 'What if the crack is in an old federation plaster wall?', a: "Federation, Victorian and Edwardian plaster walls (pre-1930 Sydney builds) need a different approach than modern gyprock. The original lime-and-horsehair plaster is more fragile and requires specialist handling — modern joint compound sometimes chemically rejects the old plaster surface. We use a bonding primer (Wattyl Plaster Bond or USG Tuff-Hide) between the old plaster and any modern repair layer. This preserves heritage character AND makes the repair invisible." },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', datePublished: SITE.datePublished, dateModified: SITE.dateModified, mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE.url}/services/plaster-crack-repair-sydney#service`,
  datePublished: SITE.datePublished,
  dateModified: SITE.dateModified,
  name: 'Plaster Crack Repair Sydney', serviceType: 'Plaster Crack Repair',
  image: [
    `${SITE.url}/jack.webp`,
    `${SITE.url}/gallery/ceiling-repair-in-progress-northern-beaches.webp`,
  ],
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({ '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' } })),
  description: 'Fixed-price plaster crack repair across Sydney. Wall cracks, ceiling cracks, settlement cracks, cornice-junction cracks, Federation and heritage plaster. Diagnosed and repaired for lasting fix. Backed by our 2-year written workmanship guarantee.',
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'AUD',
    lowPrice: 290,
    highPrice: 1800,
    offerCount: 1,
    url: `${SITE.url}/services/plaster-crack-repair-sydney`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plaster Crack Repair Sydney', item: `${SITE.url}/services/plaster-crack-repair-sydney` },
  ],
};

export default function Page() {
  return (
    <>
      <TrustBar />
      <SiteHeader />

      {/* HERO */}
      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        <Image src="/jack.webp" alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney" fill priority sizes="100vw" className="hidden md:block object-cover object-right opacity-95 z-0" />
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Plaster Crack Repair, Sydney
              <span className="block mt-3 text-brand-400">
                Wall cracks, ceiling cracks, cornice-junction cracks — diagnosed and fixed for good.
              </span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Fixed-price quote within 24 hours</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Most crack repairs done in one visit</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Cause diagnosed first</strong> — settlement, age, impact, cornice — so the crack stays fixed.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call Jack now</strong> — first-ring answer, or 15-min callback.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-colors">📞 Call Jack — {phoneDisplay}</a>
              <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl transition-colors">Get a 24hr quote →</a>
            </div>
          </div>
          <div className="hidden md:block">
            <LeanQuoteForm source="plaster-crack-repair-sydney-hero" problem="Plaster Crack Repair" />
          </div>
        </div>
      </section>

      <TrustStrip items={[
        'Fixed-price quote in 24 hours',
        'Most crack repairs done in one visit',
        'Cause diagnosed before we repair',
        '2-year written workmanship guarantee',
      ]} />
      <MeetJack />

      {/* HOW IT WORKS */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How Jack fixes a plaster crack — properly</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The most common Sydney crack-repair mistake: skim over without diagnosing the cause. We do it the right way.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Send a photo of the crack if you can. Jack calls back within 24 hours to arrange the on-site visit.' },
              { n: '2', title: 'On-site diagnosis + fixed-price quote', body: 'Jack identifies the cause (settlement / age / impact / cornice failure) and quotes the correct repair method in writing before leaving.' },
              { n: '3', title: 'Repair on the booked date', body: 'Cut-back, re-tape, skim, sand, paint-ready. Most jobs done in one visit. Larger cut-outs may need a return visit for the final skim.' },
              { n: '4', title: 'Guarantee documentation', body: '2-year written workmanship guarantee handed over with the invoice. If the crack returns inside 2 years, Jack comes back and fixes it free.' },
            ].map((s) => (
              <div key={s.n} className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <div className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center font-black text-lg mb-4 shadow-sm">{s.n}</div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{s.title}</h3>
                <p className="text-navy-700 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-navy-50 px-4 py-16 md:py-20 border-y border-navy-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent plaster crack repairs</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent Sydney crack-repair jobs — wall, ceiling and cornice-junction.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'Settlement crack, wall + cornice junction', time: 'One visit, $580', image: 'ceiling-repair-in-progress-northern-beaches.webp', alt: 'Cornice-junction plaster crack repair on a Manly wall by Jack\'s Plastering Northern Beaches' },
              { suburb: 'Mosman', job: 'Multiple ceiling cracks, master bedroom', time: 'Half day, $780', image: 'kitchen-ceiling-plastering-northern-beaches.webp', alt: 'Ceiling crack repair in a Mosman master bedroom by Jack\'s Plastering' },
              { suburb: 'Dee Why', job: 'Federation-era wall crack, heritage bond primer', time: 'One visit, $620', image: 'large-room-ceiling-plastering-northern-beaches.webp', alt: 'Federation-era wall crack repair with heritage bonding primer by Jack\'s Plastering' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy-100">
                <div className="aspect-[4/3] relative"><Image src={`/gallery/${j.image}`} alt={j.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <figcaption className="p-5"><div className="font-bold text-navy-900 mb-1">{j.suburb}</div><div className="text-navy-700 text-sm mb-2">{j.job}</div><div className="text-navy-500 text-xs font-semibold">{j.time}</div></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER STATE */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Picture your walls — smooth, whole, done for good.</h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The crack — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The cause — <span className="text-brand-400 font-semibold">diagnosed</span>.</p>
            <p>The lingering worry that it will come back next winter — <span className="text-brand-400 font-semibold">handled</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">Your walls, restored. Your ceiling, whole. Your peace of mind, back.</p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">Fixed price. One visit for most jobs. 2-year written guarantee — backed by the brand.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-900 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3 text-center">What Sydney homeowners say</h2>
          <p className="text-navy-300 text-center text-lg mb-10">Real customers whose cracks Jack has actually fixed.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Had a diagonal crack running across the lounge wall for three years. Two plasterers had "fixed" it before — came back both times. Jack diagnosed it as settlement + cornice failure, did it properly, hasn\'t come back.', name: 'Sarah M.', image: '/avatars/customer-sarah-m.webp', suburb: 'Manly' },
              { stars: 5, quote: 'Multiple cracks in the master bedroom ceiling after our neighbour\'s renovation. Jack came round the next day, gave us a fixed-price quote, and had it looking like new by the end of the week.', name: 'David K.', image: '/avatars/customer-david-k.webp', suburb: 'Mosman' },
              { stars: 5, quote: 'Federation cottage in Dee Why with cracks Jack said needed heritage bonding primer. He knew exactly what he was talking about. Invisible finish, respectful of the old plaster.', name: 'Rachel B.', image: '/avatars/customer-rachel-b.webp', suburb: 'Dee Why' },
            ].map((t, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-5 shadow-md ring-2 ring-brand-500/30 relative">
                  <Image src={t.image} alt={`${t.name} — verified Jack's Plastering customer`} fill sizes="80px" className="object-cover" />
                </div>
                <div className="text-brand-400 text-lg mb-4">{'★'.repeat(t.stars)}</div>
                <p className="text-navy-100 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-brand-400 text-sm font-semibold">{t.suburb} · Verified customer</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">2yr</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Fixed for 2 years — in writing.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">Every plaster crack repair is backed in writing for 2 full years. If the crack returns, sags or fails — Jack comes back and fixes it free. No paperwork hassle. Backed by Jack&apos;s Plastering Northern Beaches.</p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      {/* MID-CTA */}
      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Ready to get your walls fixed properly?</h2>
          <p className="text-navy-200 mb-6">Fixed-price quote at your door within 24 hours.</p>
          <div className="flex justify-center"><a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30 animate-pulse-glow">📞 Call Jack — {phoneDisplay}</a></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Plaster crack repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-3">The most common questions homeowners ask before we quote a Sydney crack repair.</p>
          <p className="text-navy-500 text-sm mt-2 text-center md:text-left italic mb-10">
            <time dateTime={SITE.dateModified}>
              {`Last updated: ${new Date(SITE.dateModified).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}
            </time>
          </p>
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

      <RelatedServices currentSlug="plaster-crack-repair-sydney" />

      {/* FINAL CTA */}
      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready for walls that look like the crack was never there?</h2>
            <p className="text-navy-100 text-lg mb-6">Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price quote at your door within 24 hours.</p>
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
              <li>✓ Fixed-price quote in 24 hours</li>
              <li>✓ Cause diagnosed before we repair</li>
              <li>✓ Most jobs done in one visit</li>
              <li>✓ 2-year written guarantee</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="plaster-crack-repair-sydney-bottom" problem="Plaster Crack Repair" /></div>
        </div>
      </section>

      <SiteFooter />
      <StickyCallCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
