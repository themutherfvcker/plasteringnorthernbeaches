// Single source of truth for site-wide brand + contact details.
// Match these to the GBP listing exactly — NAP consistency is a ranking signal.
//
// TODO before launch:
// - Replace phone number with the gyprocker partner's actual number (NOT a tracking
//   number — must match GBP for signal alignment).
// - Replace ABN + license placeholders with real values from partner.
// - Replace address with the partner's real business address (required for GBP verification).
// - Replace email with operating email.

export const SITE = {
  name: "Jack's Plastering Northern Beaches",
  legalName: "Jack's Plastering Northern Beaches",
  // Tagline shown beneath the brand mark in headers — signals the broader
  // service area while keeping the brand name short and memorable.
  tagline: 'Sydney-Wide Service',
  phone: '(02) 5500 1608',       // Dedicated AI-answering number — every call captured 24/7. Must stay NAP-consistent with GBP + directory listings.
  phoneTel: '+61255001608',      // International format for tel: links
  email: 'info@plasteringnorthernbeaches.com.au',
  url: 'https://www.plasteringnorthernbeaches.com.au',
  domain: 'plasteringnorthernbeaches.com.au',

  // Business details — NAP must match GBP exactly
  address: {
    street: 'Unit 14, 39-41 Pacific Parade',
    suburb: 'Dee Why',
    state: 'NSW',
    postcode: '2099',
    country: 'AU',
  },
  abn: 'TBD',                    // 11-digit AU Business Number
  license: 'NSW Fair Trading License TBD',

  // Service hours — match GBP
  hours: {
    weekdays: '7am–5pm',
    saturday: '8am–2pm',
    sunday: 'Closed (emergencies by phone)',
  },

  // Last-updated stamps — referenced in JSON-LD schema + visible "Last updated"
  // line on key pages. Bump dateModified whenever site content meaningfully
  // changes so Perplexity / Bing Copilot / AI Overviews see fresh-content
  // signals.
  datePublished: '2026-06-15',
  dateModified: '2026-06-30',

  // Service area
  primarySuburbs: [
    'Dee Why', 'Manly', 'Brookvale', 'Collaroy', 'Narrabeen',
    'Mona Vale', 'Avalon', 'Newport', 'Cromer', 'Belrose',
    'Frenchs Forest', 'Allambie Heights', 'Forestville', 'Beacon Hill',
  ],
  secondarySuburbs: [
    'Pittwater', 'Palm Beach', 'Whale Beach', 'Bayview',
    'Church Point', 'Newport', 'Bilgola', 'Clareville',
  ],
} as const;
