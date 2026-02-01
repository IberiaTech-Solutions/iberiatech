'use client'

import { useLanguage } from './LanguageProvider'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiHelpCircle, FiClock, FiHeadphones, FiRefreshCw, FiServer, FiGlobe, FiSettings } from 'react-icons/fi'
import { useState } from 'react'

const faqKeys = [
  { q: 'faq.q1', a: 'faq.a1', icon: FiClock },
  { q: 'faq.q2', a: 'faq.a2', icon: FiHeadphones },
  { q: 'faq.q3', a: 'faq.a3', icon: FiRefreshCw },
  { q: 'faq.q4', a: 'faq.a4', icon: FiServer },
  { q: 'faq.q5', a: 'faq.a5', icon: FiGlobe },
  { q: 'faq.q6', a: 'faq.a6', icon: FiSettings },
] as const

export default function FaqSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FiHelpCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t('faq.title')}
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqKeys.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </span>
                    <span className="text-sm md:text-base">{t(item.q)}</span>
                  </span>
                  <FiChevronDown
                    className={`w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-0 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                        {t(item.a)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
