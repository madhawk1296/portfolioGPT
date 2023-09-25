import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chatfolio.org',
      lastModified: new Date(),
    }
  ]
}