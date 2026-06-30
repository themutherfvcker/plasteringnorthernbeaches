import Link from 'next/link';

// Order matches the homepage services grid for consistency.
const ALL_SERVICES = [
  { slug: 'ceiling-repair-sydney',          title: 'Ceiling Repair Sydney',          blurb: 'Cracked, sagging or water-stained ceilings, repaired in one visit.' },
  { slug: 'water-damage-ceiling-repair',    title: 'Water Damage Ceiling Repair',    blurb: 'Brown stains, sagging plaster, insurance liaison included.' },
  { slug: 'plaster-hole-patch',             title: 'Plaster Hole Patch',             blurb: 'TV bracket holes, doorknob dents, DIY rescues from $290 fixed.' },
  { slug: 'cornice-repair-sydney',          title: 'Cornice Repair Sydney',          blurb: 'Modern and heritage Federation cornice repair and replacement.' },
  { slug: 'end-of-lease-plaster-repair',    title: 'End of Lease Plaster Repair',    blurb: 'Multi-hole bundle pricing. Paint-ready same day. GST invoice.' },
  { slug: 'storm-damage-ceiling-repair',    title: 'Storm Damage Ceiling Repair',    blurb: '1-hour emergency response across Sydney. Insurance handled.' },
];

type Props = {
  /** Slug of the current service page — that service is filtered out of the list. */
  currentSlug: string;
};

export default function RelatedServices({ currentSlug }: Props) {
  const others = ALL_SERVICES.filter((s) => s.slug !== currentSlug);
  return (
    <section className="bg-navy-50 px-4 py-16 md:py-20 border-t border-navy-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 text-center">
          Other Plastering Services in Sydney
        </h2>
        <p className="text-navy-600 text-center text-lg mb-10">
          Whatever your plastering job — patch, ceiling, cornice or full home — Jack covers it across the Northern Beaches and Sydney-wide.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block bg-white border-2 border-navy-100 rounded-xl p-5 md:p-6 hover:border-brand-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-bold text-navy-900 text-lg mb-2">{s.title} →</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{s.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/plasterer-northern-beaches"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold text-base transition-colors border-b-2 border-brand-200 hover:border-brand-500 pb-1"
          >
            See all plastering services on the Northern Beaches →
          </Link>
        </div>
      </div>
    </section>
  );
}
