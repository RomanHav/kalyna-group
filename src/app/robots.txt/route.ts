// /app/robots.txt/route.ts
export async function GET() {
  const content = `
  User-Agent: *
  Allow: /
  
  Sitemap: https://www.kalynagroup.space/sitemap.xml
    `.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
