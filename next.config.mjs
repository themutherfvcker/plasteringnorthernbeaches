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
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.g.doubleclick.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: https://*.google.com https://*.g.doubleclick.net https://www.googletagmanager.com https://*.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.g.doubleclick.net https://www.googletagmanager.com",
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
