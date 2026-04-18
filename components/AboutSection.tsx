'use client'

import Image from 'next/image'
import { useLanguage } from './LanguageProvider'
import Reveal from './Reveal'

export default function AboutSection() {
  const { t, language } = useLanguage()

  const facts = [
    {
      value: language === 'es' ? '5+ años' : '5+ years',
      label: language === 'es' ? 'construyendo para negocios' : 'building for businesses',
    },
    {
      value: 'EN · ES',
      label: language === 'es' ? 'entrega bilingüe nativa' : 'native bilingual delivery',
    },
    {
      value: '48h',
      label: language === 'es' ? 'respuesta a cada consulta' : 'reply to every inquiry',
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] max-w-sm rounded-md overflow-hidden">
              <Image
                src="/images/luis-lozoya.jpg"
                alt={t('about.photoAlt')}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale-[0.15]"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={100}>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
              {t('about.kicker')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-[1.05]">
              {t('about.heading')}
            </h2>
            <div className="prose-measure space-y-5">
              <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed">
                {t('about.body')}
              </p>
              <p className="text-base text-ink-600 dark:text-ink-400 leading-relaxed">
                {t('about.security')}
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-2xl">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                    {f.value}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-600 dark:text-ink-400">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
