'use client'

import { useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

export default function HtmlLangUpdater() {
  const { language } = useLanguage()

  useEffect(() => {
    // Update the HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  return null
}
