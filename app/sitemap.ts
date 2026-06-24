import { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    // Service × suburb sub-pages will be added here as they ship.
  ];
}
