'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'

const SERVICES = [
  { titleKey: 'services.ai.title',        descKey: 'services.ai.desc' },
  { titleKey: 'services.web.title',       descKey: 'services.web.desc' },
  { titleKey: 'services.bilingual.title', descKey: 'services.bilingual.desc' },
  { titleKey: 'services.apps.title',      descKey: 'services.apps.desc' },
  { titleKey: 'services.security.title',  descKey: 'services.security.desc' },
] as const

const PROCESS = [
  { titleKey: 'process.discovery.title', descKey: 'process.discovery.desc' },
  { titleKey: 'process.design.title',    descKey: 'process.design.desc' },
  { titleKey: 'process.build.title',     descKey: 'process.build.desc' },
  { titleKey: 'process.launch.title',    descKey: 'process.launch.desc' },
] as const

export default function ServicesPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-900 text-ink-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-accent-300 font-medium mb-5">
              {t('nav.services')}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed prose-measure">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
            {language === 'es' ? 'Servicios' : 'Services'}
          </p>
          <ol className="divide-y divide-ink-200 dark:divide-ink-800 border-y border-ink-200 dark:border-ink-800">
            {SERVICES.map((service, index) => (
              <motion.li
                key={service.titleKey}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-sm text-ink-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-ink-900 dark:text-ink-50">
                    {t(service.titleKey)}
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-7 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-ink-50 dark:bg-ink-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
                {language === 'es' ? 'Proceso' : 'Process'}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 leading-[1.05]">
                {t('process.title')}
              </h2>
            </motion.div>

            <div className="md:col-span-8">
              <ol className="space-y-6">
                {PROCESS.map((step, index) => (
                  <motion.li
                    key={step.titleKey}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-5 md:gap-8 py-6 border-b border-ink-200 dark:border-ink-800 last:border-b-0"
                  >
                    <span className="font-mono text-sm text-ink-500 flex-shrink-0 pt-1 w-8">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900 dark:text-ink-50 mb-2">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed prose-measure">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-primary-900 text-ink-50 rounded-md p-10 md:p-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] mb-5">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-ink-200/90 mb-8 leading-relaxed prose-measure">
                {t('contact.subtitle')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-ink-950 font-semibold py-3.5 px-6 rounded-md transition-colors duration-200"
              >
                <span>{t('hero.cta.contact')}</span>
                <FiArrowUpRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
