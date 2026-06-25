'use client';
import { useState } from 'react';
import { SUBURBS } from './QuoteForm';

// Lean 3-field form for paid-traffic service landing pages.
// Strips submission down to first name + mobile + suburb. Anything else
// gets asked on the phone qualification by Jack.

export default function LeanQuoteForm({
  source = 'service-page',
  problem = '',
  submitLabel = 'Get my fixed-price quote →',
}: {
  source?: string;
  problem?: string;
  submitLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', suburb: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      service: problem,
      source,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    };

    await fetch('/api/lead-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {});

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: 'a1b3ff09-7019-4b9d-b28e-86d6e6cebf08',
        subject: `New ${problem || 'plastering'} lead — ${form.suburb || 'NB'}`,
        from_name: 'Plastering Northern Beaches',
        ...payload,
      }),
    }).catch(() => {});

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-navy-900 mb-1">Got it — Jack will call you within 24 hours</h3>
        <p className="text-navy-600 text-sm">
          Keep your phone handy. If it&apos;s urgent, call us now on{' '}
          <a className="font-bold text-brand-600 underline" href="tel:0200000000">(02) 0000 0000</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
      <h3 className="font-extrabold text-2xl text-navy-900 mb-1">Fixed-price quote within 24 hours</h3>
      <p className="text-navy-500 text-sm mb-5">
        3 quick fields. Jack calls you back within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">First name *</label>
          <input
            type="text" name="name" required placeholder="Your first name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-navy-800 font-semibold text-sm mb-1.5">Mobile *</label>
          <input
            type="tel" name="phone" required placeholder="0400 000 000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border-2 border-navy-200 rounded-lg px-4 py-3 text-navy-900 placeholder-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all"
          />
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
        <button
          type="submit"
          disabled={submitting}
          className="w-full v2-cta-gradient text-navy-900 font-extrabold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-brand-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : submitLabel}
        </button>
        <p className="text-navy-400 text-xs text-center">
          🔒 Your details are private. Jack calls you — no spam, no email list.
        </p>
      </form>
    </div>
  );
}
