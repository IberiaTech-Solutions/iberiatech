'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import { PROJECTS, type Project } from '@/data/projects'

interface PortfolioSectionProps {
  featuredOnly?: boolean
  showHeading?: boolean
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
    <section id="work" className="section-padding bg-ink-50 dark:bg-ink-950">
      <div className="container-max">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14 md:mb-20"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
              {language === 'es' ? 'Proyectos recientes' : 'Selected work'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-[1.05]">
              {t('work.title')}
            </h2>
            <p className="text-lg text-ink-600 dark:text-ink-300 prose-measure">
              {t('work.subtitle')}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-8 md:gap-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className={`group relative ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative aspect-[16/10] bg-ink-100 dark:bg-ink-900 rounded-md overflow-hidden mb-5">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes={index % 3 === 0
                    ? '(max-width: 768px) 100vw, 1200px'
                    : '(max-width: 768px) 100vw, 600px'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {project.comingSoon && (
                  <div className="absolute top-4 left-4 bg-ink-950/80 text-ink-50 text-[11px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-sm backdrop-blur-sm z-10">
                    {t('work.comingSoon')}
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-ink-500 font-medium">
                    {project.category[language]}
                  </p>
                  <p className="text-[11px] text-ink-500 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink-900 dark:text-ink-50 mb-3 leading-tight">
                  <Link
                    href={`/work/${project.slug}`}
                    className="before:absolute before:inset-0 before:z-0 group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors"
                  >
                    <span className="relative z-[1]">{project.title}</span>
                  </Link>
                </h3>
                <p className="text-base text-ink-600 dark:text-ink-300 leading-relaxed prose-measure mb-5">
                  {project.summary[language]}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="inline-flex items-center gap-3">
                      {i > 0 && <span aria-hidden className="text-ink-400">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm font-medium">
                  <span className="inline-flex items-center gap-1.5 text-ink-900 dark:text-ink-50 group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors">
                    <span>{t('work.view')}</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[1] inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-400 hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
                    >
                      <span>{t('work.viewLive')}</span>
                      <FiExternalLink className="w-3.5 h-3.5" aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {showCta && featuredOnly && (
          <div className="mt-16">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
            >
              <span>{t('work.cta')}</span>
              <FiArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
