'use client';
import { useState } from 'react';

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

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', suburb: '', service: '', message: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    };

    // Fire-and-forget Telegram notify via our own API.
    await fetch('/api/lead-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {});

    // Web3Forms email delivery — uses the same access key as the agency's
    // other lead-gen sites until Joe provisions a dedicated key.
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: 'a1b3ff09-7019-4b9d-b28e-86d6e6cebf08',
        subject: `New plastering lead — ${form.service || 'enquiry'} — ${form.suburb || 'NB'}`,
        from_name: 'Plastering Northern Beaches',
        ...payload,
      }),
    }).catch(() => {});

    setSubmitting(false);
    setSubmitted(true);
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
        <p className="text-navy-400 text-xs text-center">
          🔒 Your info is 100% secure. We never share your details.
        </p>
      </form>
    </div>
  );
}
