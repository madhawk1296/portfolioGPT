import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chatfolio.org',
      lastModified: new Date(),
    },
    {
      url: 'https://chatfolio.org/blog/add-chatbot',
      lastModified: new Date()
    }
  ]
}