// src/app/sitemap.xml/route.ts
import { type MetadataRoute } from 'next';

export const dynamic = 'force-static';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.kalynagroup.space';

  const services = [
    'e-commerce',
    'landing-page',
    'crm-system',
    'ui-ux-design',
    'business-website',
    '3d-design',
  ];

  const routes = [
    '',
    '/services',
    '/blog',
    '/about-us',
    '/career',
    '/privacy-policies',
    ...services.map(service => `/services/${service}`),
  ];

  const sitemap: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return Response.json(sitemap);
}
