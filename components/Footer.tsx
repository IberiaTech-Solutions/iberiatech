'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Footer() {
  const { language, t } = useLanguage()

  // Use a static year to avoid hydration issues
  const currentYear = 2025

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <span className="text-xl font-bold">IberiaTech Solutions</span>
            </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering businesses with innovative tech solutions for a digital future.
              </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/iberiatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/IberiaTech-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <FiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:luis.lozoya.tech@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  luis.lozoya.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+18643657897"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  (864) 365-7897
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Charleston, SC</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiLinkedin className="w-5 h-5 text-blue-400" />
                <a
                  href="https://linkedin.com/company/iberiatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  linkedin.com/company/iberiatech
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('footer.services.bilingual')}</li>
              <li>{t('footer.services.translation')}</li>
              <li>{t('footer.services.webdev')}</li>
              <li>{t('footer.services.seo')}</li>
              <li>{t('footer.services.mobile')}</li>
              <li>{t('footer.services.supabase')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} IberiaTech Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
