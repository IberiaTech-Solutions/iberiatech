'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiTarget, FiAward, FiUsers, FiGlobe, FiUser, FiCode, FiMail } from 'react-icons/fi'

export default function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: FiUsers, number: '10+', label: t('about.stats.portfolio') },
    { icon: FiGlobe, number: '2', label: t('about.stats.countries') },
    { icon: FiAward, number: '100%', label: t('about.stats.satisfaction') },
    { icon: FiTarget, number: 'Dedicated', label: t('about.stats.support') }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.description2')}
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                  <FiTarget className="w-6 h-6 text-primary-800" />
                  <span>{t('about.mission')}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.mission.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                  <FiAward className="w-6 h-6 text-primary-800" />
                  <span>{t('about.expertise')}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.expertise.text')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-800" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personal Section - About Luis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Profile Info */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-800 to-accent-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <FiUser className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Luis Lozoya
              </h3>
              <p className="text-lg text-primary-800 dark:text-primary-400 font-medium mb-4">
                {t('about.founder.title')}
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:luis.lozoya.tech@gmail.com"
                  className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FiMail className="w-4 h-4" />
                  <span className="text-sm">luis.lozoya.tech@gmail.com</span>
                </a>
                <a
                  href="https://luislozoya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FiCode className="w-4 h-4" />
                  <span className="text-sm">luislozoya.com</span>
                </a>
              </div>
            </div>

            {/* Right - Personal Story */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.founder.story.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t('about.founder.story.text')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🇺🇸</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{t('about.founder.experience.us')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🇪🇸</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{t('about.founder.experience.spain')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {t('about.testimonials.title')}
                </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{t('about.testimonials.quote')}"
                </blockquote>
                <div className="font-semibold text-gray-900 dark:text-white">{t('about.testimonials.author')}</div>
                <div className="text-sm text-brand-800 dark:text-brand-400">{t('about.testimonials.company')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
