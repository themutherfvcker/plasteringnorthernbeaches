'use client';
import { useState } from 'react';

// Lime-palette version of the 3-field form. Identical logic to
// LeanQuoteForm; just recoloured for the palette A/B test.

export default function LimeQuoteForm({
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
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-center border border-slate-200">
        <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-slate-900 mb-1">Got it — Jack will call you within 24 hours</h3>
        <p className="text-slate-600 text-sm">
          Keep your phone handy. If it&apos;s urgent, call us now on{' '}
          <a className="font-bold text-lime-600 underline" href="tel:0200000000">(02) 0000 0000</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-200">
      <h3 className="font-extrabold text-2xl text-slate-900 mb-1">Fixed-price quote within 24 hours</h3>
      <p className="text-slate-500 text-sm mb-5">3 quick fields. Jack calls you back within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-800 font-semibold text-sm mb-1.5">First name *</label>
          <input
            type="text" name="name" required placeholder="Your first name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-slate-800 font-semibold text-sm mb-1.5">Mobile *</label>
          <input
            type="tel" name="phone" required placeholder="0400 000 000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-slate-800 font-semibold text-sm mb-1.5">Suburb *</label>
          <input
            type="text" name="suburb" required placeholder="e.g. Manly, Bondi, Surry Hills"
            value={form.suburb}
            onChange={(e) => setForm({ ...form, suburb: e.target.value })}
            className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15 outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-extrabold text-lg py-4 rounded-xl active:scale-[0.98] transition-all duration-150 shadow-lg shadow-lime-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : submitLabel}
        </button>
        <p className="text-slate-400 text-xs text-center">
          🔒 Your details are private. Jack calls you — no spam, no email list.
        </p>
      </form>
    </div>
  );
}
