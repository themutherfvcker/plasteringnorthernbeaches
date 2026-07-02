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

export const metadata: Metadata = {
  title: "Plastering Cost Sydney — 2026 Price Guide | Jack's Plastering",
  description:
    "How much does a plasterer cost in Sydney? Real 2026 prices per job type — ceiling repair, cornice, hole patches, water damage. Fixed-price quotes in 24hrs.",
  alternates: { canonical: `${SITE.url}/plastering-cost-sydney` },
  openGraph: {
    title: "Plastering Cost Sydney — 2026 Price Guide | Jack's Plastering",
    description:
      "Real 2026 plastering prices for Sydney — ceiling repair, cornice, hole patches, water damage. Fixed-price quotes in 24hrs.",
    url: `${SITE.url}/plastering-cost-sydney`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

// Pricing tiers — real 2026 Sydney metro numbers. Every range is defensible
// against the "you're overcharging" / "you're too cheap to trust" pushback.
const priceTable = [
  {
    service: 'Small plaster hole patch',
    href: '/services/plaster-hole-patch',
    scope: 'Single hole up to 200mm — TV bracket dent, doorknob impact, pipe damage. Paint-ready in one visit.',
    range: '$290 – $480',
    time: '2–3 hours',
    note: 'Bundle discount if you have 2+ holes in one visit.',
  },
  {
    service: 'Ceiling crack repair',
    href: '/services/ceiling-repair-sydney',
    scope: 'Hairline to 5mm crack, single room. Cut back, re-tape, re-set, sand and skim.',
    range: '$290 – $800',
    time: '2–5 hours',
    note: 'Multiple rooms priced per-room with a small bundle discount.',
  },
  {
    service: 'Water-damage ceiling repair',
    href: '/services/water-damage-ceiling-repair',
    scope: '1m² damaged area cut out, replaced with new plasterboard, re-taped, skim-coat, paint-ready.',
    range: '$600 – $2,500',
    time: 'One visit for smaller jobs; two visits if drying is required',
    note: 'Insurance-claim jobs quoted separately for the assessor.',
  },
  {
    service: 'Cornice repair — modern profile',
    href: '/services/cornice-repair-sydney',
    scope: 'Cracked, gapping or lifting cornice on a standard 55mm/75mm cove profile. Room-by-room.',
    range: '$290 – $600 per room',
    time: '3–5 hours per room',
    note: 'Multi-room bundles are meaningfully cheaper per room.',
  },
  {
    service: 'Cornice repair — heritage / Federation',
    href: '/services/cornice-repair-sydney',
    scope: 'Heritage or Federation-profile cornice matched, sourced or hand-formed. Higher labour density.',
    range: '$980 – $2,200 per room',
    time: '1–2 days per room',
    note: 'Profile matching may require a second visit 5–10 days after quoting.',
  },
  {
    service: 'End-of-lease plaster repair',
    href: '/services/end-of-lease-plaster-repair',
    scope: 'Multiple wall holes before inspection. Paint-ready same day. GST invoice for property managers.',
    range: '$290 – $1,200',
    time: 'One visit',
    note: 'Bundle pricing for 5+ holes drops the per-hole rate significantly.',
  },
  {
    service: 'Storm-damage ceiling — emergency response',
    href: '/services/storm-damage-ceiling-repair',
    scope: 'Active-emergency 1-hour response, on-site assessment, temporary make-safe if collapse risk.',
    range: '$450 call-out + repair cost',
    time: '1-hour response, same-week restoration',
    note: 'Insurance-claim quotes prepared for your assessor at no extra charge.',
  },
  {
    service: 'Full home plastering — new build or full reno',
    href: '/plasterer-northern-beaches',
    scope: 'Whole-house wall + ceiling plastering. Priced per square metre of wall/ceiling surface.',
    range: '$25 – $45 per m²',
    time: '5–12 working days depending on size',
    note: 'Sydney metro; Northern Beaches sits at the upper end of the range.',
  },
];

// Cost-driver breakdown — helps searchers estimate their own job before ringing
const costFactors = [
  {
    title: 'Job size',
    body: 'The single biggest driver. A 200mm hole and a full ceiling replacement share nothing but the trowel — expect per-hour rates to invert against small jobs (short setups eat the margin).',
  },
  {
    title: 'Access',
    body: 'Two-storey ceilings, tight cupboards, restricted stair access, working over stairwells — all add labour. Ground-floor open-plan is cheapest.',
  },
  {
    title: 'Existing wall type',
    body: 'Modern gyprock takes patches quickly. Old plasterboard (pre-1990) is more fragile. Solid plaster over brick is a specialist job and priced higher.',
  },
  {
    title: 'Match quality expected',
    body: 'A patch that will be painted-over doesn\'t need invisible-finish sanding. A skim to level that will be photographed does. Tell us your standard.',
  },
  {
    title: 'Cornice profile',
    body: 'Standard cove (55mm/75mm) is cheap and fast. Federation, Victorian or Edwardian profile matching can double the price and add a sourcing lead time.',
  },
  {
    title: 'Insurance claim vs. cash',
    body: 'Insurance-claim jobs are priced the same as cash jobs. We provide separate documentation for your assessor — no premium, no discount.',
  },
  {
    title: 'Emergency response',
    body: '1-hour storm/collapse response adds a call-out fee ($450) on top of the repair. Standard 24-hour bookings don\'t.',
  },
  {
    title: 'Suburb + travel',
    body: 'Northern Beaches base — no travel surcharge inside the Beaches or Sydney metro. Bookings past Windsor or beyond Waterfall are quoted with a travel line.',
  },
];

// PAA-mined FAQs — each answer targets a specific searched query. Written for
// direct LLM extraction with numbers + named entities.
const faqs = [
  {
    q: 'How much does a plasterer cost per hour in Sydney?',
    a: "Hourly plasterer rates in Sydney typically run $60 to $90 per hour for repair work, higher on the Northern Beaches and Lower North Shore due to demand. However, most reputable Sydney plasterers quote fixed prices per job rather than by the hour — hourly quotes leave you exposed to slow work. At Jack's Plastering Northern Beaches every quote is fixed-price and written before we start. If a plasterer refuses to give a fixed price for a defined scope, that's a warning sign.",
  },
  {
    q: 'How much does a plasterer charge per square metre in Sydney?',
    a: 'Fresh wall and ceiling plastering in Sydney runs $25 to $45 per square metre in 2026. The lower end covers standard gyprock install + set finish in accessible ground-floor rooms. The upper end covers Northern Beaches, Lower North Shore, and Upper North Shore locations where trade rates are higher, or jobs with restricted access. Solid plaster over brick (rare in modern builds) is priced separately — usually $60–$90/m².',
  },
  {
    q: 'How much does ceiling repair cost in Sydney?',
    a: 'Sydney ceiling repair typically runs $290 to $2,500 in 2026 depending on damage type and area. Hairline cracks and small stains sit at the low end ($290-$800). Water-damage repairs requiring plasterboard replacement and paint-ready finishing sit at the upper end ($600-$2,500). Full ceiling replacement (single room) starts around $2,200. Get a fixed-price written quote within 24 hours — no hourly guesswork.',
  },
  {
    q: 'How much does water damage ceiling repair cost in Sydney?',
    a: 'Water-damage ceiling repair in Sydney costs between $600 and $2,500 in most cases. The final number depends on: (1) size of the damaged area, (2) whether sagging plaster needs cutting out and replacing, (3) whether mould treatment is required, (4) how much cornice or decorative detail needs matching. Small stains under 1m² sit at the lower end. Full sagging plaster cut-outs or mould-affected gyprock sit at the upper end. Insurance claims are documented separately for your assessor at no extra charge.',
  },
  {
    q: 'How much does cornice repair cost in Sydney?',
    a: 'Most cornice crack and gap repairs in Sydney cost between $290 and $600 per room. Full cornice replacement (5 lineal metres, modern profile) is $480-$850. Heritage or Federation profile replacement starts around $980 and can reach $2,200 per room depending on profile complexity and sourcing. Multi-room bundles are meaningfully cheaper on a per-room basis — always ask for a bundle quote if you have more than one room.',
  },
  {
    q: 'How much does it cost to fix a hole in the wall?',
    a: 'Fixed-price plaster hole repair in Sydney starts at $290 for a single hole up to 200mm (TV bracket damage, doorknob dents, pipe damage, DIY patches gone wrong). Bundle pricing kicks in for 2+ holes in the same visit — the per-hole rate drops significantly. Paint-ready finish included. If the hole is over 500mm or in a load-bearing area (rare for a plaster hole), the price bumps to $480+.',
  },
  {
    q: 'Do plasterers charge more for insurance jobs?',
    a: "No — reputable plasterers should charge the same rate whether you're paying cash or through an insurance claim. What DOES change: for insurance jobs we prepare separate documentation formatted for your assessor (scope of work, materials list, before/after photos, timeline). That admin costs us time but we don't pass it on as a premium. If a plasterer quotes higher for insurance work than the same-scope cash job, get a second quote.",
  },
  {
    q: 'Why do plasterer quotes vary so much between contractors?',
    a: 'Sydney plastering quotes commonly vary 2-3x on the same job. Three main reasons. (1) Licence status — NSW Fair Trading licensed plasterers carry insurance and comply with the Home Building Compensation Fund, adding overhead vs. unlicensed operators. (2) Finish standard — a "paint-ready" quote differs from a "photograph-ready" quote. (3) Warranty backing — a 2-year written workmanship guarantee costs more to price than a "call me if it cracks" verbal promise. Ask for the licence number, get the guarantee in writing, and compare like for like.',
  },
  {
    q: 'Are plaster quotes free in Sydney?',
    a: "Yes — at Jack's Plastering Northern Beaches every on-site quote is free and no-obligation. We visit, assess, and email a fixed-price written quote within 24 hours. Some contractors charge a $50-$100 call-out fee for quotes; we don't. If you don't book us, you owe nothing.",
  },
  {
    q: 'Do I need a licensed plasterer in NSW?',
    a: 'Yes — NSW Fair Trading requires any residential plastering work valued over $5,000 (combined labour and materials) to be performed by a contractor holding a General Building or Specialist Trade Licence. Smaller jobs are technically permitted unlicensed, but a licensed plasterer proves formal trade training, mandates public liability insurance, and gives access to Home Building Compensation Fund cover on jobs over $20,000. Ask for the licence number on any quote and verify it at service.nsw.gov.au.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  datePublished: SITE.datePublished,
  dateModified: SITE.dateModified,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plastering Cost Sydney', item: `${SITE.url}/plastering-cost-sydney` },
  ],
};

const priceArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Plastering Cost Sydney — 2026 Price Guide',
  datePublished: SITE.datePublished,
  dateModified: SITE.dateModified,
  author: { '@id': `${SITE.url}/#jack` },
  publisher: { '@id': `${SITE.url}/#business` },
  about: 'Plastering costs in Sydney — per-job pricing ranges, cost drivers, and how to compare quotes.',
  articleSection: 'Pricing',
};

export default function Page() {
  return (
    <>
      <TrustBar />
      <SiteHeader />

      {/* HERO */}
      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        <Image
          src="/jack.webp"
          alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-right opacity-70 z-0"
        />
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-navy-900/20" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <p className="text-brand-300 text-sm font-bold uppercase tracking-wider mb-4">2026 Sydney Price Guide</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              How Much Does a Plasterer Cost in Sydney?
              <span className="block mt-3 text-brand-400 text-2xl md:text-3xl lg:text-4xl">
                Real 2026 prices per job — no surprises.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-navy-100 mb-8 leading-relaxed">
              Honest price ranges for every plastering job we quote across the Northern Beaches and Sydney metro.
              Every job below is priced from Jack&apos;s current 2026 quote book — not scraped averages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-colors">
                📞 Call Jack — {phoneDisplay}
              </a>
              <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl transition-colors">
                Get a 24hr fixed-price quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TABLE — THE MEAT */}
      <section className="bg-white px-4 py-16 md:py-20 border-b border-navy-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Plastering Price Ranges — Sydney, 2026
          </h2>
          <p className="text-navy-600 text-center text-lg mb-3 max-w-3xl mx-auto">
            Every range below is quoted fixed-price after an on-site inspection. No hourly rates, no surprise variations, no deposit until materials arrive.
          </p>
          <p className="text-navy-500 text-center text-sm mb-10 italic">
            <time dateTime={SITE.dateModified}>{`Last updated: ${new Date(SITE.dateModified).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}</time>
          </p>

          <div className="space-y-4">
            {priceTable.map((row, i) => (
              <article key={i} className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8 hover:border-brand-400 transition-colors">
                <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start mb-4">
                  <div>
                    <h3 className="font-bold text-navy-900 text-xl md:text-2xl mb-2">
                      <Link href={row.href} className="hover:text-brand-600 transition-colors">
                        {row.service} →
                      </Link>
                    </h3>
                    <p className="text-navy-700 leading-relaxed">{row.scope}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-brand-600 font-black text-2xl md:text-3xl leading-none">{row.range}</div>
                    <div className="text-navy-500 text-sm font-semibold mt-1">{row.time}</div>
                  </div>
                </div>
                <p className="text-navy-500 text-sm italic border-t border-navy-200 pt-3 mt-3">💡 {row.note}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#quote" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors">
              Get a fixed-price quote for YOUR job →
            </a>
            <p className="text-navy-500 text-sm mt-3">Free on-site inspection · Written quote in 24 hours · No deposit until materials arrive</p>
          </div>
        </div>
      </section>

      {/* MEET JACK — trust anchor after the pricing punch */}
      <MeetJack />

      {/* COST FACTORS */}
      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            What Drives the Final Price?
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10 max-w-2xl mx-auto">
            Eight factors that push a plaster quote up or down. Understand these before you compare quotes.
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {costFactors.map((f, i) => (
              <article key={i} className="bg-white rounded-xl border border-navy-100 p-5 md:p-6 shadow-sm">
                <h3 className="font-bold text-navy-900 text-lg mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-black shrink-0">{i + 1}</span>
                  {f.title}
                </h3>
                <p className="text-navy-700 leading-relaxed text-sm md:text-base">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO COMPARE QUOTES */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            How to Compare Plaster Quotes Fairly
          </h2>
          <p className="text-navy-600 text-center text-lg mb-10">
            Quotes for the same job commonly vary 2-3x in Sydney. Here&apos;s how to compare like-for-like.
          </p>
          <ol className="space-y-6">
            {[
              {
                t: 'Confirm the NSW Fair Trading licence',
                b: 'Ask for the licence number on the quote (not just "we\'re licensed"). Verify it at service.nsw.gov.au. If a contractor won\'t provide it, walk away — they cannot legally quote work over $5,000 without one.',
              },
              {
                t: 'Get the guarantee in writing',
                b: 'A verbal "call me if it cracks" is worth nothing. Written workmanship guarantees are enforceable. Jack\'s Plastering guarantees every job for 2 years in writing, brand-backed.',
              },
              {
                t: 'Compare finish standard',
                b: '"Paint-ready" and "photograph-ready" are different jobs. Ask the contractor to describe the finish standard in writing. If they can\'t define it, they can\'t deliver it.',
              },
              {
                t: 'Watch for the deposit clause',
                b: 'Legitimate plasterers don\'t ask for deposits before materials arrive. Anyone asking for 50% up front is either desperate for cashflow or preparing to disappear.',
              },
              {
                t: 'Ask for insurance details',
                b: 'Public liability insurance (minimum $5M) protects you if the plasterer damages your property. Ask for the insurance certificate number and expiry date on the quote.',
              },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center font-black text-lg shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg mb-1">{step.t}</h3>
                  <p className="text-navy-700 leading-relaxed">{step.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — PAA-mined for LLM extraction */}
      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
            Plastering Cost Sydney — Your Questions Answered
          </h2>
          <p className="text-navy-600 text-center text-lg mb-3">
            Every price question we get before quoting a Sydney plastering job.
          </p>
          <p className="text-navy-500 text-sm mt-2 text-center italic mb-10">
            <time dateTime={SITE.dateModified}>{`Last updated: ${new Date(SITE.dateModified).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}</time>
          </p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <article
                key={i}
                itemScope
                itemType="https://schema.org/Question"
                className="bg-white rounded-xl border border-navy-100 p-5 md:p-6"
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

      {/* QUOTE FORM */}
      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Get a fixed-price quote for YOUR plastering job
            </h2>
            <p className="text-navy-100 text-lg mb-6">
              Two ways to reach Jack. Pick whichever&apos;s easiest. Fixed-price written quote at your door within 24 hours.
            </p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
                <div className="font-bold text-lg">📞 Call Jack now</div>
                <div className="text-navy-200 text-sm">{phoneDisplay} · Answered first ring · 15-min callback if missed</div>
              </a>
              <div className="text-navy-200 text-sm text-center py-2">— or —</div>
            </div>
          </div>
          <LeanQuoteForm source="plastering-cost-sydney" problem="Plastering Cost" />
        </div>
      </section>

      <SiteFooter />
      <StickyCallCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceArticleSchema) }} />
    </>
  );
}
