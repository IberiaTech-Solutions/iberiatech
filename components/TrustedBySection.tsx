'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedBySection() {
  const { language } = useLanguage()

  const clients = [
    {
      name: 'Querri',
      logo: 'https://querri.com/favicon.svg',
      url: 'https://querri.com'
    },
    {
      name: 'g/d/n/a',
      logo: 'https://gdna.io/favicon.ico',
      url: 'https://gdna.io/'
    },
    {
      name: 'ShopEssentialsHub',
      logo: '/images/logos/logo-SEH.png',
      url: 'https://www.shopessentialshub.com/'
    }
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wide">
            {language === 'es' ? 'Empresas con las que hemos trabajado' : 'Companies we have worked with'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <div className="w-10 h-10 relative">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {client.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
