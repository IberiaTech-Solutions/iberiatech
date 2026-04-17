'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-square w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/images/luis-lozoya.jpg"
                alt={t('about.photoAlt')}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
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
