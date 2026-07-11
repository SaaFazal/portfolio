import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://sahadhfazal.com/sitemap.xml',
    host: 'https://sahadhfazal.com',
  };
}
