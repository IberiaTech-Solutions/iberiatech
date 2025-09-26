'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from './LanguageProvider'
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t, mounted } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.contact', href: '#contact' },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              IberiaTech Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <FiGlobe className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* AI Chat Button - Desktop Only */}
            <button
              onClick={() => {
                // Trigger AI chatbot open
                const event = new CustomEvent('openAIChat')
                window.dispatchEvent(event)
              }}
              className="hidden md:block p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={language === 'es' ? 'Abrir chat IA' : 'Open AI chat'}
              title={language === 'es' ? 'Chat con IA' : 'AI Chat'}
            >
              🤖
            </button>

            {/* WhatsApp Chat Button - Desktop Only */}
            <a
              href="https://wa.me/18643657897"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              aria-label={language === 'es' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
              title={language === 'es' ? 'Chat por WhatsApp' : 'WhatsApp Chat'}
            >
              💬
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Chat Options */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
                  {language === 'es' ? 'Contacto Rápido' : 'Quick Contact'}
                </div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    const event = new CustomEvent('openAIChat')
                    window.dispatchEvent(event)
                  }}
                  className="flex items-center space-x-3 w-full py-3 px-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{language === 'es' ? 'Chat con IA' : 'AI Chat'}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Asistente inteligente' : 'Smart assistant'}
                    </div>
                  </div>
                </button>
                <a
                  href="https://wa.me/18643657897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full py-3 px-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-lg">💬</span>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{language === 'es' ? 'WhatsApp' : 'WhatsApp'}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Chat directo' : 'Direct chat'}
                    </div>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
