import { MetadataRoute } from 'next'
import { PROJECTS } from '@/data/projects'
import { localizePath } from '@/lib/i18n'

type Entry = {
  path: string
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  priority: number
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iberiatechsolutions.com'
  const now = new Date()

  const pages: Entry[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/security-review', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    // Low priority and rarely changing, but present: a privacy policy nothing
    // links to from the index is a page search engines and a curious reader
    // both have to be told about.
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    ...PROJECTS.map((project) => ({
      path: `/work/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Each page twice, English and Spanish, and each entry names both so search
  // engines treat them as one page in two languages, not duplicates.
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = {
      en: `${baseUrl}${localizePath(path, 'en')}`,
      es: `${baseUrl}${localizePath(path, 'es')}`,
    }
    return (['en', 'es'] as const).map((language) => ({
      url: languages[language],
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
}
