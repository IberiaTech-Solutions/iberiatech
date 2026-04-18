'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-ink-200 border-t border-ink-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/images/logos/IberiaTechLogo5.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-display text-lg font-semibold text-ink-50">
                IberiaTech
              </span>
            </div>
            <p className="text-ink-300 max-w-md leading-relaxed prose-measure mb-6">
              {t('footer.tagline')}
            </p>
            <a
              href="https://www.linkedin.com/company/iberiatechsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-ink-50 transition-colors duration-200"
              aria-label="IberiaTech Solutions on LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" aria-hidden />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-5 text-ink-400 font-medium">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-ink-500 mt-0.5 flex-shrink-0" aria-hidden />
                <a
                  href="mailto:luis@iberiatechsolutions.com"
                  className="text-ink-200 hover:text-ink-50 transition-colors duration-200 break-all"
                >
                  luis@iberiatechsolutions.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-ink-500 flex-shrink-0" aria-hidden />
                <a
                  href="tel:+18643657897"
                  className="text-ink-200 hover:text-ink-50 transition-colors duration-200"
                >
                  (864) 365-7897
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="w-4 h-4 text-ink-500 flex-shrink-0" aria-hidden />
                <span className="text-ink-300">Charleston, SC</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-5 text-ink-400 font-medium">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-ink-200 hover:text-ink-50 transition-colors duration-200">
                  {t('services.web.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ink-200 hover:text-ink-50 transition-colors duration-200">
                  {t('services.bilingual.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ink-200 hover:text-ink-50 transition-colors duration-200">
                  {t('services.apps.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ink-200 hover:text-ink-50 transition-colors duration-200">
                  {t('services.security.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-16 pt-8 text-xs text-ink-500">
          <p>
            &copy; {currentYear} IberiaTech Solutions. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
