'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const guaranteeKeys = ['guarantee.moneyback', 'guarantee.satisfaction', 'guarantee.timeline'] as const

export default function GuaranteesStrip() {
  const { t } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container-max max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
          {t('guarantee.title')}
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {guaranteeKeys.map((key, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                <FiCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
              </span>
              <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t(key)}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
