'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiGlobe, FiLayers, FiShield } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'

const SERVICES = [
  {
    icon: FiCode,
    titleKey: 'services.web.title',
    descKey: 'services.web.desc',
  },
  {
    icon: FiGlobe,
    titleKey: 'services.bilingual.title',
    descKey: 'services.bilingual.desc',
  },
  {
    icon: FiLayers,
    titleKey: 'services.apps.title',
    descKey: 'services.apps.desc',
  },
  {
    icon: FiShield,
    titleKey: 'services.security.title',
    descKey: 'services.security.desc',
  },
] as const

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700 dark:text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-primary-700 dark:text-primary-300 font-semibold hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200"
          >
            <span>{t('services.cta')}</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
