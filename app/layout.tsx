import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { SITE } from '@/data/site';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Plastering & Gyprocking Northern Beaches Sydney`,
    template: '%s',
  },
  description:
    'Northern Beaches plastering and gyprocking specialists — ceiling repair, cornice restoration, gyprock installation. NSW Fair Trading licensed. Free quotes Dee Why & Sydney-wide.',
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    locale: 'en_AU',
    type: 'website',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      description: 'Plastering and gyprocking services for residential and commercial properties across Sydney Northern Beaches.',
      url: SITE.url,
      telephone: `+61${SITE.phoneTel.replace(/^0/, '')}`,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.suburb,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.postcode,
        addressCountry: SITE.address.country,
      },
      areaServed: SITE.primarySuburbs.map((s) => ({
        '@type': 'City',
        name: s,
        containedInPlace: { '@type': 'State', name: 'New South Wales' },
      })),
      knowsAbout: [
        'Plastering',
        'Gyprock installation',
        'Plasterboard',
        'Ceiling repair',
        'Cornice restoration',
        'Skim coat',
        'Set finish',
        'Rendering',
        'Heritage cornice',
      ],
      priceRange: '$$',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${display.variable}`}>
      <head>
        <meta name="color-scheme" content="only light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
