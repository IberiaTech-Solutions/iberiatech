'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiTrendingUp } from 'react-icons/fi'

export default function ResultsStrip() {
  const { t } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-10 px-4 bg-primary-900 dark:bg-gray-900 border-y border-primary-800/50 dark:border-gray-800"
    >
      <div className="container-max max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-accent-400 dark:text-accent-400 uppercase tracking-wide mb-2 flex items-center justify-center gap-2">
          <FiTrendingUp className="w-4 h-4" />
          {t('results.title')}
        </p>
        <p className="text-xl md:text-2xl font-bold text-white mb-1">
          {t('results.metric')}
        </p>
        <p className="text-sm text-blue-100 dark:text-gray-400">
          {t('results.subtitle')}
        </p>
      </div>
    </motion.section>
  )
}
