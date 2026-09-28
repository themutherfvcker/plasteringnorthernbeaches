import type { Metadata } from 'next';
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

const slug = 'gyprock-plasterboard-northern-beaches';
const pageUrl = `${SITE.url}/services/${slug}`;
const dateModified = '2026-09-29';

export const metadata: Metadata = {
  title: "Gyprock Northern Beaches & North Shore | Repair & Installation",
  description:
    'Gyprock and plasterboard repair, replacement and installation across the Northern Beaches and North Shore. Walls, ceilings and damaged sheets. Fixed-price quote in 24 hours.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Gyprock Northern Beaches & North Shore | Repair & Installation",
    description:
      'Gyprock and plasterboard repair, replacement and installation across the Northern Beaches and North Shore. Walls, ceilings and damaged sheets. Fixed-price quote in 24 hours.',
    url: pageUrl,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const services = [
  {
    title: 'Gyprock repairs',
    body: 'Repair holes, cracked joints, damaged sections and failed previous patches without replacing more sheet than necessary.',
  },
  {
    title: 'Plasterboard installation',
    body: 'Install and set new plasterboard for renovations, room changes, new walls and ceiling upgrades.',
  },
  {
    title: 'Sheet replacement',
    body: 'Remove and replace sections that are too wet, weak, sagging or damaged to repair reliably.',
  },
  {
    title: 'Walls and ceilings',
    body: 'Match the board and finish to the location, then set, sand and leave the surface ready for painting.',
  },
];

const faqs = [
  {
    q: 'Is Gyprock the same as plasterboard?',
    a: 'Gyprock is a widely used Australian brand name for plasterboard. Homeowners often use the two words interchangeably. We repair, replace and install internal plasterboard wall and ceiling systems.',
  },
  {
    q: 'Can damaged Gyprock be repaired, or does it need replacing?',
    a: 'Small holes, cracked joints and local damage can often be repaired. Soft, badly water-damaged, sagging or structurally weakened sheets may need partial or full replacement. We inspect the damage before recommending the most reliable option.',
  },
  {
    q: 'Do you install Gyprock for renovations?',
    a: 'Yes. We install and set plasterboard for room alterations, new internal walls, ceilings and renovation work, then leave it ready for the painter.',
  },
  {
    q: 'Do you repair both Gyprock walls and ceilings?',
    a: 'Yes. The right method depends on the location, board condition, framing, moisture and the cause of the damage. If a leak caused the problem, the leak needs to be fixed and the area dry before the plasterboard is closed and finished.',
  },
  {
    q: 'How quickly can I get a quote?',
    a: 'Call or send the short form with your suburb and job details. We provide a fixed-price written quote after assessing the work, with the quote visit arranged within 24 hours in the normal service area.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We cover the Northern Beaches and North Shore, including Manly, Freshwater, Dee Why, Brookvale, Narrabeen, Mona Vale and Frenchs Forest, plus Mosman, North Sydney, Chatswood, Gordon, Pymble, St Ives, Turramurra, Wahroonga and surrounding suburbs.',
  },
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
  name: 'Gyprock and Plasterboard Northern Beaches and North Shore',
  serviceType: 'Gyprock and plasterboard repair, replacement and installation',
  image: [
    `${SITE.url}/gallery/gyprock-ceiling-installation-northern-beaches.webp`,
    `${SITE.url}/gallery/full-home-plastering-northern-beaches.webp`,
  ],
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((suburb) => ({
    '@type': 'City',
    name: suburb,
    containedInPlace: { '@type': 'State', name: 'New South Wales' },
  })),
  description:
    'Gyprock and plasterboard repair, replacement and installation for walls and ceilings across the Northern Beaches and North Shore.',
  url: pageUrl,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Plastering Services', item: `${SITE.url}/plasterer-northern-beaches` },
    { '@type': 'ListItem', position: 3, name: 'Gyprock & Plasterboard Northern Beaches', item: pageUrl },
  ],
};

export default function Page() {
  return (
    <>
      <TrustBar />
      <SiteHeader />

      <section className="relative v2-hero-gradient text-white pt-12 md:pt-20 pb-12 md:pb-20 px-4 overflow-hidden">
        <Image
          src="/gallery/gyprock-ceiling-installation-northern-beaches.webp"
          alt="Gyprock plasterboard ceiling installation on the Northern Beaches"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-right opacity-50 z-0"
        />
        <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/30" aria-hidden="true" />
        <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Gyprock &amp; Plasterboard Northern Beaches &amp; North Shore
              <span className="block mt-3 text-brand-400 text-2xl md:text-3xl lg:text-4xl">
                Repair, replace or install it properly—then leave it paint-ready.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed mb-7">
              One local team for Gyprock repairs, new plasterboard walls and ceilings, sheet replacement and setting across the Northern Beaches and North Shore.
            </p>
            <ul className="space-y-3 text-lg text-navy-100 mb-8">
              <li className="flex gap-3"><span className="text-brand-400">✓</span><span>Repairs, replacement and new installation</span></li>
              <li className="flex gap-3"><span className="text-brand-400">✓</span><span>Walls and ceilings finished paint-ready</span></li>
              <li className="flex gap-3"><span className="text-brand-400">✓</span><span>Clear fixed-price written quote</span></li>
              <li className="flex gap-3"><span className="text-brand-400">✓</span><span>Small repairs and renovation work welcome</span></li>
            </ul>
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
              📞 Call Jack — {phoneDisplay}
            </a>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="gyprock-plasterboard-northern-beaches" problem="Gyprock & Plasterboard" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <TrustStrip items={['Gyprock repairs', 'Plasterboard installation', 'Walls & ceilings', 'Paint-ready finish']} />
      <MeetJack />

      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Gyprock and plasterboard work we handle</h2>
          <p className="text-navy-600 text-center text-lg mb-12 max-w-3xl mx-auto">
            The right job may be a local repair, a section replacement or new sheeting. We assess the board and the cause before recommending the scope.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.title} className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm">
                <h3 className="font-bold text-xl text-navy-900 mb-3">{service.title}</h3>
                <p className="text-navy-600 leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/gallery/full-home-plastering-northern-beaches.webp"
              alt="New plasterboard walls set and finished ready for painting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-5">Repair or replace? Start with the condition of the sheet.</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-5">
              A clean hole or failed joint can usually be repaired. Plasterboard that is soft from water, badly sagging, extensively cracked or no longer secure may need a section replaced.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              We explain what can be saved, what should be replaced and what must be fixed first—such as an active leak—before closing and finishing the surface.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3 text-center">From bare sheet to a paint-ready finish</h2>
          <p className="text-navy-200 text-center text-lg mb-12">A clear four-step process for repair and installation work.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ['1', 'Assess', 'Check the damage, board type, framing, moisture and the finish you need.'],
              ['2', 'Quote', 'Confirm the repair or installation scope in a fixed-price written quote.'],
              ['3', 'Repair or install', 'Cut out failed material or install the new plasterboard and secure it correctly.'],
              ['4', 'Set and finish', 'Tape, set, sand and leave the surface ready for the painter.'],
            ].map(([number, title, body]) => (
              <article key={number} className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-brand-500 text-navy-900 font-extrabold flex items-center justify-center mb-4">{number}</div>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-navy-200 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Gyprock and plasterboard questions</h2>
          <p className="text-navy-600 text-center text-lg mb-3">What Northern Beaches and North Shore homeowners ask before booking.</p>
          <p className="text-navy-500 text-sm mb-10 text-center">
            <time dateTime={dateModified}>Last updated: 29 September 2026</time>
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.q} itemScope itemType="https://schema.org/Question" className="bg-navy-50 rounded-xl border border-navy-100 p-5 md:p-6">
                <h3 itemProp="name" className="font-bold text-navy-900 text-base md:text-lg mb-3">{faq.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-navy-700 leading-relaxed">{faq.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug={slug} />

      <section id="quote" className="v2-hero-gradient text-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Need Gyprock repaired, replaced or installed?</h2>
            <p className="text-navy-100 text-lg mb-6">Tell Jack what is happening, where the job is and whether it is a repair or renovation.</p>
            <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
              <div className="font-bold text-lg">📞 Call Jack now</div>
              <div className="text-navy-200 text-sm">{phoneDisplay} · Or use the short quote form</div>
            </a>
          </div>
          <div><LeanQuoteForm source="gyprock-plasterboard-northern-beaches-bottom" problem="Gyprock & Plasterboard" /></div>
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
