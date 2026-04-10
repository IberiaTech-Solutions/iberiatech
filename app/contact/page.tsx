'use client'

import { motion } from 'framer-motion'
import { FiMail, FiCalendar, FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'

// TODO Luis: replace with your real Calendly URL when you have one
// e.g. https://calendly.com/luis-iberiatech/20min
const CALENDLY_URL = 'https://calendly.com/luis-lozoya-tech/30min'

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-accent-300 font-medium mb-4">
              {t('nav.contact')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email card */}
            <motion.a
              href="mailto:luis@iberiatechsolutions.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-5">
                <FiMail className="w-6 h-6 text-primary-700 dark:text-primary-300" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('contact.email.label')}
              </h2>
              <p className="text-primary-700 dark:text-primary-300 font-medium break-all">
                luis@iberiatechsolutions.com
              </p>
            </motion.a>

            {/* Calendly card */}
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-5">
                <FiCalendar className="w-6 h-6 text-primary-700 dark:text-primary-300" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('contact.book.label')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {t('contact.book.desc')}
              </p>
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                {t('contact.bookCta')} →
              </span>
            </motion.a>
          </div>

          {/* WhatsApp note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex items-start space-x-4"
          >
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
              <FiMessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                WhatsApp
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === 'es'
                  ? 'También puedes escribirnos por WhatsApp usando el botón flotante en la esquina inferior derecha.'
                  : 'You can also message us on WhatsApp using the floating button in the bottom-right corner.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
