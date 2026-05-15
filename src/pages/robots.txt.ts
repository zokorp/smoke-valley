import { business } from '@data/business';

export function GET() {
  const sitemapUrl = new URL('/sitemap-index.xml', business.siteUrl).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
