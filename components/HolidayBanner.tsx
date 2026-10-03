'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/data/site';

// NSW Labour Day long weekend 2026: Sat 2026-10-03 → Mon 2026-10-05.
// Auto-hide at midnight on Oct 6 Sydney time (AEDT = UTC+11 after DST starts
// on 2026-10-04). 13:00 UTC on 2026-10-05 == 00:00 2026-10-06 Sydney.
const END_UTC_MS = Date.UTC(2026, 9, 5, 13, 0, 0);

export default function HolidayBanner() {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (Date.now() > END_UTC_MS) setExpired(true);
  }, []);
  if (expired) return null;

  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="block w-full bg-red-600 text-white font-bold text-center px-4 py-3 hover:bg-red-700 transition-colors"
      aria-label="Open all October 2026 long weekend — call Jack for a quote today"
    >
      <span className="text-sm sm:text-base md:text-lg tracking-wide">
        OPEN ALL OCTOBER 2026 LONG WEEKEND — CALL JACK FOR A QUOTE TODAY :)
      </span>
    </a>
  );
}
