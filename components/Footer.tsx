'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logos/IberiaTechLogo5.png"
                  alt="IberiaTech Solutions"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">IberiaTech Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/iberiatechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="IberiaTech Solutions on LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:luis@iberiatechsolutions.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 break-all"
                >
                  luis@iberiatechsolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+18643657897"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  (864) 365-7897
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Charleston, SC</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t('services.web.title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t('services.bilingual.title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t('services.apps.title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t('services.security.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} IberiaTech Solutions. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
