import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Licensed Plasterer & Gyprocker Northern Beaches Sydney | Free Quote in 24 Hours',
  description:
    'Northern Beaches plastering and gyprocking — NSW Fair Trading licensed, 20+ years, free fixed quote in 24 hours. Dee Why, Manly, Brookvale, Collaroy. Call (02) 0000 0000.',
  alternates: { canonical: SITE.url },
};

// FAQs sourced from the engine brief — required for FAQPage schema + visible Q&A section.
const faqs = [
  {
    q: 'What licence does a plasterer need on the Northern Beaches NSW?',
    a: 'In NSW, any plastering or gyprocking contract worth more than $5,000 in labour and materials requires the contractor to hold a current NSW Fair Trading contractor licence under the Home Building Act 1989. Smaller jobs under $5,000 can be done by a tradesperson holding a Tradesperson Certificate.',
  },
  {
    q: "How do I check a plasterer's licence on the Northern Beaches?",
    a: 'Go to fairtrading.nsw.gov.au/check-a-licence and enter the contractor licence number. The result shows the licence status, the trades they\'re licensed for, and any conditions or suspensions. Takes about 60 seconds. Ask for the licence number before signing any quote.',
  },
  {
    q: 'What happens if I hire an unlicensed plasterer in NSW?',
    a: 'The contract is unenforceable, meaning you can void it and recover payments already made. You cannot claim against the Home Building Compensation Fund if the job goes wrong. The unlicensed tradesperson faces fines up to $22,000 (individuals) or $110,000 (corporations) under the Home Building Act 1989.',
  },
  {
    q: 'Do I need a licensed plasterer for small jobs under $5,000?',
    a: 'Legally, no — small jobs under the $5,000 threshold can be done by a tradesperson holding a Tradesperson Certificate rather than a full contractor licence. But check the certificate, ask for insurance, and confirm in writing. Quote-shopping for an unlicensed cheap fix can void Home Building Compensation Fund cover on related work.',
  },
  {
    q: 'What is the Home Building Compensation Fund (HBCF)?',
    a: 'A NSW statutory insurance scheme that protects homeowners when residential building work over $20,000 is defective or incomplete. Only licensed contractors who have HBCF certificates can take on work over $20,000. Unlicensed contracts are not eligible — that\'s the coverage gap to watch for.',
  },
  {
    q: 'Is an owner-builder allowed to do their own plastering in NSW?',
    a: 'Yes, if you hold an Owner-Builder Permit issued by NSW Fair Trading for work above $10,000. Owner-builders don\'t need a contractor licence to do their own work but cannot subcontract individual trades to unlicensed people. Most owner-builders still hire a licensed plasterer for finish quality reasons.',
  },
  {
    q: 'How fast can you get to a Northern Beaches job?',
    a: 'Free quote in 24 hours for any address from Manly through to Avalon. Site visit booked within 2–5 business days. Mid-sized jobs ($3,000–$10,000) typically start within 1–3 weeks of the signed quote depending on existing schedule. Urgent ceiling repairs and water-damage jobs prioritised same-week where possible.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE.url}/#service`,
      name: 'Plastering and Gyprocking Northern Beaches',
      provider: { '@id': `${SITE.url}/#business` },
      areaServed: SITE.primarySuburbs.map((s) => ({
        '@type': 'City',
        name: s,
        containedInPlace: { '@type': 'State', name: 'New South Wales' },
      })),
      serviceType: 'Plastering and gyprocking — residential and commercial, Northern Beaches Sydney',
      description:
        'NSW Fair Trading licensed plastering and gyprocking. Ceiling repair, cornice restoration, gyprock installation, skim coat. Specialising in $3,000–$10,000 mid-sized jobs across the Northern Beaches.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ─── ANNOUNCEMENT BAR ─── */}
      <div className="bg-accent text-ink text-sm font-bold tracking-wide text-center py-2 px-4">
        ✅ NSW Fair Trading Licensed · 20+ Years · Free Fixed Quote in 24 Hours · Call{' '}
        <a href={`tel:${SITE.phoneTel}`} className="underline">{SITE.phone}</a>
      </div>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <a href="#" className="font-display font-extrabold text-lg md:text-xl text-ink">
            Plastering Northern Beaches
          </a>
          <div className="flex items-center gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="hidden md:inline-flex text-brand font-bold text-base hover:text-brand-dark">
              📞 {SITE.phone}
            </a>
            <a href="#contact" className="btn-primary text-sm py-2 px-4">Get Free Quote</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* LEFT: copy */}
          <div>
            {/* Social proof badge above headline */}
            <div className="inline-flex items-center gap-2 border border-amber-200 bg-amber-50 px-3 py-1 rounded-full mb-5">
              <span className="text-amber-500 tracking-wide">★★★★★</span>
              <span className="text-sm font-bold text-ink">
                NSW Licensed · 20+ Years on the Tools
              </span>
            </div>

            {/* HEADLINE — End Result + Time + Emotional Payoff */}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Get a <span className="bg-accent px-2 rounded">Licensed Northern Beaches</span> Plasterer at Your Door in 24 Hours
            </h1>

            {/* SUB-HEAD — Pain callout + solution + USPs */}
            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              Stuck waiting on tradies who won&apos;t return your calls? We do plastering, gyprocking, ceiling repair and cornice work across <strong>Dee Why, Manly, Brookvale, Collaroy</strong> and the wider Northern Beaches. Free fixed quote in 24 hours. NSW Fair Trading licenced.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a href={`tel:${SITE.phoneTel}`} className="btn-phone text-base">
                📞 Call {SITE.phone}
              </a>
              <a href="#contact" className="btn-primary text-base">Get Free Quote</a>
            </div>

            {/* FUD reducers */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
              <span className="text-brand font-semibold text-sm">✓ NSW Fair Trading licensed</span>
              <span className="text-brand font-semibold text-sm">✓ Fully insured</span>
              <span className="text-brand font-semibold text-sm">✓ Free quote in 24 hr</span>
            </div>

            {/* Second social proof */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-100">
              <span className="text-sm text-slate-500">
                <strong className="text-ink">NSW Licence #{`{TBD}`}</strong> · verifiable at{' '}
                <a href="https://www.fairtrading.nsw.gov.au/about-fair-trading/online-services/check-a-licence-or-certificate" target="_blank" rel="noopener" className="text-brand underline">
                  NSW Fair Trading
                </a>
              </span>
            </div>
          </div>

          {/* RIGHT: hero image placeholder */}
          <div>
            <div className="bg-slate-200 rounded-2xl min-h-[420px] flex items-center justify-center p-8 text-center">
              <div>
                <div className="text-5xl mb-3">📷</div>
                <div className="text-slate-500 text-sm font-semibold mb-1">Hero Image</div>
                <div className="text-slate-400 text-xs">
                  Real partner work — recently finished Dee Why / Manly job with the tradie on site,
                  clean ladder + drop sheet, fresh ceiling or wall finish visible. <br />
                  Will be replaced with partner-supplied photo before launch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS (PAS sales letter format) ─── */}
      <section id="pain-points" className="bg-surface py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink text-center mb-3">
            Stuck in the Tradie Hunt?
          </h2>
          <p className="text-slate-600 text-center mb-10 text-base leading-relaxed">
            You&apos;re not alone. Northern Beaches homeowners deal with this every week.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
            <p className="font-bold text-ink mb-5">Does any of this sound like you right now?</p>

            <ul className="space-y-3 mb-6">
              {[
                'Three plasterers quoted last week. Two ghosted. One showed up two hours late.',
                'Got a suspiciously cheap quote — then realised they couldn\'t produce a NSW Fair Trading licence number.',
                'Original tradie pulled apart half your ceiling, took the deposit, and has gone dark.',
                'Worried about Home Building Compensation Fund cover if anything goes wrong on a $20k+ job.',
                'Renovation\'s on hold while you try to find someone licensed who actually answers the phone.',
              ].map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  <span className="text-slate-700 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-700 mb-6 leading-relaxed">
              You want the job done <strong>properly, on time, by someone you can ring back</strong>. But every day waiting is dust through the house, plastic over the lounge, and quotes blowing out.
            </p>

            {/* Agitate */}
            <div className="bg-accent-light border-l-4 border-accent p-5 rounded-r-lg mb-6">
              <p className="text-ink leading-relaxed font-medium">
                And the worst part? Every cheap unlicensed quote you accept <u>kills your HBCF cover</u> on related work. So if anything goes wrong later — water damage, structural issue, drainage problem — you&apos;ve voided your own protection on the whole renovation.
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed">
              <strong className="text-ink">There&apos;s a simpler way:</strong> ring a Northern Beaches plasterer who actually answers, holds a current NSW licence, and gives you a fixed quote in 24 hours. That&apos;s what we do — and we&apos;re very good at it after 20+ years on the tools.
            </p>

            <div className="text-center mt-8">
              <a href={`tel:${SITE.phoneTel}`} className="btn-phone text-lg">
                📞 Call {SITE.phone} now
              </a>
              <p className="text-xs text-slate-500 mt-2">Free quote · 24 hr response · No tyre-kickers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF #1 — TESTIMONIALS ─── */}
      <section id="social-proof-1" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink text-center mb-3">
            Helping Northern Beaches Homeowners Get Real Finishes — Not Excuses
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Recent jobs across Dee Why, Manly, Brookvale, Collaroy and Mona Vale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: 'Quoted Monday morning, started Wednesday, finished in two days. Clean job, no dust through the house, and the kitchen ceiling looks perfect.',
                headline: 'Quoted Monday, finished Friday.',
                name: 'TBD — first name + suburb',
                project: 'Kitchen ceiling repair, Dee Why',
              },
              {
                quote: 'Got three quotes for the hallway gyprock. Two were $400 cheaper but I couldn\'t verify the licence. This one was licensed, insured, and the finish is honestly better than the rest of the house.',
                headline: 'Better finish than the rest of the house.',
                name: 'TBD — first name + suburb',
                project: 'Hallway gyprock + skim, Manly',
              },
              {
                quote: 'Old cornices in our Edwardian terrace were a mess. They matched the profile exactly and you genuinely can\'t tell which sections are new and which are 100 years old.',
                headline: 'Can\'t tell which sections are 100 years old.',
                name: 'TBD — first name + suburb',
                project: 'Heritage cornice restoration, Balgowlah',
              },
            ].map((t, i) => (
              <div key={i} className="bg-surface border border-slate-200 rounded-2xl overflow-hidden">
                {/* Result photo placeholder */}
                <div className="bg-slate-200 min-h-[200px] flex items-center justify-center p-4 text-center">
                  <span className="text-slate-500 text-xs">
                    📷 Real partner job photo:
                    <br />
                    {t.project}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-amber-500 mb-2">★★★★★</div>
                  <p className="font-bold text-ink mb-2">&ldquo;{t.headline}&rdquo;</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                    <strong>{t.name}</strong> · Google Review · {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="btn-primary text-base">Get Your Free Quote</a>
            <p className="text-xs text-slate-500 mt-2">
              ⚠ Testimonials above are placeholders. Will be replaced with partner&apos;s real Google reviews + job photos before launch.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS #1 (Image-left/Text-right) — The Licensing Authority Hook ─── */}
      <section id="value-prop-1" className="bg-surface py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-slate-200 rounded-2xl min-h-[360px] flex items-center justify-center p-6 text-center order-2 md:order-1">
            <span className="text-slate-500 text-sm">
              📷 Photo of NSW Fair Trading licence card or the tradesman on the tools, well-lit, clean uniform
            </span>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-wide uppercase text-brand mb-2">Why It Matters</p>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ink mb-4 leading-tight">
              NSW Fair Trading Licensed — Verified Under the Home Building Act 1989
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In NSW, any plastering or gyprocking contract worth more than{' '}
              <strong className="text-ink">$5,000</strong> requires a current NSW Fair Trading contractor licence. Unlicensed contracts are <em>unenforceable</em> — you can&apos;t claim against the Home Building Compensation Fund, and the contractor faces fines up to <strong className="text-ink">$110,000</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              We hold a current licence and we make it easy to verify before you sign anything.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start"><span className="text-brand font-bold">✓</span><span className="text-slate-700 text-sm">Licence number on every quote, every invoice</span></li>
              <li className="flex gap-2 items-start"><span className="text-brand font-bold">✓</span><span className="text-slate-700 text-sm">Verifiable in 60 seconds at fairtrading.nsw.gov.au</span></li>
              <li className="flex gap-2 items-start"><span className="text-brand font-bold">✓</span><span className="text-slate-700 text-sm">HBCF certificate for jobs over $20,000</span></li>
              <li className="flex gap-2 items-start"><span className="text-brand font-bold">✓</span><span className="text-slate-700 text-sm">Public liability insurance included</span></li>
            </ul>
            <a href={`tel:${SITE.phoneTel}`} className="btn-phone text-base">📞 Verify before you book: {SITE.phone}</a>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS #2 — Services grid ─── */}
      <section id="value-prop-2" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-wide uppercase text-brand text-center mb-2">Our Specialty</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink text-center mb-3 leading-tight">
            Mid-Sized Plastering &amp; Gyprocking — $3,000 to $10,000 Jobs Done Properly
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            We focus on the work where quality matters — room replasters, ceiling repairs, gyprock installs, and cornice work — at a job size where your tradie shows up, finishes fast, and quotes fixed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏠', h: 'Room Plastering — Skim Coat & Set Finish', b: 'Full room replaster, prep, set finish ready for paint. Typical 3×4m room: 1–2 day turnaround.' },
              { icon: '🧱', h: 'Gyprock Installation — Walls & Ceilings', b: 'New plasterboard install for renovations, partition walls, new ceilings. CSR Gyprock and James Hardie boards.' },
              { icon: '🔧', h: 'Ceiling Repair — Sagging, Water Damage, Cracks', b: 'Repair-or-replace assessment. Quick fixes for fresh damage; full replacement when needed.' },
              { icon: '✨', h: 'Cornice Installation & Heritage Restoration', b: 'Profile-matched restoration for Federation, inter-war and 1940s–50s homes across Manly, Seaforth, Balgowlah, Curl Curl.' },
              { icon: '🌊', h: 'Moisture-Resistant Board for Coastal Homes', b: 'CSR Aquachek and Villaboard for bathrooms, laundries and any home within 800m of the Northern Beaches waterline.' },
              { icon: '🎨', h: 'Render & External Plastering', b: 'Brick render, cement render, exterior smooth finish. Both new builds and resurface work.' },
            ].map((card) => (
              <div key={card.h} className="bg-surface border border-slate-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-ink text-base mb-2 leading-snug">{card.h}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.b}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={`tel:${SITE.phoneTel}`} className="btn-phone text-base">📞 Discuss Your Job: {SITE.phone}</a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-3 text-xs">
              <span className="text-brand font-semibold">✓ Free fixed quote in 24 hr</span>
              <span className="text-brand font-semibold">✓ NSW Licensed</span>
              <span className="text-brand font-semibold">✓ Fully insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF #2 — Trust badges row ─── */}
      <section id="social-proof-2" className="bg-ink text-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: '20+', label: 'Years on the tools' },
            { stat: 'NSW', label: 'Fair Trading licensed' },
            { stat: '24 hr', label: 'Free quote response' },
            { stat: '$3K–$10K', label: 'Mid-sized job specialists' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-accent mb-1">{s.stat}</div>
              <div className="text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VALUE PROPS #3 — Local knowledge / coastal hook ─── */}
      <section id="value-prop-3" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-wide uppercase text-brand mb-2">Northern Beaches Specifics</p>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ink mb-4 leading-tight">
              Coastal Salt-Air Specs &amp; Heritage Cornice — Knowledge Only Locals Have
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Northern Beaches homes within <strong>800 metres of the waterline</strong> need moisture-resistant board (CSR Aquachek, Villaboard) in bathrooms, laundries, and any wall close to ocean spray exposure. Standard gyprock fails inside 5 years in those conditions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              And the Northern Beaches has more <strong>Federation-era and inter-war heritage homes</strong> than most parts of Sydney — Manly, Seaforth, Balgowlah, Curl Curl all have streets of original cornice that needs profile-matched lime-based restoration. Not the pre-cast cornice you grab off a Bunnings shelf.
            </p>
            <p className="text-slate-700 leading-relaxed font-semibold">
              We know the local material specs, the council-protected streets, and the suburbs with strata renovation paperwork. National chains don&apos;t.
            </p>
          </div>
          <div className="bg-slate-200 rounded-2xl min-h-[340px] flex items-center justify-center p-6 text-center">
            <span className="text-slate-500 text-sm">
              📷 Photo of heritage cornice work in progress, OR coastal home with new moisture-resistant board exposed framing visible
            </span>
          </div>
        </div>
      </section>

      {/* ─── PROCESS — 4-step "How It Works" ─── */}
      <section id="process" className="bg-surface py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink text-center mb-3">
            Four Steps. No Mucking Around.
          </h2>
          <p className="text-slate-600 text-center mb-10">From the first phone call to a finished job.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: '1', h: 'Call or Send a Photo', b: 'Phone or message what you need done. Photos help — even a quick snap of the room or ceiling.' },
              { n: '2', h: 'Free Quote in 24 Hours', b: 'We review and come back with a fixed quote and timeline. No surprises, no hourly clock-watching.' },
              { n: '3', h: 'Site Visit & Sign Off', b: 'For mid-sized jobs we do a site visit before locking the date. You see the licence card, sign the fixed quote.' },
              { n: '4', h: 'Job Done Clean', b: 'Drop sheets down, walls protected, dust contained. We leave the place broom-cleaner than we found it.' },
            ].map((step) => (
              <div key={step.n} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  {step.n}
                </div>
                <h3 className="font-bold text-ink mb-2">{step.h}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink text-center mb-3">
            Northern Beaches Plastering FAQ
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Real questions. Real answers. NSW licensing facts you can verify.
          </p>

          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-surface border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-ink mb-2 text-base">{f.q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="contact" className="bg-brand text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4 leading-tight">
            Free Fixed Quote in 24 Hours — Across the Northern Beaches.
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Stop chasing tradies. Ring a licensed Northern Beaches plasterer who answers, quotes, and shows up.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-500 text-ink font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors mb-4">
            📞 Call {SITE.phone}
          </a>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-blue-100">
            <span>✓ NSW Licensed</span>
            <span>✓ Fully insured</span>
            <span>✓ Free quote in 24 hr</span>
            <span>✓ $3K–$10K specialist</span>
          </div>
          <p className="text-xs text-blue-200 mt-6">
            Servicing {SITE.primarySuburbs.slice(0, 8).join(' · ')} and the wider Northern Beaches.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-ink text-slate-300 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display font-bold text-lg text-white mb-2">{SITE.name}</p>
          <p className="text-sm text-slate-400 mb-2">
            NSW Fair Trading Licensed Plasterer &amp; Gyprocker · Northern Beaches Sydney · ABN: {`{TBD}`}
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{' '}
            <a href={`tel:${SITE.phoneTel}`} className="text-slate-400 hover:text-white">{SITE.phone}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
