'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

type CtaVariant = 'strategy' | 'demo' | 'quote24'

const config: Record<CtaVariant, { href: string; titleKey: string; subtitleKey: string; buttonKey: string }> = {
  strategy: {
    href: '#contact',
    titleKey: 'cta.strategy.title',
    subtitleKey: 'cta.strategy.subtitle',
    buttonKey: 'cta.strategy.button',
  },
  demo: {
    href: '#portfolio',
    titleKey: 'cta.demo.title',
    subtitleKey: 'cta.demo.subtitle',
    buttonKey: 'cta.demo.button',
  },
  quote24: {
    href: '#contact',
    titleKey: 'cta.quote24.title',
    subtitleKey: 'cta.quote24.subtitle',
    buttonKey: 'cta.quote24.button',
  },
}

export default function CtaBlock({ variant }: { variant: CtaVariant }) {
  const { t } = useLanguage()
  const { href, titleKey, subtitleKey, buttonKey } = config[variant]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-primary-900 dark:bg-gray-900 border-y border-primary-800/50 dark:border-gray-800"
    >
      <div className="container-max text-center max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {t(titleKey)}
        </h3>
        <p className="text-blue-100 dark:text-gray-300 text-sm md:text-base mb-6">
          {t(subtitleKey)}
        </p>
        <a
          href={href}
          className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-accent-500/30 hover:shadow-accent-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
        >
          {t(buttonKey)}
          <FiArrowRight className="w-5 h-5" />
        </a>
      </div>
    </motion.section>
  )
}
