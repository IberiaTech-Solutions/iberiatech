'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import Reveal from './Reveal'

const FEATURED = {
  titleKey: 'services.ai.title',
  descKey: 'services.ai.desc',
  evidenceKey: 'services.ai.evidence',
}

const SERVICES = [
  { titleKey: 'services.web.title',       descKey: 'services.web.desc',       evidenceKey: 'services.web.evidence' },
  { titleKey: 'services.bilingual.title', descKey: 'services.bilingual.desc', evidenceKey: 'services.bilingual.evidence' },
  { titleKey: 'services.apps.title',      descKey: 'services.apps.desc',      evidenceKey: 'services.apps.evidence' },
  { titleKey: 'services.security.title',  descKey: 'services.security.desc',  evidenceKey: 'services.security.evidence' },
] as const

export default function ServicesSection() {
  const { t, language } = useLanguage()

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-[1.05]">
            {t('services.title')}
          </h2>
          <p className="text-lg text-ink-600 dark:text-ink-300 prose-measure">
            {t('services.subtitle')}
          </p>
        </Reveal>

        <Reveal as="article" className="relative mb-16 md:mb-20 rounded-md border border-primary-800/80 bg-primary-900 text-ink-50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="font-display text-6xl md:text-7xl font-light text-accent-400/80 tabular-nums leading-none mb-6">
                01
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5 leading-tight">
                {t(FEATURED.titleKey)}
              </h3>
              <p className="text-base md:text-lg text-ink-200/90 leading-relaxed prose-measure">
                {t(FEATURED.descKey)}
              </p>
            </div>
            <div className="md:col-span-2 relative min-h-[200px] md:min-h-[320px] border-t md:border-t-0 md:border-l border-primary-800/80 p-8 md:p-12 flex flex-col justify-end">
              <p className="font-display text-2xl md:text-3xl text-ink-50 leading-tight">
                {language === 'es'
                  ? 'Bot bilingüe que atiende reservas y FAQs.'
                  : 'Bilingual bot that handles bookings and FAQs.'}
              </p>
              <p className="mt-3 text-sm text-accent-400">
                {t(FEATURED.evidenceKey)}
              </p>
            </div>
          </div>
        </Reveal>

        <ol className="divide-y divide-ink-200 dark:divide-ink-800 border-y border-ink-200 dark:border-ink-800">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.titleKey}
              as="li"
              delay={index * 50}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
            >
              <div className="col-span-12 md:col-span-2 font-display text-3xl md:text-5xl font-light text-ink-400 dark:text-ink-500 tabular-nums leading-none">
                {String(index + 2).padStart(2, '0')}
              </div>
              <div className="col-span-12 md:col-span-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900 dark:text-ink-50">
                  {t(service.titleKey)}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7 space-y-3">
                <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  {t(service.descKey)}
                </p>
                <p className="text-sm text-accent-700 dark:text-accent-400">
                  {t(service.evidenceKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
          >
            <span>{t('services.cta')}</span>
            <FiArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
