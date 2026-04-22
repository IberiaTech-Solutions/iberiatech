'use client'

import Link from 'next/link'
import { FiArrowRight, FiCode, FiCpu, FiGlobe, FiLayers, FiShield } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import Reveal from './Reveal'

const FEATURED = {
  icon: FiCpu,
  titleKey: 'services.ai.title',
  descKey: 'services.ai.desc',
}

const SERVICES = [
  { icon: FiCode,   titleKey: 'services.web.title',       descKey: 'services.web.desc' },
  { icon: FiGlobe,  titleKey: 'services.bilingual.title', descKey: 'services.bilingual.desc' },
  { icon: FiLayers, titleKey: 'services.apps.title',      descKey: 'services.apps.desc' },
  { icon: FiShield, titleKey: 'services.security.title',  descKey: 'services.security.desc' },
] as const

export default function ServicesSection() {
  const { t, language } = useLanguage()
  const FeaturedIcon = FEATURED.icon

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
            {t('nav.services')}
          </p>
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
              <div className="flex items-center gap-3 mb-6">
                <FeaturedIcon className="w-5 h-5 text-accent-400" aria-hidden />
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-accent-400">
                  {language === 'es' ? 'Destacado' : 'Featured'}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5 leading-tight">
                {t(FEATURED.titleKey)}
              </h3>
              <p className="text-base md:text-lg text-ink-200/90 leading-relaxed prose-measure">
                {t(FEATURED.descKey)}
              </p>
            </div>
            <div className="md:col-span-2 relative min-h-[200px] md:min-h-[320px] border-t md:border-t-0 md:border-l border-primary-800/80 p-8 md:p-12 flex items-end">
              <p className="text-sm text-ink-300 tabular-nums">
                Next.js · OpenAI · Supabase
              </p>
            </div>
          </div>
        </Reveal>

        <ol className="divide-y divide-ink-200 dark:divide-ink-800 border-y border-ink-200 dark:border-ink-800">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.titleKey}
                as="li"
                delay={index * 50}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
              >
                <div className="col-span-2 md:col-span-1 text-sm text-ink-500 tabular-nums">
                  0{index + 2}
                </div>
                <div className="col-span-10 md:col-span-4 flex items-start gap-3">
                  <Icon className="mt-1 w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0" aria-hidden />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900 dark:text-ink-50">
                    {t(service.titleKey)}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-7 text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </Reveal>
            )
          })}
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
