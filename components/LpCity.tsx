'use client';
// Swaps the searcher's suburb into an Ads landing page headline.
// The ads carry final URL suffix loc={loc_physical_ms}: a Google geo ID, never a name.
// lib/lp-geo.json maps the IDs for the service area. Unknown ID = the fallback.
import { useEffect, useState } from 'react';
import geo from '@/lib/lp-geo.json';

const MAP = geo as Record<string, string>;

export default function LpCity({ fallback }: { fallback: string }) {
  const [city, setCity] = useState(fallback);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('loc');
    if (id && MAP[id]) setCity(MAP[id]);
  }, []);
  return <>{city}</>;
}
