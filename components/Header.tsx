'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useLanguage } from './LanguageProvider'
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGlobe,
  FiMessageCircle,
} from 'react-icons/fi'

const WHATSAPP_URL = 'https://wa.me/18643657897'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t, mounted } = useLanguage()
  const pathname = usePathname()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const openAIChat = () => {
    const event = new CustomEvent('openAIChat')
    window.dispatchEvent(event)
  }

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

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-primary-800/10 dark:border-gray-800 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
              <Image
                src="/images/logos/IberiaTechLogo5.png"
                alt="IberiaTech Solutions"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white truncate">
              IberiaTech Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Toggle language"
              title={
                language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'
              }
            >
              <FiGlobe className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            {/* AI Chat Button — Desktop only */}
            <button
              onClick={openAIChat}
              className="hidden md:flex p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 items-center"
              aria-label={language === 'es' ? 'Abrir chat IA' : 'Open AI chat'}
              title={language === 'es' ? 'Chat con IA' : 'AI Chat'}
            >
              <span className="text-lg" role="img" aria-hidden="true">
                🤖
              </span>
            </button>

            {/* WhatsApp Button — Desktop only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 items-center"
              aria-label={language === 'es' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
              title="WhatsApp"
            >
              <FiMessageCircle className="w-5 h-5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-primary-800/10 dark:border-gray-700">
            <nav className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}

              {/* Quick Contact in mobile menu */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3">
                  {language === 'es' ? 'Contacto rápido' : 'Quick contact'}
                </div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    openAIChat()
                  }}
                  className="flex items-center space-x-3 w-full py-2 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <span className="text-lg" role="img" aria-hidden="true">
                    🤖
                  </span>
                  <span>{language === 'es' ? 'Chat con IA' : 'AI Chat'}</span>
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full py-2 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiMessageCircle className="w-5 h-5" />
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
