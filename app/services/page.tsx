'use client'

import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'
import Reveal from '@/components/Reveal'
import ServicesSection from '@/components/ServicesSection'

const PROCESS = [
  { titleKey: 'process.discovery.title', descKey: 'process.discovery.desc' },
  { titleKey: 'process.design.title',    descKey: 'process.design.desc' },
  { titleKey: 'process.build.title',     descKey: 'process.build.desc' },
  { titleKey: 'process.launch.title',    descKey: 'process.launch.desc' },
] as const

export default function ServicesPage() {
  const { t, language, pathFor } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-900 text-ink-50">
        <div className="container-max">
          <div className="max-w-3xl fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-300 font-medium mb-5">
              {t('nav.services')}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed prose-measure">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <ServicesSection showHeading={false} showCta={false} />

      <section className="section-padding bg-ink-50 dark:bg-ink-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
                {language === 'es' ? 'Proceso' : 'Process'}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 leading-[1.05]">
                {t('process.title')}
              </h2>
            </Reveal>

            <div className="md:col-span-8">
              <ol className="space-y-6">
                {PROCESS.map((step, index) => (
                  <Reveal
                    key={step.titleKey}
                    as="li"
                    delay={index * 80}
                    className="flex gap-5 md:gap-8 py-6 border-b border-ink-200 dark:border-ink-800 last:border-b-0"
                  >
                    <span className="text-sm text-ink-500 flex-shrink-0 pt-1 w-8 tabular-nums">
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
                  </Reveal>
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
                href={pathFor('/contact')}
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
