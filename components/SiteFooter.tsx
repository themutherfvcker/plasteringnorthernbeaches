import { SITE } from '@/data/site';

// Site-wide rich footer. Extracted from the homepage so every page carries
// the same trust density (contact block, hours, licence badge) instead of
// dropping to a slim single-column footer on internal pages.
export default function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-xl">🏠</div>
              <div>
                <span className="font-bold text-white text-lg leading-tight block">Jack&apos;s Plastering</span>
                <span className="text-brand-400 font-semibold text-xs tracking-wide uppercase">Northern Beaches</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              Sydney&apos;s Northern Beaches most trusted plastering team. 15+ years of perfect finishes and happy customers.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/#services" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Services</a>
              <a href="/plasterer-northern-beaches" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Plasterer Northern Beaches</a>
              <a href="/plastering-cost-sydney" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Plastering Cost Guide</a>
              <a href="/#why-us" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Why Choose Us</a>
              <a href="/#reviews" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Reviews</a>
              <a href="/#quote" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">Free Quote</a>
              <a href="/#faq" className="block text-navy-300 hover:text-brand-400 transition-colors text-sm">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm">
                📞 {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm">
                ✉️ {SITE.email}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.address.street} ${SITE.address.suburb} ${SITE.address.state} ${SITE.address.postcode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors text-sm not-italic"
              >
                <span className="leading-none">📍</span>
                <span>{SITE.address.street},<br/>{SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}</span>
              </a>
              <div className="flex items-center gap-3 text-navy-300 text-sm">
                🕐 Mon–Sat: 7am – 6pm
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p className="text-navy-500 text-xs">Licensed · Insured · 2-year written guarantee</p>
        </div>
      </div>
    </footer>
  );
}
