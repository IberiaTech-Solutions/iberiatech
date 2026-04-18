'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

export default function WorkHeader() {
  const { t, language } = useLanguage()

  return (
    <section className="section-padding pb-0 md:pb-0">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
            {language === 'es' ? 'Proyectos' : 'Portfolio'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-[1.05]">
            {t('work.title')}
          </h1>
          <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed prose-measure">
            {t('work.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
