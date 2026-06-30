import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/data/site';

const GA_ID = 'G-8JJN2PZFY8';

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
    images: [
      {
        url: '/jack-og.jpg',
        width: 1284,
        height: 1225,
        alt: `Jack — NSW Fair Trading licensed plasterer at ${SITE.name}, Northern Beaches and Sydney-wide`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jack-og.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // HomeAndConstructionBusiness is a subclass of LocalBusiness, more specific
      // for trade businesses → stronger entity signal for Google + AI engines.
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      legalName: SITE.legalName,
      description: 'Plastering and gyprocking services for residential and commercial properties across Sydney Northern Beaches.',
      url: SITE.url,
      telephone: SITE.phoneTel,
      email: SITE.email,
      image: `${SITE.url}/logo.png`,
      logo: `${SITE.url}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.suburb,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.postcode,
        addressCountry: SITE.address.country,
      },
      // Dee Why suburb centroid — gives Google a geo-location signal without
      // pinpointing Jack's home unit. Stays accurate after the street-address
      // hide flips per task #22.
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.7510,
        longitude: 151.2890,
      },
      areaServed: SITE.primarySuburbs.map((s) => ({
        '@type': 'City',
        name: s,
        containedInPlace: { '@type': 'State', name: 'New South Wales' },
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
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
      // TODO populate sameAs once social profiles + GBP listing are live
      sameAs: [],
      founder: { '@id': `${SITE.url}/#jack` },
      employee: { '@id': `${SITE.url}/#jack` },
    },
    {
      // Person schema for Jack — entity-graph + E-E-A-T signal. AI engines
      // (ChatGPT in particular) weight authored / human-attributed content
      // higher than anonymous corporate copy.
      '@type': 'Person',
      '@id': `${SITE.url}/#jack`,
      name: 'Jack',
      jobTitle: 'Licensed Plasterer',
      description: 'NSW Fair Trading licensed plasterer with 15+ years of experience, operating across the Northern Beaches and Sydney-wide.',
      image: `${SITE.url}/jack.webp`,
      worksFor: { '@id': `${SITE.url}/#business` },
      knowsAbout: [
        'Plastering',
        'Gyprock installation',
        'Ceiling repair',
        'Water damage ceiling repair',
        'Cornice repair and restoration',
        'Heritage cornice',
        'Skim coating',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Plasterer',
        occupationLocation: {
          '@type': 'City',
          name: 'Dee Why',
          containedInPlace: { '@type': 'State', name: 'New South Wales' },
        },
      },
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        {/* GA4 conversion event tracking: phone clicks + form submits */}
        <Script id="ga4-conversions" strategy="afterInteractive">{`
          (function () {
            function fire(name, params) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', name, params || {});
              }
            }
            document.addEventListener('click', function (e) {
              var t = e.target;
              while (t && t !== document.body) {
                if (t.tagName === 'A' && t.href && t.href.indexOf('tel:') === 0) {
                  fire('phone_call_click', {
                    phone_number: t.href.replace('tel:', ''),
                    page_path: window.location.pathname,
                    link_text: (t.textContent || '').trim().slice(0, 100),
                  });
                  break;
                }
                t = t.parentElement;
              }
            }, true);
            document.addEventListener('submit', function (e) {
              var form = e.target;
              if (form && form.tagName === 'FORM') {
                fire('lead_form_submit', {
                  page_path: window.location.pathname,
                  form_id: form.id || form.getAttribute('name') || 'unnamed',
                });
              }
            }, true);
          })();
        `}</Script>
        <main>{children}</main>
      </body>
    </html>
  );
}
