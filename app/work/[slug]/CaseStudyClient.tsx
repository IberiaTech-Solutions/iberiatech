'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'
import type { Project } from '@/data/projects'

interface CaseStudyClientProps {
  project: Project
}

export default function CaseStudyClient({ project }: CaseStudyClientProps) {
  const { t, language } = useLanguage()

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-sm text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 mb-8 transition-colors duration-200"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>{t('work.back')}</span>
          </Link>

          {/* Header */}
          <header className="mb-10">
            <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-3">
              {project.category[language]}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {project.summary[language]}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-6 bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200 shadow-md"
              >
                <span>{t('work.viewLive')}</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </header>

          {/* Cover image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-12 border border-gray-200 dark:border-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
            {project.comingSoon && (
              <div className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                {t('work.comingSoon')}
              </div>
            )}
          </div>

          {/* Body grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('work.problem')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.problem[language]}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('work.solution')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.solution[language]}
                </p>
              </section>
            </div>

            <aside className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  {t('work.role')}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.role[language]}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  {t('work.tech')}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Bottom back link */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-sm text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>{t('work.back')}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
