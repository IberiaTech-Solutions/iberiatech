'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import StatCounter from './StatCounter'

export default function AboutSection() {
  const { t, language } = useLanguage()

  const stats: Array<
    | { kind: 'count'; value: number; suffix?: string; label: string }
    | { kind: 'text'; text: string; label: string }
  > = [
    {
      kind: 'count',
      value: 5,
      suffix: '+',
      label: language === 'es' ? 'Años construyendo' : 'Years building',
    },
    {
      kind: 'text',
      text: 'EN/ES',
      label: language === 'es' ? 'Entrega bilingüe' : 'Bilingual delivery',
    },
    {
      kind: 'count',
      value: 48,
      suffix: 'h',
      label: language === 'es' ? 'Tiempo de respuesta' : 'Response time',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur px-5 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/5"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary-700 to-accent-500 bg-clip-text text-transparent">
                {s.kind === 'count' ? (
                  <StatCounter value={s.value} suffix={s.suffix ?? ''} />
                ) : (
                  s.text
                )}
              </div>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-2xl" aria-hidden />
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-800">
                <Image
                  src="/images/luis-lozoya.jpg"
                  alt={t('about.photoAlt')}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-3">
              {t('about.kicker')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('about.heading')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {t('about.body')}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.security')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
