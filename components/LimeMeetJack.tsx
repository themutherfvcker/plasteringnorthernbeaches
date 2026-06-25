import Image from 'next/image';
import { SITE } from '@/data/site';

// Lime-palette version of MeetJack. Same content + structure as MeetJack
// but recoloured to the lime/slate/white system for the /test/lime page.

export default function LimeMeetJack() {
  return (
    <section className="bg-white px-4 py-16 md:py-20 border-y border-slate-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <Image
              src="/jack.webp"
              alt="Jack — NSW Fair Trading licensed plasterer servicing the Northern Beaches and Sydney"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-lime-500 text-slate-900 font-extrabold rounded-2xl px-5 py-3 shadow-xl rotate-2">
            <div className="text-xs uppercase tracking-wider opacity-80">Northern Beaches local</div>
            <div className="text-lg leading-tight">Jack — your plasterer</div>
          </div>
        </div>

        <div>
          <p className="text-lime-600 font-bold text-sm uppercase tracking-wider mb-3">
            Meet Jack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
            The plasterer who actually shows up.
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            G&apos;day — I&apos;m Jack. I run {SITE.name}. I&apos;m a NSW Fair Trading licensed
            plasterer based on the Northern Beaches, serving homeowners and landlords
            Sydney-wide. Fixed-price quotes, no hidden extras, most jobs finished in
            one visit, and every job comes with a 2-year written guarantee. If
            something&apos;s not right, I come back and fix it.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-slate-800">
              <span className="text-lime-600 font-bold mt-0.5 text-lg">✓</span>
              <span className="font-semibold">NSW Fair Trading licensed plasterer</span>
            </li>
            <li className="flex items-start gap-3 text-slate-800">
              <span className="text-lime-600 font-bold mt-0.5 text-lg">✓</span>
              <span className="font-semibold">Northern Beaches local · Sydney-wide service</span>
            </li>
            <li className="flex items-start gap-3 text-slate-800">
              <span className="text-lime-600 font-bold mt-0.5 text-lg">✓</span>
              <span className="font-semibold">2-year written guarantee on every job</span>
            </li>
            <li className="flex items-start gap-3 text-slate-800">
              <span className="text-lime-600 font-bold mt-0.5 text-lg">✓</span>
              <span className="font-semibold">Fixed-price quote at your door within 24 hours</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
