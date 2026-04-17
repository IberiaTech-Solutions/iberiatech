'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiShield,
  FiArrowRight,
  FiSearch,
  FiPenTool,
  FiBox,
  FiSend,
} from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'

const SERVICES = [
  {
    icon: FiCpu,
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
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

const PROCESS = [
  {
    icon: FiSearch,
    titleKey: 'process.discovery.title',
    descKey: 'process.discovery.desc',
  },
  {
    icon: FiPenTool,
    titleKey: 'process.design.title',
    descKey: 'process.design.desc',
  },
  {
    icon: FiBox,
    titleKey: 'process.build.title',
    descKey: 'process.build.desc',
  },
  {
    icon: FiSend,
    titleKey: 'process.launch.title',
    descKey: 'process.launch.desc',
  },
] as const

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
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
              {t('nav.services')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
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
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-700 dark:text-primary-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(service.titleKey)}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('process.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-700 dark:text-primary-300" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="bg-primary-900 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-blue-100/90 mb-8 max-w-xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-accent-500/30"
            >
              <span>{t('hero.cta.contact')}</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
