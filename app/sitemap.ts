import { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${base}/plasterer-northern-beaches`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/services/ceiling-repair-sydney`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/water-damage-ceiling-repair`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/plaster-hole-patch`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/cornice-repair-sydney`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/end-of-lease-plaster-repair`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/storm-damage-ceiling-repair`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/plaster-crack-repair-sydney`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Content hubs (informational, AI-extraction targets)
    {
      url: `${base}/plastering-cost-sydney`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Service × suburb sub-pages will be added here as they ship.
  ];
}
