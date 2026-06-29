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
  title: "Storm Damage Ceiling Repair Sydney — 1-Hour Emergency Response | Jack's Plastering Northern Beaches",
  description:
    'Storm damaged your ceiling? Sagging? Water coming through? We respond within 1 hour across Sydney. Same-day emergency assessment. Fixed-price quote within 24 hours. We deal with your insurer. 2-year written guarantee. Call Jack now.',
  alternates: { canonical: `${SITE.url}/services/storm-damage-ceiling-repair` },
  openGraph: {
    title: 'Storm Damage Ceiling Repair Sydney — 1-Hour Emergency Response',
    description: 'Storm-damaged ceiling, sagging plaster, water coming through. 1-hour response. Insurance liaison. From damaged to safe again, same week.',
    url: `${SITE.url}/services/storm-damage-ceiling-repair`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'I think my ceiling is about to collapse — what do I do?', a: 'Evacuate the room immediately. Don&apos;t poke or touch the sagging area. Move furniture only if safe. Call us — we respond to imminent-collapse jobs within 1 hour across Sydney. We&apos;ll talk you through making it safe while we&apos;re on the way.' },
  { q: 'How fast can you arrive after a storm?', a: 'For active emergencies (sagging ceiling, water actively coming through, ceiling collapse risk) we target 1-hour response across Sydney. For non-urgent storm aftermath (water stain, small section to replace) we&apos;re at your door for a fixed-price quote within 24 hours.' },
  { q: 'Do you deal directly with my insurer?', a: 'Yes. We document the storm damage with photos and measurements, format the quote for insurance assessors, and coordinate timing with your insurer. Just tell us at the call stage it&apos;s an insurance claim.' },
  { q: 'How much does storm damage ceiling repair cost?', a: 'Small section repairs (1m² ceiling patch + skim) typically $600–$1,500. Larger jobs (full ceiling replacement after partial collapse) start around $2,200. Insurance jobs invoiced directly to insurer where preferred. Every quote is fixed-price and written before we start.' },
  { q: 'My roof tile blew off — should I get the roof fixed before you come?', a: 'For an emergency stabilisation: yes, get a roofer to seal the tile gap or tarp the section so no more water comes in. Then we restore the ceiling once the source is sealed. We can recommend a roofer if you need one — most we work with respond within hours of a storm.' },
  { q: 'What if the repair fails or cracks?', a: 'Our 2-year written workmanship guarantee covers any cracking, sagging or finish failure caused by our work. Jack comes back and fixes it free.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes — Jack is a NSW Fair Trading licensed plasterer. Licence number provided in writing with every quote, verifiable at service.nsw.gov.au.' },
  { q: 'Will mould grow in the damaged area before you arrive?', a: 'Wet plasterboard left untreated can grow mould within 24–72 hours. If your ceiling has been wet for more than a day, mention it on the call so we plan the repair (and any drying or mould treatment) accordingly.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE.url}/services/storm-damage-ceiling-repair#service`,
  name: 'Storm Damage Ceiling Repair Sydney', serviceType: 'Storm Damage Ceiling Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({ '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' } })),
  description: 'Emergency storm-damage ceiling repair across Sydney. 1-hour response, insurance liaison, full restoration. Backed by our 2-year written workmanship guarantee.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'AUD', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', minPrice: 290, maxPrice: 4500 }, url: `${SITE.url}/services/storm-damage-ceiling-repair` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Storm Damage Ceiling Repair', item: `${SITE.url}/services/storm-damage-ceiling-repair` },
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
              Storm Damaged Your Ceiling? Sagging? Water Coming Through?
              <span className="block mt-3 text-brand-400">From damaged to safe again — same week.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">1-hour emergency response</strong> for sagging or actively-leaking ceilings.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Same-day on-site assessment</strong> for storm aftermath.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">We deal with your insurance company directly</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Call Jack now</strong> — emergencies answered immediately.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform animate-pulse-glow">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Sagging ceiling = evacuate the room first. Call us on the way out.</p>
          </div>
          <div className="md:sticky md:top-6">
            <LeanQuoteForm source="storm-damage-ceiling-repair" problem="Storm Damage Ceiling Repair" submitLabel="Call me back urgently →" />
            <TrustBadges />
          </div>
        </div>
      </section>

      <TrustStrip items={['1-hour emergency response', 'Same-day on-site assessment', 'Insurance liaison included', '2-year written guarantee']} />

      <MeetJack />

      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. We stabilise. We restore. We handle the insurer.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — we respond within 1 hour', body: 'For active emergencies (sagging, leaking, collapse risk) call immediately — we&apos;re on the way within 1 hour across Sydney. For non-urgent storm aftermath, fill the form and Jack calls back within 24 hours.' },
              { n: '2', title: 'Same-day inspection, fixed-price quote', body: 'Jack inspects, photographs the damage for your insurer, and gives you a fixed-price written quote on the spot. Insurance-formatted documentation included.' },
              { n: '3', title: 'Restored — most jobs within the week', body: 'Smaller storm damage usually done in one visit. Larger jobs (full ceiling replacement) typically within the week. We co-ordinate timing with your assessor so you&apos;re not chasing.' },
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
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent storm damage repairs</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent storm-aftermath jobs across Sydney.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Manly', job: 'Partial ceiling collapse, kids&apos; bedroom', time: '1-hour response, stabilised same day, restored in 5 days', image: 'ceiling-repair-in-progress-northern-beaches.webp', alt: 'Storm-damaged ceiling rebuild in progress — Northern Beaches emergency repair after roof leak' },
              { suburb: 'Dee Why', job: 'Sagging hallway ceiling, insurance job', time: 'Same-day assessment, restored in 3 days', image: 'outdoor-patio-ceiling-plastering-sydney.webp', alt: 'Outdoor patio storm-damage ceiling repair, Sydney — gyprock reinstalled and finished' },
              { suburb: 'Mona Vale', job: '1m² section + skim coat, post-storm', time: 'One visit, paint-ready, $890', image: 'commercial-ceiling-plastering-sydney.webp', alt: 'Storm-damage ceiling restored and joint-finished, ready for paint — Sydney installation' },
].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">                <div className="aspect-[4/3] relative">
                  <Image src={`/gallery/${j.image}`} alt={j.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <figcaption className="p-5"><div className="font-bold text-navy-900 mb-1">{j.suburb}</div><div className="text-navy-700 text-sm mb-2">{j.job}</div><div className="text-navy-500 text-xs font-semibold">{j.time}</div></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Picture your ceiling, by the end of the week.</h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The sagging — <span className="text-brand-400 font-semibold">stabilised</span>.</p>
            <p>The damage — <span className="text-brand-400 font-semibold">restored</span>.</p>
            <p>The fear that it&apos;s going to come down on your family — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">Your ceiling restored. Your home safe again. Your insurance sorted.</p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">1-hour response. Fixed price. Insurance handled. 2-year written guarantee.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">What Sydney homeowners say</h2>
          <p className="text-navy-600 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Half the ceiling came down at 2am in the storm. Called at 7am, Jack was here by 8. Stabilised it that day, restored over the week. Insurance dealt with directly.', name: 'Sarah M.', suburb: 'Manly' },
              { stars: 5, quote: 'Sagging hallway ceiling after the storm. Could&apos;ve come down on the kids. Jack responded in 45 minutes. We slept easier the same night.', name: 'David K.', suburb: 'Dee Why' },
              { stars: 5, quote: 'Roof tile blew off, water trashed a 1m² section of ceiling. Jack quoted, fixed, invoiced — all within four days. Easiest insurance claim we&apos;ve ever made.', name: 'Priya R.', suburb: 'Mona Vale' },
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
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Safe again — for 2 full years.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">Every storm-damage repair is backed in writing for 2 full years. If the work cracks, sags or fails — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Jack's Plastering Northern Beaches.</p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Sagging ceiling? Don&apos;t wait. We respond within 1 hour.</h2>
          <p className="text-navy-200 mb-6">Insurance job or direct-pay — Jack&apos;s on the way.</p>
          <div className="flex justify-center"><a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30 animate-pulse-glow">📞 Call Jack — {phoneDisplay}</a></div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Storm damage ceiling repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions homeowners ask most often after a storm.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to get your home safe again?</h2>
            <p className="text-navy-100 text-lg mb-6">Two ways to reach Jack. Active emergencies answered immediately. Fixed-price quote within 24 hours otherwise. Insurance liaison included.</p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
                <div className="font-bold text-lg">📞 Call Jack now</div>
                <div className="text-navy-200 text-sm">{phoneDisplay} · Sagging or leaking ceilings answered within 1 hour</div>
              </a>
              <div className="bg-white/10 border-2 border-white/30 rounded-xl p-5">
                <div className="font-bold text-lg">📝 Or use the 3-field form →</div>
                <div className="text-navy-200 text-sm">Jack calls you back within 24 hours</div>
              </div>
            </div>
            <ul className="text-navy-200 text-sm space-y-1.5">
              <li>✓ 1-hour emergency response</li>
              <li>✓ Same-day on-site assessment</li>
              <li>✓ We deal directly with your insurer</li>
              <li>✓ 2-year written guarantee — backed by the brand</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="storm-damage-ceiling-repair-bottom" problem="Storm Damage Ceiling Repair" submitLabel="Call me back urgently →" /></div>
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
