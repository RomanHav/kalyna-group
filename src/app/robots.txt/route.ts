// /app/robots.txt/route.ts
import { type MetadataRoute } from 'next';

export function GET(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://www.kalynagroup.space/sitemap.xml',
  };
}
