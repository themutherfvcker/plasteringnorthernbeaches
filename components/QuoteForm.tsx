'use client';
import { useEffect, useRef, useState } from 'react';
import { submitLead } from '../lib/lead-client';

export const SUBURBS = [
  'Manly', 'Dee Why', 'Freshwater', 'Curl Curl', 'Collaroy', 'Narrabeen',
  'Mona Vale', 'Warriewood', 'Avalon', 'Palm Beach', 'Newport', 'Bilgola',
  'Bayview', 'Church Point', 'Elvina Bay', 'Queenscliff', 'North Balgowlah',
  'Seaforth', 'Brookvale', 'Cromer', 'Frenchs Forest', 'Belrose',
  'Hampton Cove', 'Other Northern Beaches suburb',
];

export const SERVICE_OPTIONS = [
  'Drywall Plastering',
  'Plaster Repairs',
  'Cornice & Detailing',
  'Skim Coating',
  'Water Damage Repair',
  'Full Home Plastering',
  'Other / Not sure',
];

export default function QuoteForm({ source = 'main' }: { source?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', suburb: '', service: '', message: '',
  });
  const [website, setWebsite] = useState('');
  const mountedAt = useRef<number>(0);
  useEffect(() => { mountedAt.current = performance.now(); }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const url = typeof window !== 'undefined' ? new URL(window.location.href) : null;
    const attribution = url
      ? {
          gclid: url.searchParams.get('gclid') || undefined,
          fbclid: url.searchParams.get('fbclid') || undefined,
          utm_source: url.searchParams.get('utm_source') || undefined,
          utm_medium: url.searchParams.get('utm_medium') || undefined,
          utm_campaign: url.searchParams.get('utm_campaign') || undefined,
          utm_content: url.searchParams.get('utm_content') || undefined,
          utm_term: url.searchParams.get('utm_term') || undefined,
        }
      : {};

    // Send the REAL monotonic elapsed value so the server's <1000ms spam-check
    // still works. If mountedAt is unavailable (SSR/no useEffect yet) send 0
    // — server rejects <1000ms, so we fail closed on submit-before-mount
    // rather than manufacturing a passing 1000ms value.
    const elapsed_ms = mountedAt.current > 0 ? Math.round(performance.now() - mountedAt.current) : 0;

    // LEADS-002 durable capture path — /api/leads reaches the central
    // Supabase Edge Function `lead-ingest`. Web3Forms remains a browser-direct
    // best-effort email backup: its result never influences success UI.
    // Only /api/leads durable success may show success or fire lead-success
    // analytics.
    const [durable] = await Promise.all([
      submitLead({
        name: form.name, phone: form.phone, email: form.email || undefined,
        suburb: form.suburb || undefined, service: form.service || undefined,
        message: form.message || undefined, source,
        ...attribution,
        website, elapsed_ms,
      }),
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'a1b3ff09-7019-4b9d-b28e-86d6e6cebf08',
          subject: `New ${form.service || 'plastering'} lead — ${form.suburb || 'NB'}`,
          from_name: 'Plastering Northern Beaches',
          ...form, source, ...attribution,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      }).catch(() => {}),
    ]);

    setSubmitting(false);
    if (durable.ok) {
      setSubmitted(true);
    } else {
      setError('Sorry, we couldn’t send that. Please call us on 0403 476 869 and we’ll take your details.');
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-navy-900 mb-2">Quote request received 🎉</h3>
        <p className="text-navy-600">
          We&apos;ll be in touch within 24 hours. Check your phone for our call.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
      <h3 className="font-bold text-xl text-navy-900 mb-1">Request your free quote</h3>
      <p className="text-navy-500 text-sm mb-6">Fill in the details and we&apos;ll be in touch fast.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot: visually hidden. Real humans never fill this. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          <label>Do not fill<input tabIndex={-1} autoComplete="off" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
        </div>
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">Full name *</label>
          <input
            type="text" name="name" required placeholder="e.g. John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-navy-800 font-semibold text-sm mb-1.5">Phone *</label>
            <input
              type="tel" name="phone" required placeholder="0400 000 000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-navy-800 font-semibold text-sm mb-1.5">Email</label>
            <input
              type="email" name="email" placeholder="john@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">Suburb *</label>
          <select
            name="suburb" required
            value={form.suburb}
            onChange={(e) => setForm({ ...form, suburb: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
          >
            <option value="">Select your suburb</option>
            {SUBURBS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">What do you need? *</label>
          <select
            name="service" required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">Tell us more about the job</label>
          <textarea
            name="message" rows={3}
            placeholder="Describe the job, size of area, any issues..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full v2-cta-gradient text-navy-900 font-extrabold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-brand-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Get my free quote →'}
        </button>
        {error ? (
          <p role="alert" className="text-red-600 text-sm text-center">{error}</p>
        ) : null}
        <p className="text-navy-400 text-xs text-center">
          🔒 Your info is 100% secure. We never share your details.
        </p>
      </form>
    </div>
  );
}
