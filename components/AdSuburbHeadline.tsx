'use client';
// Home page H1 for Google Ads visitors only.
// The ads carry final URL suffix loc={loc_physical_ms}. When that ID is a known suburb, postcode or
// council in lib/lp-geo.json, the H1 says "Plasterer in <place>" to match the ad.
// No loc, or an unknown one (every organic visitor and Googlebot): the original H1 renders unchanged,
// and it is also what the server sends, so the indexed page never changes.
import { useEffect, useState, type ReactNode } from 'react';
import geo from '@/lib/lp-geo.json';

const MAP = geo as Record<string, string>;

export default function AdSuburbHeadline({ className, children }: { className: string; children: ReactNode }) {
  const [place, setPlace] = useState<string | null>(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('loc');
    if (id && MAP[id]) setPlace(MAP[id]);
  }, []);

  if (!place) return <h1 className={className}>{children}</h1>;
  return (
    <h1 className={className}>
      Plasterer in {place}
      <span className="text-brand-400 block mt-2">Small jobs welcome</span>
    </h1>
  );
}
