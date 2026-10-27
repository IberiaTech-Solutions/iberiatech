// Spanish lives under /es, English at the root. One place maps between the
// two so links, the language switch, hreflang and the sitemap all agree.

export type Language = 'en' | 'es'

export function languageFromPath(pathname: string): Language {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

/** The English path for any path, with or without the /es prefix. */
export function basePath(pathname: string): string {
  if (languageFromPath(pathname) === 'en') return pathname
  return pathname.slice(3) || '/'
}

/** An English path in the given language. */
export function localizePath(path: string, language: Language): string {
  if (language === 'en') return path
  return path === '/' ? '/es' : `/es${path}`
}

/** canonical + hreflang for a page, given its English path. */
export function alternatesFor(path: string, language: Language) {
  return {
    canonical: localizePath(path, language),
    languages: {
      en: path,
      es: localizePath(path, 'es'),
      'x-default': path,
    },
  }
}
