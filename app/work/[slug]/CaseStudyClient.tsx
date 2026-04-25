'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'
import type { Project } from '@/data/projects'

interface CaseStudyClientProps {
  project: Project
}

export default function CaseStudyClient({ project }: CaseStudyClientProps) {
  const { t, language } = useLanguage()

  return (
    <article className="min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-5xl mx-auto fade-up">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50 mb-10 transition-colors duration-200"
          >
            <FiArrowLeft className="w-4 h-4" aria-hidden />
            <span>{t('work.back')}</span>
          </Link>

          <header className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-4">
                {project.category[language]}
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-ink-900 dark:text-ink-50 mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed prose-measure">
                {project.summary[language]}
              </p>
            </div>
            {project.link && (
              <div className="md:col-span-4 md:text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
                >
                  <span>{t('work.viewLive')}</span>
                  <FiArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              </div>
            )}
          </header>

          <div className={`relative ${project.wide ? 'aspect-[2/1]' : 'aspect-[3/2]'} rounded-md overflow-hidden bg-ink-100 dark:bg-ink-900 mb-16`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
              priority
            />
            {project.comingSoon && (
              <div className="absolute top-4 left-4 bg-accent-500 text-ink-950 text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm shadow-md">
                {t('work.comingSoon')}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
            <div className="md:col-span-8 space-y-12">
              <section>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-4">
                  {t('work.problem')}
                </p>
                <p className="font-display text-xl md:text-2xl text-ink-900 dark:text-ink-50 leading-snug prose-measure">
                  {project.problem[language]}
                </p>
              </section>

              <section>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-4">
                  {t('work.solution')}
                </p>
                <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed prose-measure">
                  {project.solution[language]}
                </p>
              </section>
            </div>

            <aside className="md:col-span-4 space-y-10 md:pt-1">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-500 font-medium mb-3">
                  {t('work.role')}
                </p>
                <p className="text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                  {project.role[language]}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-500 font-medium mb-3">
                  {t('work.tech')}
                </p>
                <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-700 dark:text-ink-300">
                  {project.technologies.map((tech, i) => (
                    <li key={tech} className="inline-flex items-center gap-3">
                      {i > 0 && <span aria-hidden className="text-ink-400">·</span>}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="pt-10 border-t border-ink-200 dark:border-ink-800">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50 transition-colors duration-200"
            >
              <FiArrowLeft className="w-4 h-4" aria-hidden />
              <span>{t('work.back')}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
