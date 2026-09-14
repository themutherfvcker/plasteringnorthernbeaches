/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Block embedding in iframes from third-party domains (clickjacking)
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            // Stop browsers MIME-sniffing past our declared content-type
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Only send the origin in the Referer header on cross-origin
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // Lock down browser feature access to what the site actually uses
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            // Conservative CSP — allow self + Google Tag Manager + GA4 + Google
            // Ads conversion domains + inline scripts (Next.js needs unsafe-inline
            // for hydration).
            //
            // 2026-07-09: expanded connect-src + img-src + script-src to include
            // Google Ads conversion domains after Google Ads dashboard flagged
            // conversions as "Unverified" — prior CSP whitelisted GA4 collect
            // endpoints but blocked google.com/pagead/* and *.g.doubleclick.net
            // conversion beacons, dropping every attributed conversion silently.
            // 2026-09-13: added *.doubleclick.net (in addition to *.g.doubleclick.net)
            // after gtag started calling ad.doubleclick.net/ccm/s/collect for
            // cross-domain conversion cookie sync — that host was blocked by the
            // narrower g.doubleclick.net whitelist, causing "Unverified" again.
            // 2026-09-14: full audit against Google's canonical CSP guide at
            // developers.google.com/tag-platform/security/guides/csp — added
            // www.googleadservices.com + pagead2.googlesyndication.com in
            // script-src and connect-src (Google Ads uses both for conversion
            // JS + beacons), and added an explicit frame-src for the GTM iframe
            // fallback (was previously blocked by default-src 'self').
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: https://*.google.com https://*.g.doubleclick.net https://*.doubleclick.net https://www.googletagmanager.com https://*.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.g.doubleclick.net https://*.doubleclick.net https://www.googletagmanager.com https://www.googleadservices.com https://pagead2.googlesyndication.com",
              "frame-src 'self' https://www.googletagmanager.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
