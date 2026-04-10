'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import { PROJECTS, type Project } from '@/data/projects'

interface PortfolioSectionProps {
  /** When true, show only featured projects (for the home page). When false, show all. */
  featuredOnly?: boolean
  /** Show the heading + subtitle. Defaults to true. */
  showHeading?: boolean
  /** Show the "see all work" CTA at the bottom. Defaults to true. */
  showCta?: boolean
}

export default function PortfolioSection({
  featuredOnly = false,
  showHeading = true,
  showCta = true,
}: PortfolioSectionProps) {
  const { t, language } = useLanguage()

  const projects: Project[] = featuredOnly
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS

  return (
    <section id="work" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('work.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('work.subtitle')}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-200 flex flex-col"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.comingSoon && (
                    <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('work.comingSoon')}
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {project.category[language]}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                  {project.summary[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 text-sm font-semibold py-2 px-3 rounded-lg bg-primary-700 hover:bg-primary-800 text-white transition-colors duration-200"
                  >
                    <span>{t('work.view')}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 text-sm font-semibold py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200"
                    >
                      <span>{t('work.viewLive')}</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {showCta && featuredOnly && (
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-primary-700 dark:text-primary-300 font-semibold hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200"
            >
              <span>{t('work.cta')}</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
