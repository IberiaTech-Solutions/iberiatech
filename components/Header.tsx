'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useLanguage } from './LanguageProvider'
import { FiMenu, FiX, FiSun, FiMoon, FiMessageCircle } from 'react-icons/fi'

const WHATSAPP_URL = 'https://wa.me/18643657897'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t, mounted } = useLanguage()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (
        menuRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return
      }
      setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.work', href: '/work' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const currentLangLabel = language === 'en' ? 'EN' : 'ES'
  const otherLangLabel = language === 'en' ? 'ES' : 'EN'

  return (
    <header className="bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 min-w-0 -m-2 p-2 rounded-sm">
            <div className="w-10 h-10 md:w-11 md:h-11 relative flex-shrink-0">
              <Image
                src="/images/logos/IberiaTechLogo5.png"
                alt=""
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-base md:text-lg font-semibold text-ink-900 dark:text-ink-50 truncate">
              IberiaTech
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors duration-200 py-2 ${
                  isActive(item.href)
                    ? 'text-ink-900 dark:text-ink-50 font-semibold'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="min-w-[44px] min-h-[44px] px-3 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 transition-colors duration-200 rounded-sm"
              aria-label={
                language === 'en'
                  ? 'Current language: English. Switch to Spanish.'
                  : 'Idioma actual: Español. Cambiar a inglés.'
              }
            >
              <span className="font-mono">{currentLangLabel}</span>
              <span aria-hidden className="text-ink-400">/</span>
              <span aria-hidden className="font-mono text-ink-400">{otherLangLabel}</span>
            </button>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 transition-colors duration-200 rounded-sm"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {mounted && theme === 'dark' ? (
                <FiSun className="w-5 h-5" aria-hidden />
              ) : (
                <FiMoon className="w-5 h-5" aria-hidden />
              )}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex min-w-[44px] min-h-[44px] items-center justify-center text-ink-700 dark:text-ink-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200 rounded-sm"
              aria-label={language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
            >
              <FiMessageCircle className="w-5 h-5" aria-hidden />
            </a>

            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 transition-colors duration-200 rounded-sm"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5" aria-hidden />
              ) : (
                <FiMenu className="w-5 h-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden border-t border-[var(--border)]"
          >
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block py-3 px-3 rounded-sm text-base transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-ink-900 dark:text-ink-50 font-semibold'
                      : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}

              <div className="border-t border-[var(--border)] pt-3 mt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full py-3 px-3 rounded-sm text-base text-ink-700 dark:text-ink-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiMessageCircle className="w-5 h-5" aria-hidden />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
