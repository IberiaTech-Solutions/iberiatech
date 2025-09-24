'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiTarget, FiAward, FiUsers, FiGlobe } from 'react-icons/fi'

export default function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: FiUsers, number: '10+', label: 'Projects Completed' },
    { icon: FiGlobe, number: '2', label: 'Countries Served' },
    { icon: FiAward, number: '100%', label: 'Client Satisfaction' },
    { icon: FiTarget, number: 'Dedicated', label: 'Ongoing Support' }
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
                  <FiTarget className="w-6 h-6 text-blue-600" />
                  <span>{t('about.mission')}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.mission.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                  <FiAward className="w-6 h-6 text-blue-600" />
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
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
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
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with."
                </blockquote>
                <div className="font-semibold text-gray-900 dark:text-white">Dave Ingram</div>
                <div className="text-sm text-brand-800 dark:text-brand-400">Querri</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
