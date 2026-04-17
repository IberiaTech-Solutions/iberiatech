'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiCpu, FiGlobe, FiLayers, FiShield } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import SpotlightCard from './SpotlightCard'

const SERVICES = [
  {
    icon: FiCpu,
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
    featured: true,
  },
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
  const { t, language } = useLanguage()

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
            const featured = 'featured' in service && service.featured
            return (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={featured ? 'md:col-span-2' : ''}
              >
                <SpotlightCard
                  className="rounded-2xl h-full"
                  accent={featured ? 'rgba(0,195,137,0.45)' : 'rgba(0,195,137,0.35)'}
                >
                  <div
                    className={`rounded-2xl p-8 border h-full transition-colors duration-200 ${
                      featured
                        ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 border-accent-500/30 text-white'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          featured
                            ? 'bg-accent-500/20 text-accent-300'
                            : 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {featured && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-accent-300">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                          </span>
                          {language === 'es' ? 'Nuevo' : 'New'}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        featured ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {t(service.titleKey)}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        featured
                          ? 'text-blue-100/90'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {t(service.descKey)}
                    </p>
                  </div>
                </SpotlightCard>
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
