import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';
import MeetJack from '@/components/MeetJack';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StickyCallCTA from '@/components/StickyCallCTA';
import RelatedServices from '@/components/RelatedServices';

const slug = 'gyprock-plasterboard-northern-beaches';
const pageUrl = `${SITE.url}/services/${slug}`;
const dateModified = '2026-10-13';

export const metadata: Metadata = {
  title: "Gyprocker Northern Beaches | Gyprock Repair & Installation",
  description:
    "Gyprocker Northern Beaches: gyprock repair, replace or install plasterboard walls and ceilings. NSW Fair Trading licensed, 2-year written guarantee. Fixed-price quote in 24 hours.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Gyprocker Northern Beaches | Gyprock Repair & Installation",
    description:
      "Gyprocker Northern Beaches: gyprock repair, replace or install plasterboard walls and ceilings. NSW licensed, 2-year written guarantee. Fixed-price quote in 24 hours.",
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gyprocker Northern Beaches | Gyprock Repair & Installation",
    description:
      "Gyprocker Northern Beaches: gyprock repair, replace or install. NSW licensed, 2-year guarantee. Fixed-price quote in 24 hours.",
  },
};

const services = [
  { icon: '🩹', title: 'Gyprock repairs',               blurb: 'Holes, cracked joints, failed patches and damaged sections repaired without replacing more sheet than needed.',                                        href: '/services/gyprock-plasterboard-northern-beaches#services' },
  { icon: '🧱', title: 'New plasterboard walls',        blurb: 'Install and set new plasterboard for renovations, room changes, extensions and new internal walls, finished paint-ready.',                              href: '/services/gyprock-plasterboard-northern-beaches#services' },
  { icon: '🏠', title: 'Ceiling plasterboard',          blurb: 'New ceiling install, sagging-sheet replacement and ceiling repair across the Northern Beaches and North Shore.',                                          href: '/services/ceiling-repair-sydney' },
  { icon: '🚿', title: 'Wet-area moisture-resistant',   blurb: 'Install the right green or blue water-resistant plasterboard for bathrooms, laundries and ensuites — the sheet that belongs behind tiles.',               href: '/services/gyprock-plasterboard-northern-beaches#services' },
  { icon: '🔥', title: 'Fire-rated & soundproof',       blurb: 'Fire-rated and soundproof plasterboard upgrades for shared walls, boundary walls, media rooms and home offices — double-sheet and acoustic systems.',     href: '/services/gyprock-plasterboard-northern-beaches#services' },
  { icon: '✨', title: 'Cornice & Level 5 finish',       blurb: 'Re-run cornice after sheet replacement and apply the full Level 5 flush finish for walls under low-angle lighting or gloss paint.',                       href: '/services/cornice-repair-sydney', popular: true },
];

const whyUs = [
  { icon: '🛡️', title: '2-year written guarantee',  body: "We stand behind every gyprock and plasterboard job. If a joint cracks, a sheet lifts or a finish fails, we come back and fix it. No argument." },
  { icon: '✅', title: 'Fully licensed & insured',   body: 'NSW Fair Trading licensed contractor with full public liability insurance. Licence number on every written quote.' },
  { icon: '🧹', title: 'Dust-free & clean',          body: "Drop sheets, plastic masking, HEPA-filter dust extractors on every sand. You will not find plaster dust across the house when we leave." },
  { icon: '⏰', title: 'On time, every time',        body: 'We show up when we said we would. Daily text updates once the job starts so you know where it stands.' },
];

const process = [
  { n: 1, title: 'Request your free quote',  body: "Call Jack or send the short form. We confirm the suburb, the job and arrange the on-site assessment." },
  { n: 2, title: 'We assess & quote',         body: 'We inspect the gyprock condition, framing, moisture and finish you need, then email a fixed-price written quote within 24 hours.' },
  { n: 3, title: 'Repair, install & finish',  body: 'Repair or install the plasterboard, tape and set the joints, sand and leave the surface ready for the painter.' },
];

const testimonials = [
  { stars: 5, quote: "We had three rooms that needed complete replastering after a renovation. The team was punctual, incredibly tidy, and the finish is absolutely flawless. Can't recommend them enough!", name: 'Mark T.', image: '/avatars/customer-mark-t.webp', suburb: 'Manly Vale' },
  { stars: 5, quote: 'Had a massive water damage issue in the kitchen ceiling. They came out fast, quoted the next morning, and had it fixed within 48 hours. Amazing service and quality.', name: 'Mei L.', image: '/avatars/customer-mei-l.webp', suburb: 'Dee Why' },
  { stars: 5, quote: 'Best plasterers on the Beaches, hands down. They did our entire new build — walls, ceilings, cornices — and every single surface is perfect. The 2-year guarantee gave us total confidence.', name: 'James W.', image: '/avatars/customer-james-w.webp', suburb: 'Freshwater' },
];

// FAQ — gyprock-focused. Informational first (PAA-mined, written for LLM
// extraction with specific product names + numbers + direct opening sentences),
// then transactional for visitors close to converting. Flat DOM + Schema.org
// Question/Answer microdata so Google and LLMs read every answer at page load.
const faqs = [
  {
    q: 'Is Gyprock the same as plasterboard?',
    a: "Yes — Gyprock is a widely used Australian brand of plasterboard, made by CSR. Homeowners and tradies use the two words interchangeably. We repair, replace and install internal plasterboard wall and ceiling systems, whether the existing sheet is Gyprock, Boral, USG Boral or an older unbranded board.",
  },
  {
    q: 'Can damaged Gyprock be repaired, or does it need replacing?',
    a: "Most clean holes, cracked joints and local damage can be repaired without replacing the whole sheet. Soft water-damaged plasterboard, badly sagging sheets, extensive cracking and sheets no longer secured to the framing usually need a partial or full replacement. We assess the board condition, the moisture reading and the framing before recommending repair vs replace, so you only pay for the work the job actually needs.",
  },
  {
    q: 'Do you install Gyprock for renovations and new rooms?',
    a: "Yes. We install and set plasterboard for room alterations, new internal walls, ceiling upgrades, extensions and full renovations across the Northern Beaches and North Shore. Each job includes measuring and ordering the sheet, screw-fixing to timber or metal framing, tape and set the joints, and sand to a paint-ready finish before the painter arrives.",
  },
  {
    q: 'Do you repair both Gyprock walls and ceilings?',
    a: "Yes. The right method depends on the location, the board condition, the framing and the cause of the damage. Ceiling repairs are often more involved than wall repairs because sagging sheets have to be re-secured and any upstream water source has to be fixed first. If a leak caused the damage, the leak needs to be stopped and the area dry before the plasterboard is closed and finished.",
  },
  {
    q: 'What thickness of plasterboard do you install?',
    a: "The two standard thicknesses are 10mm (standard walls) and 13mm (ceilings, fire-rated and acoustic applications). We install 10mm for most interior walls on 450mm or 600mm stud spacings, 13mm for ceilings on standard 450mm joist spacings, and 16mm or multi-layer builds where the job calls for extra fire or acoustic rating. The right thickness is set by the Australian Building Code and the stud/joist spacing — not by preference — so we confirm it on the site visit before quoting.",
  },
  {
    q: 'Can you install moisture-resistant plasterboard for bathrooms?',
    a: "Yes — bathrooms, laundries, ensuites and anywhere a sheet sits behind tiles get moisture-resistant plasterboard (CSR Gyprock Aquachek, Boral Wet Area or USG Boral Wet Area). It is the green or blue coloured sheet designed to resist moisture penetration behind tiles and in high-humidity rooms. We install the right wet-area sheet per the room, flashband the sheet-to-floor junction, and leave the surface ready for the waterproofer and tiler.",
  },
  {
    q: 'Do you install fire-rated plasterboard?',
    a: "Yes. Fire-rated plasterboard (CSR Gyprock Fyrchek, Boral Firestop or USG Boral Firestop) is required under the National Construction Code on shared walls between dwellings, boundary walls close to the lot line, walls between a garage and a habitable room, and some ceiling applications. It is identified by the pink paper facing and comes in 13mm and 16mm thicknesses. We install the sheet to the manufacturer's fire-rated system — screw spacing, joint treatment and penetrations all have to meet the certified detail or the rating is void.",
  },
  {
    q: 'Can you install soundproof plasterboard upgrades?',
    a: "Yes — acoustic plasterboard upgrades suit media rooms, home offices, bedrooms backing onto living rooms and shared walls between townhouses. The common approaches are double-layer standard plasterboard with staggered joints, a single layer of acoustic-rated sheet (CSR Gyprock Soundchek or Boral SoundStop), and resilient-mount channels that decouple the sheet from the framing. We advise which system fits the room and the budget on the site visit, and quote the Rw value the finished wall is designed to hit.",
  },
  {
    q: 'What is a Level 5 flush finish and when do I need it?',
    a: "Level 5 is the highest Australian Standard finish for plasterboard — the whole wall gets a skim coat of jointing compound so the paper, the joints and the fastener points all read the same under paint. You need Level 5 for walls that take gloss or semi-gloss paint, walls under low-angle or raking light (feature walls near a window, hallways with downlights washing the surface) and feature walls where any variation in sheen will be obvious. We quote Level 4 as standard and Level 5 where the lighting or finish calls for it.",
  },
  {
    q: 'Do you re-run cornice after a Gyprock replacement?',
    a: "Yes. When we replace a ceiling sheet or a damaged section near the wall-ceiling junction, the old cornice usually has to come off and a new run has to go up. We match the cornice profile to the room — modern cove, 55mm or 90mm cove, or a Federation / Art Deco profile on older homes — so the new run reads continuous with the rest of the house. Where we can save the existing cornice we save it, but a cornice that has lost its bond or crumbled at the edge is faster and more reliable to re-run than to patch.",
  },
  {
    q: 'How quickly can I get a Gyprock quote?',
    a: "Call Jack or send the short quote form with your suburb and job details. We provide a fixed-price written quote after an on-site assessment, with the quote visit arranged within 24 hours across the Northern Beaches and North Shore in the normal service area. Urgent jobs — ceiling with collapse risk, sagging plaster from an active leak — get prioritised and we aim for same-day or next-business-day attendance.",
  },
  {
    q: 'Which areas do you cover?',
    a: "We cover the Northern Beaches and the North Shore, including Manly, Freshwater, Dee Why, Brookvale, Narrabeen, Mona Vale, Avalon, Palm Beach and Frenchs Forest, plus Mosman, Neutral Bay, Chatswood, Gordon, Pymble, St Ives, Turramurra, Wahroonga, Hornsby and surrounding suburbs. Jobs further afield across Sydney are considered on request.",
  },
];

const heroAreasList = [
  // Northern Beaches
  'Manly', 'Dee Why', 'Freshwater', 'Curl Curl', 'Brookvale', 'Cromer',
  'Beacon Hill', 'Collaroy', 'Narrabeen', 'Mona Vale', 'Warriewood',
  'Newport', 'Bilgola', 'Avalon', 'Palm Beach', 'Bayview', 'Church Point',
  'Frenchs Forest', 'Belrose', 'Forestville', 'Queenscliff',
  'North Balgowlah', 'Seaforth',
  // Lower North Shore
  'Mosman', 'Neutral Bay', 'Cremorne', 'North Sydney', 'Lane Cove',
  'Chatswood', 'Crows Nest',
  // Upper North Shore
  'Roseville', 'Lindfield', 'Killara', 'Gordon', 'Pymble', 'Turramurra',
  'St Ives', 'Wahroonga', 'Hornsby',
  // Hills / Northern districts
  'Pennant Hills', 'Cherrybrook', 'Epping', 'Eastwood', 'Castle Hill',
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  datePublished: dateModified,
  dateModified,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  datePublished: dateModified,
  dateModified,
  name: 'Gyprock & Plasterboard — Northern Beaches and North Shore',
  serviceType: 'Gyprock and plasterboard repair, replacement and installation',
  image: [
    `${SITE.url}/gallery/gyprock-ceiling-installation-northern-beaches.webp`,
    `${SITE.url}/gallery/full-home-plastering-northern-beaches.webp`,
  ],
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: heroAreasList.map((suburb) => ({
    '@type': 'City',
    name: suburb,
    containedInPlace: { '@type': 'State', name: 'New South Wales' },
  })),
  description:
    'NSW Fair Trading licensed Gyprocker on the Northern Beaches. Gyprock repair, new plasterboard installation, ceiling sheet replacement, wet-area and fire-rated sheet work, soundproof upgrades, cornice re-run and Level 5 flush finish across the Northern Beaches and North Shore.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gyprock and plasterboard services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.blurb },
    })),
  },
  url: pageUrl,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plastering Services', item: SITE.url },
    { '@type': 'ListItem', position: 3, name: 'Gyprock & Plasterboard Northern Beaches', item: pageUrl },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ─── Trust bar (Vista-pattern, very top) ─── */}
      <TrustBar />

      <SiteHeader />

      {/* ─── Hero — H1 preserved per owner direction. Background image and
          shading mirror the homepage: Jack on the right, object-right
          opacity-95 with the navy-900/85 → transparent gradient. ─── */}
      <section className="v2-hero-gradient relative overflow-hidden">
        <Image
          src="/jack.webp"
          alt="Jack — NSW Fair Trading licensed plasterer and Gyprocker on the Northern Beaches"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-right opacity-95 z-0"
        />
        <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 z-[2]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-300 text-lg">★★★★★</span>
                <span className="text-white/80 text-sm font-medium">Local Gyprocker · Licensed · 15+ years on the tools</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                <span className="text-brand-400">Gyprocker Northern Beaches</span> &amp; North Shore
                <span className="block mt-3 text-brand-400 text-2xl md:text-3xl lg:text-4xl">
                  Repair, replace or install it properly.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Gyprocker Northern Beaches for plasterboard repairs, new walls and ceiling installation. From a damaged sheet to a full-home plasterboard fit-out, we handle the job with a{' '}
                <strong className="text-brand-300">2-year written guarantee</strong>.
              </p>

              <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
                {[
                  'Free fixed-price quotes',
                  'NSW Fair Trading licensed & insured',
                  '2-year written guarantee',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white text-base">
                    <span className="text-brand-400 font-extrabold text-lg leading-tight">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a href="#quote" className="v2-cta-gradient animate-pulse-glow text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-150 shadow-2xl shadow-brand-500/30 text-center">
                  Get Your Free Quote →
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-150 text-center flex items-center justify-center gap-2">
                  📞 {SITE.phone}
                </a>
              </div>

              <p className="text-navy-300 text-sm flex items-center justify-center lg:justify-start gap-2">
                🛡️ No obligation. No spam. Just an honest Gyprock quote.
              </p>
            </div>

            {/* Hero quote form. source=gyprock-plasterboard-northern-beaches tags
                 the lead so LEADS-002 can attribute it to this page's hero CTA. */}
            <div className="relative">
              <LeanQuoteForm source="gyprock-plasterboard-northern-beaches" problem="Gyprock & Plasterboard" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── Trust Stats Bar ─── */}
      <section className="bg-white py-8 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="v2-number-highlight text-4xl md:text-5xl font-black">15+</div>
              <div className="text-navy-600 font-medium text-sm mt-1">Years on gyprock</div>
            </div>
            <div>
              <div className="v2-number-highlight text-4xl md:text-5xl font-black">Local</div>
              <div className="text-navy-600 font-medium text-sm mt-1">Northern Beaches based</div>
            </div>
            <div>
              <div className="v2-number-highlight text-4xl md:text-5xl font-black">Licensed</div>
              <div className="text-navy-600 font-medium text-sm mt-1">NSW Fair Trading</div>
            </div>
            <div>
              <div className="v2-number-highlight text-4xl md:text-5xl font-black">2yr</div>
              <div className="text-navy-600 font-medium text-sm mt-1">Written guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Meet Jack (same component as homepage) ─── */}
      <MeetJack />

      {/* ─── Gyprock services grid ─── */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Gyprock & plasterboard</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              Gyprock Repairs &amp; Installation,<br/><span className="text-brand-600">Northern Beaches</span>
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Repair, replace or install — from a single damaged sheet to a whole-house gyprock fit-out. The right board, the right system, the right finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="bg-white border-2 border-navy-100 rounded-2xl p-6 md:p-8 hover:border-brand-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden block">
                {s.popular && (
                  <div className="absolute top-4 right-4 bg-brand-500 text-navy-900 font-bold text-xs px-3 py-1 rounded-full">POPULAR</div>
                )}
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-5 text-2xl">{s.icon}</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 mb-4">{s.blurb}</p>
                <span className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors inline-flex items-center gap-1">
                  View {s.title.toLowerCase()} details →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/#services" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold text-base transition-colors border-b-2 border-brand-200 hover:border-brand-500 pb-1">
              See all plastering services on the Northern Beaches →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Recent gyprock work gallery ─── */}
      <section className="py-16 md:py-24 bg-white border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Recent Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              Gyprock Jobs Across the Northern Beaches
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Walls, ceilings and finishes — same Gyprocker, same 2-year written guarantee on every job.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: 'gyprock-ceiling-installation-northern-beaches.webp', alt: 'Gyprock plasterboard ceiling installation on the Northern Beaches', suburb: 'Northern Beaches', job: 'Gyprock ceiling install' },
              { image: 'ceiling-repair-in-progress-northern-beaches.webp', alt: 'Ceiling plasterboard replacement in progress — large oval cut-out ready for new sheet and skim', suburb: 'Dee Why', job: 'Ceiling sheet replacement' },
              { image: 'full-home-plastering-northern-beaches.webp', alt: 'Full-home plasterboard install — high-ceiling hallway finished paint-ready', suburb: 'Mona Vale', job: 'Full-home plasterboard' },
              { image: 'kitchen-ceiling-plastering-northern-beaches.webp', alt: 'Kitchen suspended plasterboard ceiling with recessed downlights, Northern Beaches home', suburb: 'Brookvale', job: 'Kitchen plasterboard ceiling' },
              { image: 'large-room-ceiling-plastering-northern-beaches.webp', alt: 'Large living-room plasterboard ceiling installation on the Northern Beaches', suburb: 'Collaroy', job: 'Large-room ceiling install' },
              { image: 'built-in-tv-fireplace-plastering-northern-beaches.webp', alt: 'New plasterboard walls built out around a TV cabinet and electric fireplace, Northern Beaches', suburb: 'Avalon', job: 'New wall build-out' },
            ].map((j, i) => (
              <figure key={i} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/gallery/${j.image}`}
                    alt={j.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="p-5">
                  <div className="font-bold text-navy-900 mb-1">{j.suburb}</div>
                  <div className="text-navy-700 text-sm">{j.job}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="reviews" className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-500/20 text-brand-300 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              What Northern Beaches<br/><span className="text-brand-400">Homeowners Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-6 md:p-8 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-5 shadow-md ring-2 ring-brand-500/30 relative">
                  <Image src={t.image} alt={`${t.name} — verified Jack's Plastering customer`} fill sizes="80px" className="object-cover" />
                </div>
                <div className="text-brand-400 text-lg mb-4">{'★'.repeat(t.stars)}</div>
                <p className="text-navy-100 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-brand-400 text-sm font-semibold">{t.suburb} · Verified customer</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section id="why-us" className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Why choose us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-6">
                Don&apos;t Risk Your Walls<br/><span className="text-brand-600">With Amateurs</span>
              </h2>
              <p className="text-navy-600 text-lg mb-8 leading-relaxed">
                A bad gyprock install cracks at the joints, sags at the ceiling and the paint shows every fastener. We set the sheet right the first time so you are not calling someone back in six months.
              </p>

              <div className="space-y-6">
                {whyUs.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg">{w.title}</h3>
                      <p className="text-navy-600">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5] min-h-[360px]">
                <Image
                  src="/gallery/gyprock-ceiling-installation-northern-beaches.webp"
                  alt="Jack installing Gyprock plasterboard ceiling on the Northern Beaches — NSW Fair Trading licensed Gyprocker at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 sm:-bottom-8 sm:left-8 sm:right-8 bg-white rounded-xl shadow-xl p-5 border border-navy-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500"></div>
                  </div>
                  <div>
                    <div className="text-amber-500 text-sm">★★★★★</div>
                    <div className="text-navy-600 text-sm font-medium">&ldquo;Absolutely brilliant work. Best tradies I&apos;ve ever hired.&rdquo;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Guarantee section ─── */}
      <section className="py-16 md:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    image: 'gyprock-ceiling-installation-northern-beaches.webp',
                    alt: 'Gyprock ceiling installation — paint-ready finish backed by 2-year written guarantee',
                    suburb: 'Northern Beaches',
                  },
                  {
                    image: 'full-home-plastering-northern-beaches.webp',
                    alt: 'Full-home plasterboard install, Mona Vale — backed by 2-year guarantee',
                    suburb: 'Mona Vale',
                  },
                  {
                    image: 'built-in-tv-fireplace-plastering-northern-beaches.webp',
                    alt: 'Custom built-in TV wall and electric fireplace with new plasterboard, Avalon — backed by 2-year guarantee',
                    suburb: 'Avalon',
                  },
                  {
                    image: 'kitchen-ceiling-plastering-northern-beaches.webp',
                    alt: 'Kitchen plasterboard ceiling with recessed downlights, Brookvale — backed by 2-year guarantee',
                    suburb: 'Brookvale',
                  },
                  {
                    image: 'ceiling-repair-in-progress-northern-beaches.webp',
                    alt: 'Ceiling plasterboard replacement in progress on the Northern Beaches — large cut-out ready for new sheet',
                    suburb: 'Dee Why',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-lg relative aspect-[4/5]">
                    <Image
                      src={`/gallery/${item.image}`}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-navy-900/85 backdrop-blur-sm text-white font-bold text-xs px-3 py-1.5 rounded-full">
                      {item.suburb}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-brand-200 text-brand-900 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Our guarantee</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-6">
                We Put Our Money<br/><span className="text-brand-600">Where Our Mouth Is</span>
              </h2>
              <p className="text-navy-600 text-lg mb-6 leading-relaxed">
                Every gyprock and plasterboard job comes with a{' '}
                <strong className="text-navy-900">2-year written workmanship guarantee</strong>. If a joint cracks, a sheet lifts or a finish fails, Jack returns and fixes it. Backed by {SITE.name} — if Jack cannot personally honour the callback we arrange another licensed plasterer at no cost to you.
              </p>
              <div className="bg-white rounded-2xl p-6 border-2 border-brand-200 shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                    📜
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">2-year written workmanship guarantee</h3>
                    <p className="text-navy-600 text-sm">
                      Not verbal. Not wishy-washy. A proper, signed, written guarantee on every gyprock quote.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#quote" className="v2-cta-gradient inline-flex items-center gap-2 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg shadow-brand-500/30">
                Claim Your Free Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Areas We Serve ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Areas we serve</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">
              Local Gyprocker Across the <span className="text-brand-600">Northern Beaches &amp; North Shore</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {heroAreasList.map((s) => (
              <span key={s} className="bg-navy-50 text-navy-800 font-medium px-4 py-2 rounded-lg border border-navy-100 hover:bg-brand-50 hover:border-brand-200 transition-colors">
                {s}
              </span>
            ))}
            <span className="bg-brand-100 text-brand-800 font-bold px-4 py-2 rounded-lg border border-brand-300">
              &amp; All Surrounding Suburbs
            </span>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">How it works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              3 Simple Steps to a<br/><span className="text-brand-600">Paint-Ready Finish</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-brand-200"></div>
            {process.map((step) => (
              <div key={step.n} className="text-center relative">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-brand-500/30">
                  <span className="text-navy-900 font-black text-2xl">{step.n}</span>
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{step.title}</h3>
                <p className="text-navy-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related services (sibling-page internal linking) ─── */}
      <RelatedServices currentSlug={slug} />

      {/* ─── Quote Form (main) ─── */}
      <section id="quote" className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
        <Image
          src="/jack.webp"
          alt=""
          fill
          sizes="100vw"
          className="hidden md:block object-cover object-left opacity-70 z-0"
          aria-hidden="true"
        />
        <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-navy-900/40 via-navy-900/70 to-navy-900/95" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 z-[2]">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-500/20 text-brand-300 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Free gyprock quote</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
                Get Your <span className="text-brand-400">Gyprock Quote</span>
              </h2>
              <p className="text-navy-200 text-lg mb-8 leading-relaxed">
                Tell Jack what the job is — gyprock repair, new plasterboard install, wet-area or fire-rated sheet, cornice re-run — and we send a fixed-price written quote within 24 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Free on-site assessment',
                  'Fixed-price quote — no hidden fees',
                  'NSW Fair Trading licensed contractor',
                  '2-year written workmanship guarantee',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/90">
                    <span className="text-brand-400 text-xl flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <LeanQuoteForm source="gyprock-plasterboard-northern-beaches-bottom" problem="Gyprock & Plasterboard" />
          </div>
        </div>
      </section>

      {/* ─── FAQ — flat layout (every answer in the DOM at page load) with
          Schema.org Question/Answer microdata so Google + LLMs can extract
          all answers without an accordion expansion. ─── */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">Gyprock & Plasterboard — Your Questions Answered</h2>
            <p className="text-navy-600 text-lg">Sheet type, thickness, wet-area and fire-rated rules, finish levels and timing — everything Northern Beaches homeowners ask before booking a Gyprocker.</p>
          </div>

          <p className="text-navy-500 text-sm mt-2 text-center md:text-left">
            <time dateTime={dateModified}>
              {`Last updated: ${new Date(dateModified).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}
            </time>
          </p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <article
                key={i}
                itemScope
                itemType="https://schema.org/Question"
                className="bg-navy-50 rounded-xl border border-navy-100 p-5 md:p-6"
              >
                <h3 itemProp="name" className="font-bold text-navy-900 text-base md:text-lg mb-3">{f.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-navy-700 leading-relaxed">{f.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 md:py-24 bg-brand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-300 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-6">
            Need Gyprock Repaired,<br/><span className="text-brand-600">Replaced or Installed?</span>
          </h2>
          <p className="text-navy-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell Jack what the job is and where it is. Fixed-price written quote in 24 hours, 2-year written guarantee on every finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#quote" className="v2-cta-gradient animate-pulse-glow text-navy-900 font-extrabold text-lg px-10 py-5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-150 shadow-2xl shadow-brand-500/30">
              Get Your Free Quote Now →
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="bg-navy-900 text-white font-bold text-lg px-10 py-5 rounded-xl hover:bg-navy-800 transition-all duration-150 flex items-center justify-center gap-2">
              📞 {SITE.phone}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-navy-600 text-sm font-medium">
            <span className="flex items-center gap-2">🛡️ 2-year guarantee</span>
            <span className="flex items-center gap-2">✅ Licensed &amp; insured</span>
            <span className="flex items-center gap-2">⭐ NSW Fair Trading</span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyCallCTA />
    </>
  );
}
