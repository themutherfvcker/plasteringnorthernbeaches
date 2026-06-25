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
        url: '/jack.png',
        width: 1280,
        height: 1280,
        alt: `Jack — NSW Fair Trading licensed plasterer at ${SITE.name}, Northern Beaches and Sydney-wide`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jack.png'],
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
