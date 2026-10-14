import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE } from '@/data/site';
import LeanQuoteForm from '@/components/LeanQuoteForm';
import StickyCallCTA from '@/components/StickyCallCTA';
import LpCity from '@/components/LpCity';

// Google Ads landing page for Ad group 1 (plasterer searches). Not for organic search:
// noindex, no nav, no footer links - every link on an ad page is an exit.
// Every claim here is in the Google Ads agent's context/proof.md (owner, 15 Oct 2026).
export const metadata: Metadata = {
  title: "Plasterer Northern Beaches | Free Quote | Jack's Plastering",
  description:
    'Plasterer for holes, cracks, sagging ceilings and cornices on the Northern Beaches and North Shore. 20+ years, 4.9 stars from 35 reviews. Free quotes.',
  robots: { index: false, follow: false },
};

const FALLBACK_CITY = 'Northern Beaches';

const fixes = [
  { icon: '🔨', title: 'Holes and dents', body: 'Door handle holes, TV bracket damage, knocks and dents patched and ready to paint.' },
  { icon: '🏠', title: 'Cracked or sagging ceilings', body: 'Cracks, sags and stained ceilings repaired so you can stop looking up at them.' },
  { icon: '✨', title: 'Cornices', body: 'Cracked, sagging or missing cornice repaired or replaced.' },
  { icon: '🎨', title: 'Walls and new plaster', body: 'Cracked walls fixed, or new plaster and gyprock for a room or a renovation.' },
];

const work = [
  { image: 'ceiling-repair-in-progress-northern-beaches.webp', alt: 'Ceiling repair in progress on the Northern Beaches, section cut out for new plasterboard', suburb: 'Dee Why', job: 'Water-damage ceiling rebuild' },
  { image: 'kitchen-ceiling-plastering-northern-beaches.webp', alt: 'Kitchen ceiling plastering with recessed downlights, Northern Beaches home', suburb: 'Brookvale', job: 'Kitchen ceiling + downlights' },
  { image: 'full-home-plastering-northern-beaches.webp', alt: 'Full home plastering finish in a high-ceiling hallway, Northern Beaches', suburb: 'Mona Vale', job: 'Full home plastering, paint-ready' },
];

const steps = [
  { n: 1, title: 'Send the form or call', body: 'Tell us what needs fixing. Calls are answered 7 days a week.' },
  { n: 2, title: 'Get your free quote', body: 'Jack calls you back, talks the job through and prices it.' },
  { n: 3, title: 'Get it fixed', body: 'One hole or a whole room, the job gets booked in and done.' },
];

const faqs = [
  { q: 'What does it cost?', a: "Every job is different, so your quote is free. Send the form or call, and Jack prices your job." },
  { q: 'Do you take small jobs?', a: "Yes. Whether you've got a single hole or a whole room, you won't be turned away." },
  { q: 'Which areas do you cover?', a: "The Northern Beaches and the North Shore. Not sure if you're in the area? Call and ask." },
];

export default function PlastererAdsLandingPage() {
  return (
    <>
      {/* Brand and phone only. No nav: this page has one job. */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="Jack's Plastering logo" width={40} height={40} className="rounded-lg" />
            <span className="text-white font-extrabold text-base sm:text-lg">Jack&apos;s Plastering</span>
          </div>
          <a href={`tel:${SITE.phoneTel}`} className="text-white font-bold text-sm sm:text-base bg-white/10 border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-colors">
            📞 {SITE.phone}
          </a>
        </div>
      </div>

      {/* Hero: the ad's promise, the proof, the form. */}
      <section className="v2-hero-gradient relative overflow-hidden">
        <Image
          src="/jack.webp"
          alt="Jack, plasterer on the Northern Beaches"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-300 text-lg">★★★★★</span>
                <span className="text-white/80 text-sm font-medium">4.9 stars from 35 reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Plasterer in <LpCity fallback={FALLBACK_CITY} />
                <span className="text-brand-400 block mt-2">Small jobs welcome</span>
              </h1>

              <p className="text-lg sm:text-xl text-navy-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Got a hole, a crack or a sagging ceiling? You get a local plasterer with{' '}
                <strong className="text-brand-300">20+ years on the tools</strong>, and your quote is free.
              </p>

              <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
                {['Free quotes', 'NSW licence 373941C', 'Calls answered 7 days'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/90 text-base">
                    <span className="text-brand-400 font-extrabold text-lg leading-tight">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#quote" className="v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-150 shadow-2xl shadow-brand-500/30 text-center lg:hidden">
                  Get My Free Quote →
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-150 text-center flex items-center justify-center gap-2">
                  📞 {SITE.phone}
                </a>
              </div>
            </div>

            <div className="relative" id="quote">
              <LeanQuoteForm source="ads-lp-plasterer" problem="Plastering" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Proof in numbers. */}
      <section className="bg-white py-8 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { big: '4.9★', small: 'From 35 reviews' },
              { big: '20+', small: 'Years on the tools' },
              { big: 'Free', small: 'Quotes' },
              { big: '7 days', small: 'Calls answered' },
            ].map((s) => (
              <div key={s.small}>
                <div className="v2-number-highlight text-4xl md:text-5xl font-black">{s.big}</div>
                <div className="text-navy-600 font-medium text-sm mt-1">{s.small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets fixed, in the searcher's words. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">What Jack fixes</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
              No plastering job<br/><span className="text-brand-600">is too small</span>
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">One hole is worth a call. So is a whole room.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fixes.map((f) => (
              <div key={f.title} className="bg-navy-50 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-lg text-navy-900 mb-2">{f.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real jobs, same photos as the home page. */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Recent work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900">Jobs near you</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {work.map((j) => (
              <figure key={j.image} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image src={`/gallery/${j.image}`} alt={j.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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

      {/* How it works. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">How it works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900">3 simple steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-brand-200"></div>
            {steps.map((s) => (
              <div key={s.n} className="text-center relative">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-brand-500/30">
                  <span className="text-navy-900 font-black text-2xl">{s.n}</span>
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions, answered straight. */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-8 text-center">Before you get in touch</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-navy-900 mb-2">{f.q}</h3>
                <p className="text-navy-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final ask. */}
      <section className="py-16 md:py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Get your free quote</h2>
          <p className="text-navy-200 text-lg mb-8">Tell us what needs fixing, or call any day of the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="v2-cta-gradient text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-150 text-center">Get My Free Quote →</a>
            <a href={`tel:${SITE.phoneTel}`} className="bg-white/10 border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-150 text-center">📞 {SITE.phone}</a>
          </div>
          <p className="text-navy-400 text-sm mt-10">Jack&apos;s Plastering · NSW licence 373941C · {SITE.phone}</p>
        </div>
      </section>

      <StickyCallCTA />
    </>
  );
}
