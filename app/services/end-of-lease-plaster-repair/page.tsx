import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: 'End of Lease Plaster Repair Sydney — Fixed Price From $290 | Plastering Northern Beaches',
  description:
    'Tenant moving out? Multiple wall holes before the inspection? Get a fixed-price end-of-lease plaster repair quote within 24 hours. All repairs done in one visit, paint-ready same day. GST invoice for property manager. Call Jack now.',
  alternates: { canonical: `${SITE.url}/services/end-of-lease-plaster-repair` },
  openGraph: {
    title: 'End of Lease Plaster Repair Sydney — Fixed Price From $290',
    description: 'Multiple wall holes before inspection? Fixed price, paint-ready same day, GST invoice for property manager. Bond-ready in one visit.',
    url: `${SITE.url}/services/end-of-lease-plaster-repair`,
  },
};

const phoneTel = SITE.phoneTel;
const phoneDisplay = SITE.phone;

const faqs = [
  { q: 'How much does end-of-lease plaster repair cost?', a: 'First patch starts at $290 fixed. Each additional hole in the same visit is $180. Typical 5-hole apartment job is $1,010 fixed. Larger jobs (8+ holes across multiple rooms) are $1,400–$2,200. Every quote is fixed-price and written before we start.' },
  { q: 'How fast can you turn it around?', a: 'For tenant-out-by-Friday jobs we target same-day or next-day quote, and most jobs completed in one visit. If your inspection is in less than 48 hours, mention it on the call — we&apos;ll prioritise.' },
  { q: 'Will my property manager accept the invoice for the bond?', a: 'Yes — every job comes with a GST invoice in PDF format, suitable for property managers, real-estate agencies, and bond claims. We can address the invoice to you, the tenant, or directly to the property manager — your call.' },
  { q: 'Do you do property-manager standing rates?', a: 'Yes — if you&apos;re a property manager handling multiple end-of-lease repairs each month, we set a standing-rate agreement so the per-job pricing drops and we book inspections for you in batches.' },
  { q: 'Will the patches be invisible to the inspector?', a: 'Yes — patches are skimmed, sanded, feathered and left paint-ready. Once painted to match your existing wall, the inspector won&apos;t find them. (Tell us at the quote stage if the wall colour is unusual — we&apos;ll factor it in.)' },
  { q: 'What if the repair fails or cracks?', a: 'Our 2-year written workmanship guarantee covers any cracking or finish failure caused by our work. Jack comes back and fixes it free.' },
  { q: 'Are you NSW Fair Trading licensed?', a: 'Yes — Jack is a NSW Fair Trading licensed plasterer. Licence number provided in writing with every quote, verifiable at service.nsw.gov.au.' },
  { q: 'Tenant has moved out — do I need to be there for the quote?', a: 'No — you can give us access via the property manager or leave keys at reception. Send photos at the booking stage and we&apos;ll quote within 24 hours.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE.url}/services/end-of-lease-plaster-repair#service`,
  name: 'End of Lease Plaster Repair Sydney', serviceType: 'End of Lease Plaster Repair',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: SITE.primarySuburbs.map((s) => ({ '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: 'New South Wales' } })),
  description: 'Fast end-of-lease plaster and gyprock hole repair across Sydney Northern Beaches. Multi-hole bundle pricing, GST invoice for property managers, paint-ready same day. Backed by our 2-year written workmanship guarantee.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'AUD', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', minPrice: 290, maxPrice: 2500 }, url: `${SITE.url}/services/end-of-lease-plaster-repair` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'End of Lease Plaster Repair', item: `${SITE.url}/services/end-of-lease-plaster-repair` },
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
              Tenant Moving Out? Wall Holes Before Inspection?
              <span className="block mt-3 text-brand-400">One less thing to worry about.</span>
            </h1>
            <ul className="space-y-3 text-lg md:text-xl text-navy-100 mb-8">
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">From $290 fixed price</strong> — bundle pricing on multiple holes.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">All repairs done in one visit — paint-ready same day</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">GST invoice</strong> for your property manager or bond claim.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span>Backed by our <strong className="text-white">2-year written workmanship guarantee</strong>.</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-400 mt-0.5">✓</span><span><strong className="text-white">Inspection-Friday job?</strong> Mention it on the call — we&apos;ll prioritise.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-xl shadow-brand-500/30 hover:scale-[1.02] transition-transform">
                📞 Call Jack — {phoneDisplay}
              </a>
            </div>
            <p className="text-navy-200 text-sm mt-4">Or use the 3-field form → Quote at your door within 24 hours.</p>
          </div>
          <div className="md:sticky md:top-6"><LeanQuoteForm source="end-of-lease-plaster-repair" problem="End of Lease Plaster Repair" /></div>
        </div>
      </section>

      <section className="bg-navy-50 border-y border-navy-100 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-navy-800">
          {['From $290 fixed price', 'Paint-ready same day', 'GST invoice for PM', 'Bundle pricing', '2-year written guarantee', 'NSW Fair Trading licensed'].map((t) => (
            <div key={t} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span className="font-medium leading-tight">{t}</span></div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Sound familiar?</h2>
          <p className="text-navy-600 text-center text-lg mb-10 max-w-2xl mx-auto">If any of this is you, you&apos;re not alone. Here&apos;s what we hear every week from Northern Beaches landlords and property managers:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Six TV-bracket holes the tenant left behind. Inspection&apos;s on Friday. Bond&apos;s on the line.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Tenant aftermath</p></blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;New tenant moving in Monday. Old tenant left wall damage across three rooms. I need this done over the weekend.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Turnover panic</p></blockquote>
            <blockquote className="bg-navy-50 border-l-4 border-brand-500 rounded-r-xl p-6"><p className="text-navy-800 italic leading-relaxed mb-3">&ldquo;Eight properties to turn over this quarter. Need a plasterer who can batch them and invoice properly.&rdquo;</p><p className="text-navy-500 text-sm font-semibold">— Property manager scale</p></blockquote>
          </div>
          <div className="text-center mt-10"><p className="text-navy-800 text-lg md:text-xl font-semibold max-w-2xl mx-auto">We hear you. Here&apos;s exactly how it works — fixed price, paint-ready same day, GST invoice in your inbox before we&apos;ve left the property.</p></div>
        </div>
      </section>

      <section className="bg-navy-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 font-bold text-sm uppercase tracking-wider mb-4">The after state</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Picture your property, ready for inspection.</h2>
          <div className="text-navy-100 text-lg md:text-xl leading-relaxed space-y-3 mb-8">
            <p>The TV bracket holes — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The doorknob dents — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p>The bond risk — <span className="text-brand-400 font-semibold">gone</span>.</p>
            <p className="font-extrabold text-white text-xl md:text-2xl pt-3 leading-snug">Inspection-ready walls. GST invoice in your inbox. Bond protected.</p>
          </div>
          <p className="text-navy-300 text-base max-w-xl mx-auto">From $290. Paint-ready same day. 2-year written guarantee.</p>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">How it works</h2>
          <p className="text-navy-600 text-center text-lg mb-12">Three steps. Inspection-ready by the time we leave.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Call Jack — or fill in the 3-field form', body: 'Tell us how many holes, which rooms, and your inspection date. Jack rings back within 24 hours with an estimate so you can plan around it.' },
              { n: '2', title: 'Fixed-price quote at your door within 24 hours', body: 'Jack inspects the damage, counts the holes, and writes a fixed-price quote on the spot. Bundle pricing applied across all rooms.' },
              { n: '3', title: 'Patched, paint-ready, invoiced — same day', body: 'Most end-of-lease jobs done in one visit. GST invoice emailed before we leave. Forward to your property manager and you&apos;re done.' },
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
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">Recent end-of-lease jobs</h2>
          <p className="text-navy-600 text-center text-lg mb-10">A few of Jack&apos;s recent end-of-lease and tenant-turnover jobs across the Northern Beaches.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { suburb: 'Brookvale', job: '5 TV bracket holes, 2-bed apartment', time: 'Quote Wed, fixed Fri before inspection. $1,010' },
              { suburb: 'Dee Why', job: '8 holes across 3 rooms, turnover', time: 'One-day job, paint-ready, $1,560' },
              { suburb: 'Manly', job: 'Doorknob + skim, single room', time: 'Two hours, paint-ready, $390' },
            ].map((j) => (
              <figure key={j.suburb} className="bg-navy-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center"><span className="text-navy-600 font-semibold text-sm">[ {j.suburb} before/after photo ]</span></div>
                <figcaption className="p-5"><div className="font-bold text-navy-900 mb-1">{j.suburb}</div><div className="text-navy-700 text-sm mb-2">{j.job}</div><div className="text-navy-500 text-xs font-semibold">{j.time}</div></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-hero-gradient text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Inspection Friday? Don&apos;t wait until Thursday.</h2>
          <p className="text-navy-200 mb-6">Fixed-price quote in 24 hours. Paint-ready same day. GST invoice for your property manager.</p>
          <div className="flex justify-center"><a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-500/30">📞 Call Jack — {phoneDisplay}</a></div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">What Northern Beaches landlords say</h2>
          <p className="text-navy-600 text-center text-lg mb-10">Real reviews from real Jack jobs. (Replace placeholders pre-launch with verified Google reviews.)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: 'Tenant trashed five walls. Inspection on Friday. Jack came Thursday, fixed everything, GST invoice in my inbox before he&apos;d driven off the property. Inspection passed clean.', name: 'Sarah M.', suburb: 'Brookvale' },
              { stars: 5, quote: 'Property manager — I batch all my end-of-lease plaster jobs to Jack now. Standing rate, quick turnaround, no chasing.', name: 'David K.', suburb: 'Manly' },
              { stars: 5, quote: 'New tenant moving in Monday. Jack came Saturday, fixed three rooms, paint-ready by lunchtime. Saved the booking.', name: 'Priya R.', suburb: 'Dee Why' },
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
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Inspection-ready — for 2 full years.</h2>
          <p className="text-navy-100 text-lg leading-relaxed mb-6">Every patch we do is backed in writing for 2 full years. If the work cracks, lifts or fails — Jack comes back and fixes it free. No paperwork hassle. No excuses. Backed by Plastering Northern Beaches.</p>
          <p className="text-navy-300 text-sm">Guarantee terms supplied with your written quote.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">End-of-lease plaster repair — your questions</h2>
          <p className="text-navy-600 text-center text-lg mb-10">The questions we get most often from landlords and property managers.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to make end-of-lease one less thing to worry about?</h2>
            <p className="text-navy-100 text-lg mb-6">Two ways to reach Jack. Fixed-price quote at your door within 24 hours. GST invoice straight to your property manager.</p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${phoneTel}`} className="block bg-white/10 border-2 border-white/30 hover:bg-white/15 rounded-xl p-5 transition-colors">
                <div className="font-bold text-lg">📞 Call Jack now</div>
                <div className="text-navy-200 text-sm">{phoneDisplay} · Inspection-Friday jobs prioritised</div>
              </a>
              <div className="bg-white/10 border-2 border-white/30 rounded-xl p-5">
                <div className="font-bold text-lg">📝 Or use the 3-field form →</div>
                <div className="text-navy-200 text-sm">Jack calls you back within 24 hours</div>
              </div>
            </div>
            <ul className="text-navy-200 text-sm space-y-1.5">
              <li>✓ From $290 fixed price — bundle discount on every additional hole</li>
              <li>✓ Paint-ready same day</li>
              <li>✓ GST invoice for your property manager</li>
              <li>✓ NSW Fair Trading licensed plasterer</li>
            </ul>
          </div>
          <div><LeanQuoteForm source="end-of-lease-plaster-repair-bottom" problem="End of Lease Plaster Repair" /></div>
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
