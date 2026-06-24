import { SITE } from '@/data/site';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <section className="bg-ink text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-accent text-ink text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-6">
            Scaffold — engine brief + Lombardo build pending
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Plastering &amp; Gyprocking Northern Beaches
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Scaffold landing page. The final hero, services, FAQ, testimonials and lead form will be generated
            from the engine brief and styled with the Lombardo method before launch.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="btn-phone text-lg">
            📞 Call {SITE.phone}
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold mb-4 text-ink">Project Status</h2>
          <p className="text-slate-600 mb-2">
            Domain: <code className="bg-surface px-2 py-1 rounded text-sm">{SITE.domain}</code>
          </p>
          <p className="text-slate-600 mb-2">
            Repo: <code className="bg-surface px-2 py-1 rounded text-sm">github.com/themutherfvcker/plasteringnorthernbeaches</code>
          </p>
          <p className="text-slate-600">
            See <code>docs/BRIEF.md</code> for vision, strategy, partner deal terms, and the full launch checklist.
          </p>
        </div>
      </section>
    </div>
  );
}
