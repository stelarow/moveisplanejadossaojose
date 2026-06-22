import { MetadataRoute } from 'next'
import { servicePages } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.movelplanejadosaojose.com.br'

  return [
    {
      url: baseUrl + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages.map((s) => ({
      url: `${baseUrl}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
