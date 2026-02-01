'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const screenshots = [
  { src: '/images/portfolio/www.shopessentialshub.com_.png', label: 'ShopEssentialsHub', href: 'https://www.shopessentialshub.com/' },
  { src: '/images/portfolio/querri1.png', label: 'Querri', href: 'https://querri.com/' },
  { src: '/images/portfolio/gseay.png', label: 'GSeay Construction', href: 'https://www.gseayinc.com/' },
]

export default function ScreenshotStrip() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('visual.sites.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            {t('visual.sites.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Browser / device frame */}
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-sm rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </Link>
              <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
          >
            {t('portfolio.title')} →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
