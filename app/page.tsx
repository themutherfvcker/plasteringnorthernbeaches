import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import QuoteForm from '@/components/QuoteForm';
import TrustBar from '@/components/TrustBar';
import MeetJack from '@/components/MeetJack';

export const metadata: Metadata = {
  title: "Jack's Plastering Northern Beaches | Sydney-Wide Plastering Service",
  description:
    "NSW Fair Trading licensed plasterer based in Dee Why, servicing the Northern Beaches and Sydney-wide. Free fixed-price quotes, 2-year written workmanship guarantee. Plaster repairs, gyprock, cornice, skim coating, ceiling repair.",
  alternates: { canonical: SITE.url },
};

const services = [
  { icon: '🎨', title: 'Drywall Plastering',     blurb: 'Perfect, smooth walls ready for painting. We handle new installs and replacements with precision.' },
  { icon: '🔨', title: 'Plaster Repairs',         blurb: 'Cracks, holes, water damage — we seamlessly repair any plaster issue so it looks brand new.' },
  { icon: '✨', title: 'Cornice & Detailing',     blurb: 'Decorative cornices, ceiling roses and ornamental plaster that adds character and elegance.' },
  { icon: '🪞', title: 'Skim Coating',            blurb: 'Ultra-smooth skim finishes over existing surfaces. Transform textured walls into sleek, modern ones.' },
  { icon: '💧', title: 'Water Damage Repair',     blurb: 'Busted pipes or storm damage? We restore water-damaged plaster fast to prevent further issues.' },
  { icon: '🏠', title: 'Full Home Plastering',    blurb: "Complete plastering for new builds and renovations. One team, one timeline, one perfect result.", popular: true },
];

const whyUs = [
  { icon: '🛡️', title: '2-year written guarantee',      body: "We stand behind every job. If there's an issue, we come back and fix it — period. No questions asked." },
  { icon: '✅', title: 'Fully licensed & insured',       body: 'Complete peace of mind. We carry full public liability insurance and all required NSW Fair Trading licences.' },
  { icon: '🧹', title: 'Dust-free & clean',              body: "We respect your home. Drop sheets, dust extraction, and a full clean-up means you'd never know we were there." },
  { icon: '⏰', title: 'On time, every time',            body: 'We show up when we say we will. No waiting around, no excuses. Your time matters.' },
];

const process = [
  { n: 1, title: 'Request your free quote',  body: "Fill in the form or call us. We'll be in touch fast with the next steps." },
  { n: 2, title: 'We assess & quote',         body: 'We visit your property, assess the job, and give you a fair, transparent fixed-price quote.' },
  { n: 3, title: 'Sit back & relax',          body: 'We complete the work on schedule, clean up perfectly, and leave you with flawless walls.' },
];

const testimonials = [
  { stars: 5, quote: "We had three rooms that needed complete replastering after a renovation. The team was punctual, incredibly tidy, and the finish is absolutely flawless. Can't recommend them enough!", name: 'Mark T.', image: '/avatars/customer-mark-t.webp', suburb: 'Manly Vale' },
  { stars: 5, quote: 'Had a massive water damage issue in the kitchen ceiling. They came out fast, quoted the next morning, and had it fixed within 48 hours. Amazing service and quality.', name: 'Mei L.', image: '/avatars/customer-mei-l.webp', suburb: 'Dee Why' },
  { stars: 5, quote: 'Best plasterers on the Beaches, hands down. They did our entire new build — walls, ceilings, cornices — and every single surface is perfect. The 2-year guarantee gave us total confidence.', name: 'James W.', image: '/avatars/customer-james-w.webp', suburb: 'Freshwater' },
];

const faqs = [
  {
    q: 'How quickly can you start on my job?',
    a: 'For most standard jobs, we can start within 3–5 business days of accepting our quote. For urgent repairs (like water damage), we can often attend the same day or next business day. We always communicate timelines clearly before starting.',
  },
  {
    q: 'Do you charge for quotes?',
    a: "Never. All our quotes are 100% free and no-obligation. We'll visit your property, assess the work required, and provide a transparent fixed-price quote. No pressure, no hidden fees, no surprises.",
  },
  {
    q: 'What does your 2-year guarantee cover?',
    a: 'Our 2-year written workmanship guarantee covers any defects in our work — cracking, sagging, joint separation, or any failure directly caused by our plastering. If something we did fails within 2 years, we fix it free of charge, including materials and labour. Backed by Jack&apos;s Plastering Northern Beaches.',
  },
  {
    q: 'Will you leave a mess?',
    a: "Absolutely not. We use dust sheets, dust extraction equipment, and clean up thoroughly at the end of every day and upon job completion. We respect your home and treat it like our own. You'll barely know we were there — except for your beautiful new walls.",
  },
  {
    q: 'How much does plastering cost on the Northern Beaches?',
    a: "Costs depend on the scope, condition, and type of plastering required. We provide free fixed-price quotes so you know exactly what you'll pay before we start — no hourly rates, no surprise bills. Small patch repairs can be very affordable, while full home plastering is quoted per square metre at competitive Northern Beaches rates.",
  },
  {
    q: 'Are you licensed and insured?',
    a: "Yes, 100%. We hold all required NSW Fair Trading trade licences and carry full public liability insurance. We're happy to show you our credentials upon request. Your property and peace of mind are always protected with us.",
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

// ── JSON-LD Schema for the page ────────────────────────────────────────────
const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE.url}/#service`,
      name: 'Plastering & gyprocking — Sydney Northern Beaches',
      provider: { '@id': `${SITE.url}/#business` },
      areaServed: heroAreasList.map((s) => ({
        '@type': 'City',
        name: s,
        containedInPlace: { '@type': 'State', name: 'New South Wales' },
      })),
      serviceType: 'Residential and commercial plastering, gyprocking, ceiling repair, cornice restoration, skim coating, render',
      description:
        'NSW Fair Trading licensed plastering and gyprocking across the Northern Beaches and Sydney-wide — drywall installation, plaster repairs, cornice and decorative work, skim coating, water damage repair, full home plastering. 2-year written workmanship guarantee, brand-backed.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Plastering services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.blurb },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    // BreadcrumbList intentionally omitted — homepage doesn't breadcrumb to itself.
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* ─── Trust bar (Vista-pattern, very top) ─── */}
      <TrustBar />

      {/* ─── Sticky Header ─── */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-navy-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
              <Image src="/logo.webp" alt={`${SITE.name} logo`} fill sizes="48px" priority className="object-cover" />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-navy-900 text-base md:text-lg block">{SITE.name}</span>
              <span className="font-extrabold text-brand-600 text-sm md:text-base block">{SITE.tagline}</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Services</a>
            <a href="#why-us" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Why Us</a>
            <a href="#reviews" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">Reviews</a>
            <a href="#faq" className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="hidden sm:flex items-center gap-2 text-navy-800 font-semibold hover:text-brand-600 transition-colors">
              📞 <span>{SITE.phone}</span>
            </a>
            <a href="#quote" className="v2-cta-gradient text-navy-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg shadow-brand-500/20">
              Free Quote →
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="v2-hero-gradient relative overflow-hidden">
        {/* Background image — real Jack on the Northern Beaches. Desktop only;
            mobile gets the gradient + form so the photo doesn't compete with stacked layout. */}
        <Image
          src="/jack.webp"
          alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-right opacity-95 z-0"
        />
        {/* Desktop overlay — fades to transparent over Jack's face on the right */}
        <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-transparent" aria-hidden="true" />
        {/* Decorative brand glows — sit above the overlay but below content */}
        <div className="absolute inset-0 opacity-10 z-[2]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-300 text-lg">★★★★★</span>
                <span className="text-white/80 text-sm font-medium">Local · Licensed · 15+ years on the tools</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Sydney&apos;s Northern Beaches
                <span className="text-brand-400 block mt-2">#1 Plasterer</span>
                <span className="text-white/90 block mt-1">Sydney-Wide Service</span>
              </h1>

              <p className="text-lg sm:text-xl text-navy-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Flawless walls, perfect finishes &amp; zero hassle. From tiny patch repairs to full home plastering — we do it all with a{' '}
                <strong className="text-brand-300">2-year written guarantee</strong>.
              </p>

              <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
                {[
                  'Free fixed-price quotes',
                  'NSW Fair Trading licensed & insured',
                  '2-year written guarantee',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/90 text-base">
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
                🛡️ No obligation. No spam. Just an honest quote.
              </p>
            </div>

            {/* Quote form in hero — same component as the dedicated /#quote section,
                 source='hero' tags the lead so we know which CTA it converted on. */}
            <div className="relative">
              <QuoteForm source="hero" />
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
              <div className="text-navy-600 font-medium text-sm mt-1">Years experience</div>
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

      {/* ─── Meet Jack (moved up — runs straight after the trust stats so the
          first thing past the hero is the human, not the service grid) ─── */}
      <MeetJack />

      {/* ─── Services ─── */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Our services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              Everything Plastering,<br/><span className="text-brand-600">Done Right</span>
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              From a small hole patch to a complete home renovation — we&apos;re the team the Northern Beaches trusts for perfect plastering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white border-2 border-navy-100 rounded-2xl p-6 md:p-8 hover:border-brand-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {s.popular && (
                  <div className="absolute top-4 right-4 bg-brand-500 text-navy-900 font-bold text-xs px-3 py-1 rounded-full">POPULAR</div>
                )}
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-5 text-2xl">{s.icon}</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 mb-4">{s.blurb}</p>
                <a href="#quote" className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors inline-flex items-center gap-1">
                  Get a quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Recent work gallery ─── */}
      <section className="py-16 md:py-24 bg-white border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Recent Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              See Jack&apos;s Recent Plastering Jobs
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Across the Northern Beaches and Sydney-wide. Same plasterer, same 2-year written guarantee on every job.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: 'decorative-dome-ceiling-installation-sydney.webp', alt: 'Decorative dome ceiling installation with recessed step lighting, Northern Beaches', suburb: 'Manly', job: 'Decorative dome ceiling + cornice feature' },
              { image: 'luxury-bathroom-marble-plastering-sydney.webp', alt: 'Luxury bathroom plastering with marble feature wall and integrated LED strip lighting, Sydney', suburb: 'Mosman', job: 'Luxury bathroom with marble feature wall' },
              { image: 'built-in-tv-fireplace-plastering-northern-beaches.webp', alt: 'Custom built-in TV cabinet and electric fireplace with suspended ceiling plastering, Northern Beaches', suburb: 'Avalon', job: 'Custom built-in TV + electric fireplace wall' },
              { image: 'ceiling-repair-in-progress-northern-beaches.webp', alt: 'Ceiling repair in progress on the Northern Beaches — large oval section cut out for plasterboard replacement and skim coating', suburb: 'Dee Why', job: 'Water-damage ceiling rebuild' },
              { image: 'kitchen-ceiling-plastering-northern-beaches.webp', alt: 'Kitchen suspended ceiling plastering with recessed downlights, Northern Beaches home', suburb: 'Brookvale', job: 'Kitchen suspended ceiling + downlights' },
              { image: 'full-home-plastering-northern-beaches.webp', alt: 'Full home plastering finish — high-ceiling hallway with dark hardwood floor, Northern Beaches build', suburb: 'Mona Vale', job: 'Full home plastering — paint-ready' },
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
            <p className="text-navy-300 text-sm mt-2">
              ⚠ Sample testimonials below — real verified Google reviews will replace these before launch.
            </p>
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
                  <div className="text-brand-400 text-sm font-semibold">{t.suburb} · Google review</div>
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
                Don&apos;t Risk Your Home<br/><span className="text-brand-600">With Amateurs</span>
              </h2>
              <p className="text-navy-600 text-lg mb-8 leading-relaxed">
                A bad plastering job doesn&apos;t just look terrible — it cracks, peels, and costs you thousands to fix. Our team delivers perfect results the first time, every time.
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
                  alt="Jack installing gyprock ceiling on the Northern Beaches — NSW Fair Trading licensed plasterer at work"
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    image: 'decorative-dome-ceiling-detail-sydney.webp',
                    alt: 'Decorative dome cornice feature, Manly — paint-ready finish backed by 2-year written guarantee',
                    suburb: 'Manly',
                  },
                  {
                    image: 'luxury-bathroom-marble-plastering-sydney.webp',
                    alt: 'Luxury bathroom plastering with marble feature wall and integrated LED, Mosman — backed by 2-year guarantee',
                    suburb: 'Mosman',
                  },
                  {
                    image: 'built-in-tv-fireplace-plastering-northern-beaches.webp',
                    alt: 'Custom built-in TV cabinet and electric fireplace wall, Avalon — backed by 2-year guarantee',
                    suburb: 'Avalon',
                  },
                  {
                    image: 'kitchen-ceiling-plastering-northern-beaches.webp',
                    alt: 'Kitchen suspended ceiling with recessed downlights, Brookvale — backed by 2-year guarantee',
                    suburb: 'Brookvale',
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
                We&apos;re so confident in our workmanship that we back every job with a{' '}
                <strong className="text-navy-900">2-year written guarantee</strong>. If anything goes wrong with our plastering within 2 years, we&apos;ll come back and fix it completely free — backed by {SITE.name}.
              </p>
              <div className="bg-white rounded-2xl p-6 border-2 border-brand-200 shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                    📜
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">2-year written workmanship guarantee</h3>
                    <p className="text-navy-600 text-sm">
                      Not verbal. Not wishy-washy. A proper, signed, written guarantee. Backed by {SITE.name} — if your plasterer can&apos;t honour it, we arrange another at no cost to you.
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
              Proudly Plastering the <span className="text-brand-600">Northern Beaches &amp; Sydney</span>
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
              3 Simple Steps to<br/><span className="text-brand-600">Perfect Walls</span>
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

      {/* ─── Quote Form ─── */}
      <section id="quote" className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
        {/* Background image — Jack on-site. Desktop only; mobile keeps a clean
            navy background so the stacked form has zero competition. Mirrors
            the hero treatment but flipped left so Jack sits behind the copy
            column and the form column stays fully readable. */}
        <Image
          src="/jack.webp"
          alt=""
          fill
          sizes="100vw"
          className="hidden md:block object-cover object-left opacity-70 z-0"
          aria-hidden="true"
        />
        {/* Desktop overlay — transparent on the left so Jack reads through,
            heavy on the right so the form card has solid contrast. */}
        <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-navy-900/40 via-navy-900/70 to-navy-900/95" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 z-[2]">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-500/20 text-brand-300 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Free quote</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
                Get Your <span className="text-brand-400">Free Quote</span>
              </h2>
              <p className="text-navy-200 text-lg mb-8 leading-relaxed">
                No obligation, no pressure. Just an honest, transparent quote from a team that actually shows up on time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Free on-site assessment',
                  'Fixed-price quote — no hidden fees',
                  'NSW Fair Trading licensed contractor',
                  '10% off for first-time customers',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/90">
                    <span className="text-brand-400 text-xl flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <QuoteForm source="main" />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">Common Questions</h2>
            <p className="text-navy-600 text-lg">Everything you need to know before hiring us.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border-2 border-navy-100 rounded-xl overflow-hidden">
                <summary className="cursor-pointer w-full text-left px-6 py-5 flex items-center justify-between hover:bg-navy-50 transition-colors list-none">
                  <span className="font-bold text-navy-900 pr-4">{f.q}</span>
                  <span className="text-navy-400 text-xl flex-shrink-0 group-open:rotate-180 transition-transform duration-300">⌄</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-navy-600 leading-relaxed">{f.a}</p>
                </div>
              </details>
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
            Stop Living With<br/><span className="text-brand-600">Ugly Walls</span>
          </h2>
          <p className="text-navy-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            You deserve walls you&apos;re proud of. Get your free quote today and see why Northern Beaches homeowners trust us with their homes.
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

      {/* ─── Footer ─── */}
      <footer className="bg-navy-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-xl">🏠</div>
                <div>
                  <span className="font-bold text-white text-lg leading-tight block">Northern Beaches</span>
                  <span className="text-brand-400 font-semibold text-xs tracking-wide uppercase">Plastering Services</span>
                </div>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed">
                Sydney&apos;s Northern Beaches most trusted plastering team. 15+ years of perfect finishes and happy customers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Services</a>
                <a href="#why-us" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Why Choose Us</a>
                <a href="#reviews" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Reviews</a>
                <a href="#quote" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Free Quote</a>
                <a href="#faq" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">FAQ</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm">
                  📞 {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm">
                  ✉️ {SITE.email}
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=14%2F39-41+Pacific+Parade+Dee+Why+NSW+2099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm not-italic"
                >
                  <span className="leading-none">📍</span>
                  <span>14/39-41 Pacific Parade,<br/>Dee Why NSW 2099</span>
                </a>
                <div className="flex items-center gap-3 text-navy-300 text-sm">
                  🕐 Mon–Sat: 7am – 6pm
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-navy-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
            <p className="text-navy-500 text-xs">Licensed · Insured · 2-year written guarantee</p>
          </div>
        </div>
      </footer>

      {/* ─── Sticky bottom CALL CTA (all screen sizes) ─── */}
      <a
        href={`tel:${SITE.phoneTel}`}
        className="fixed bottom-0 left-0 right-0 z-50 bg-lime-500 hover:bg-lime-400 text-slate-900 font-extrabold text-center py-3 md:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-colors"
      >
        <div className="text-base md:text-xl uppercase tracking-wide leading-tight">
          <span className="text-xl md:text-2xl mr-1">📞</span>
          CALL JACK NOW ON <span className="font-black">{SITE.phone}</span>
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider font-bold mt-1 opacity-90 leading-tight">
          For your FREE plastering quote
        </div>
      </a>
    </>
  );
}
