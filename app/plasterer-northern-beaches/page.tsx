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
  title: "Plasterer Northern Beaches — 24hr Quote | Jack's Plastering",
  description:
    'Northern Beaches plasterer at your door within 24 hours with a fixed-price quote. Most jobs one visit. 2-year written guarantee. Call Jack now.',
  alternates: { canonical: `${SITE.url}/plasterer-northern-beaches` },
  openGraph: {
    title: "Plasterer Northern Beaches — 24hr Quote | Jack's Plastering",
    description:
      'Northern Beaches plasterer at your door within 24 hours with a fixed-price quote. Most jobs one visit. 2-year written guarantee. Call Jack now.',
    url: `${SITE.url}/plasterer-northern-beaches`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const services = [
  { href: '/services/ceiling-repair-sydney', title: 'Ceiling repair', desc: 'Cracks, sagging, water stains — quoted in 24 hours, mostly one visit.' },
  { href: '/services/water-damage-ceiling-repair', title: 'Water damage ceiling repair', desc: 'Brown stains, sagging plaster, insurance liaison included.' },
  { href: '/services/plaster-hole-patch', title: 'Plaster hole patch', desc: 'From $290 fixed. TV bracket damage, doorknob dents, DIY rescues.' },
  { href: '/services/cornice-repair-sydney', title: 'Cornice repair', desc: 'Cracked or sagging cornices restored. Heritage profile matching available.' },
  { href: '/services/end-of-lease-plaster-repair', title: 'End-of-lease plaster repair', desc: 'From $290 fixed. GST invoice for the property manager. Paint-ready same day.' },
  { href: '/services/storm-damage-ceiling-repair', title: 'Storm damage ceiling repair', desc: '1-hour emergency response. Insurance handled. Same-week restoration.' },
];

const faqs = [
  { q: 'How quickly can a plasterer come?', a: 'For non-urgent jobs we&apos;re at your door with a fixed-price written quote within 24 hours of your call. For active emergencies — sagging ceilings, water actively coming through, collapse risk — we target 1-hour response on the Northern Beaches.' },
  { q: 'How much does a plasterer cost in Sydney?', a: 'Small patch work starts at $290 fixed price. Mid-tier jobs (water-damage ceiling repair, full cornice replacement, multi-room patches) are usually $600–$3,500. Larger reno / full-home work starts at $5,000. Every quote is fixed-price and written before we start. No hourly surprises.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes. Jack is a NSW Fair Trading licensed plasterer. His licence number is provided in writing with every quote, and you can verify it directly at service.nsw.gov.au.' },
  { q: 'Do you cover my suburb on the Northern Beaches?', a: 'We cover the full Northern Beaches — Manly, Dee Why, Brookvale, Collaroy, Narrabeen, Mona Vale, Newport, Avalon, Palm Beach, Cromer, Frenchs Forest, Belrose, Allambie Heights, Forestville, Beacon Hill, Bayview, Church Point, and everything in between. If you&apos;re on the Beaches, we&apos;re your plasterer.' },
  { q: 'What plastering work do you do?', a: 'Ceiling repairs, water-damage restoration, plaster hole patches, cornice repair and replacement (including heritage Federation profiles), gyprock installation, skim coating, full home plastering, end-of-lease wall repairs, and storm-damage emergency restoration. If it&apos;s internal plaster work, we do it.' },
  { q: 'Do you deal with my insurance company?', a: 'Yes — for water-damage and storm-damage repairs we provide quotes formatted for insurance assessors and coordinate directly with your insurer.' },
  { q: 'What if the work cracks or fails later?', a: 'Our 2-year written workmanship guarantee covers any cracking, sagging or finish failure caused by our work. If anything fails inside two years, Jack comes back and fixes it free. Backed by Jack\'s Plastering Northern Beaches — if Jack&apos;s unable to honour it, we send another plasterer at no cost to you.' },
  { q: 'Do I have to pay a deposit?', a: 'No deposit until materials arrive on site. We confirm your booking date in writing and turn up when we say.' },
  { q: 'What&apos;s the difference between a plasterer, a gyprocker and a renderer?', a: 'Render is exterior wall finish (cement-based). Gyprock is the brand of plasterboard sheet that goes on internal walls and ceilings. Plaster is the finish applied to gyprock or solid walls — skim, cornice, set. We do internal plaster work — cornice, ceilings, skim, water damage repair, hole patches, gyprock installation. Not exterior render.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  datePublished: SITE.datePublished,
  dateModified: SITE.dateModified,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  datePublished: SITE.datePublished,
  dateModified: SITE.dateModified,
  '@id': `${SITE.url}/plasterer-northern-beaches#service`,
  name: 'Plasterer Northern Beaches',
  serviceType: 'Plastering',
  image: [
    `${SITE.url}/jack.webp`,
    `${SITE.url}/gallery/luxury-bathroom-plastering-sydney.webp`,
  ],
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: [...SITE.primarySuburbs, ...SITE.secondarySuburbs].map((s) => ({
    '@type': 'City',
    name: s,
    containedInPlace: { '@type': 'State', name: 'New South Wales' },
  })),
  description:
    'Northern Beaches plasterer. Fixed-price quote at your door within 24 hours. Ceiling repair, water-damage restoration, hole patches, cornice repair, gyprock installation. Most jobs in one visit. Backed by our 2-year written workmanship guarantee.',
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'AUD',
    lowPrice: 290,
    highPrice: 15000,
    offerCount: 1,
    url: `${SITE.url}/plasterer-northern-beaches`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plasterer Northern Beaches', item: `${SITE.url}/plasterer-northern-beaches` },
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
          <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}><div className="w-10 h-10 md:w-11 md:h-11 rounded-lg overflow-hidden shrink-0 shadow-sm relative"><Image src="/logo.webp" alt={`${SITE.name} logo`} fill sizes="44px" priority className="object-cover" /></div><div className="flex flex-col leading-tight"><span className="font-extrabold text-navy-900 text-lg">{SITE.name}</span><span className="font-extrabold text-brand-600 text-lg">{SITE.tagline}</span></div></Link>
          <a href={`tel:${phoneTel}`} className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-colors">
            📞 {phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        <Image src="/jack.webp" alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney" fill priority sizes="100vw" className="hidden md:block object-cover object-right opacity-95 z-0" />
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Plasterer Northern Beaches
              <span className="block mt-3 text-brand-400">
                Fixed-price quote at your door within 24 hours.
              </span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Fixed-price written quote at your door within 24 hours.</strong></span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Most plastering jobs done in one visit</strong> — paint-ready.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">NSW Fair Trading licensed</strong> — licence number in your written quote.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call now</strong> — answered on first ring, or <strong className="text-white">15-minute callback</strong>.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="plasterer-northern-beaches" problem="Plastering" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <TrustStrip items={['Fixed-price quote in 24 hours', 'Most jobs in one visit', '2-year written guarantee', 'NSW Fair Trading licensed']} />

      <MeetJack />

      {/* What we do — internal-link hub to 6 service pages */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            What Jack does on the Northern Beaches
          </h2>
          <p className="text-navy-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Internal plaster work — ceilings, walls, cornice, repair, restoration. Pick the problem closest to yours.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block bg-navy-50 hover:bg-navy-100 border border-navy-100 hover:border-brand-500 rounded-2xl p-6 transition-all group"
              >
                <h3 className="font-bold text-xl text-navy-900 mb-2 group-hover:text-brand-700">{s.title} →</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. No chasing. No mystery pricing.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Pick up the phone or send your name, mobile and suburb. Jack answers most calls on the first ring. If you miss him, you get a callback within 15 minutes during business hours.' },
              { n: '2', title: 'Fixed-price quote at your door — within 24 hours', body: 'Jack arrives at your home, looks at the job, and writes a fixed-price quote on the spot. No "we&apos;ll get back to you." No surprise extras.' },
              { n: '3', title: 'Done in one visit. Paint-ready. Guaranteed for 2 years.', body: 'Most plastering jobs finished in a single visit. Walls left clean, paint-ready, dust controlled. Backed by our 2-year written workmanship guarantee.' },
            ].map((s) => (
              <div key={s.n} className="bg-navy-50 rounded-2xl p-7 shadow-md">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-navy-900 font-extrabold text-xl flex items-center justify-center mb-4">{s.n}</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase gallery — premium work that hits on the head-term page */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            See Jack&apos;s Recent Plastering Work
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            A few finished jobs across the Northern Beaches and Sydney-wide. Same plasterer, same 2-year guarantee, every time.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'Decorative dome ceiling + cornice feature', time: 'Heritage profile match · paint-ready', image: 'decorative-dome-ceiling-detail-sydney.webp', alt: 'Close-up of a decorative dome cornice feature by Jack\'s Plastering Northern Beaches — Manly heritage home' },
              { suburb: 'Mosman', job: 'Luxury bathroom with agate feature wall', time: 'Integrated LED ceiling · premium finish', image: 'luxury-bathroom-plastering-sydney.webp', alt: 'Luxury bathroom plastering with agate feature wall and integrated LED ceiling lighting, Mosman' },
              { suburb: 'Avalon', job: 'Full luxury bathroom plaster + marble feature', time: 'Integrated LED strip ceiling · paint-ready', image: 'luxury-bathroom-marble-plastering-sydney.webp', alt: 'Luxury bathroom plastering with marble feature wall and integrated LED strip lighting, Avalon' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image src={`/gallery/${j.image}`} alt={j.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      {/* Suburb coverage */}
      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Plastering everywhere on the Northern Beaches
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            From Manly to Palm Beach. If you&apos;re on the Beaches, we&apos;re your plasterer.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-navy-800 text-sm md:text-base">
            {[...SITE.primarySuburbs, ...SITE.secondarySuburbs].map((s) => (
              <div key={s} className="flex items-center gap-2 bg-white border border-navy-100 rounded-lg px-3 py-2.5">
                <span className="text-brand-500 font-bold">✓</span>
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
          <p className="text-navy-600 text-center text-sm mt-6">
            Suburb not listed? Call us — we likely cover it.
          </p>
        </div>
      </section>

      {/* After-state */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            Picture your home, two weeks from now.
          </h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The plaster job — <span className="text-brand-400 font-semibold">finished</span>.</p>
            <p>The tradie chase — <span className="text-brand-400 font-semibold">over</span>.</p>
            <p>The thing you&apos;ve been putting off — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">
              Your walls and ceilings looking right again. One less thing on your list.
            </p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">
            One call. Fixed-price. One visit. 2-year written guarantee.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-900 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3 text-center">What Northern Beaches homeowners say</h2>
          <p className="text-navy-300 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Three plasterers I&apos;d called before Jack never even rang back. Jack picked up first ring, was at the door the next morning, fixed-price quote, done in one visit. Pure gold.', name: 'Sarah M.', image: '/avatars/customer-sarah-m.webp', suburb: 'Manly' },
              { stars: 5, quote: 'Heritage cornice in our Federation home. Jack matched the profile perfectly. The painter literally couldn&apos;t find which section we&apos;d replaced.', name: 'David K.', image: '/avatars/customer-david-k.webp', suburb: 'Balgowlah' },
              { stars: 5, quote: 'Insurance job after a storm leak. Jack dealt with the assessor directly. We didn&apos;t chase anything. Easiest plaster experience we&apos;ve ever had.', name: 'Rachel B.', image: '/avatars/customer-rachel-b.webp', suburb: 'Mona Vale' },
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

      {/* Guarantee */}
      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-500 text-navy-900 font-extrabold text-2xl mb-6 shadow-lg">2yr</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Every job backed in writing — for 2 full years.
          </h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">
            Every plastering job we do is backed in writing for 2 full years. If the work cracks, sags or fails because of our craftsmanship — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Jack's Plastering Northern Beaches — if Jack&apos;s unable to honour it, we arrange another plasterer at no cost to you.
          </p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            One short call. One fixed-price quote. Done by next week.
          </h2>
          <p className="text-navy-200 mb-6">
            Answered on first ring, or 15-minute callback. Fixed-price quote at your door within 24 hours.
          </p>
          <div className="flex justify-center">
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30">
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Northern Beaches plastering — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions Northern Beaches homeowners ask most often before booking.</p>
          <p className="text-navy-500 text-sm mt-2 text-center md:text-left">
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

      {/* Final CTA */}
      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Ready to stop chasing tradies?
            </h2>
            <p className="text-navy-100 text-lg mb-6">
              Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price quote at your door within 24 hours.
            </p>
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
              <li>✓ Most jobs done in one visit</li>
              <li>✓ 2-year written guarantee — brand-backed</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
              <li>✓ No deposit until materials arrive on site</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="plasterer-northern-beaches-bottom" problem="Plastering" /></div>
        </div>
      </section>

      <footer className="bg-navy-900 text-navy-300 px-4 py-10">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="font-bold text-white mb-2">{SITE.name}</div>
          <p className="mb-3">NSW Fair Trading licensed plasterer · Serving Northern Beaches and Sydney</p>
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
