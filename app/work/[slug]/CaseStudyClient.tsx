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
  const { t, language, pathFor } = useLanguage()

  return (
    <article className="min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-5xl mx-auto fade-up">
          <Link
            href={pathFor('/work')}
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
            {(project.link || project.appLink) && (
              <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    <span>{t('work.viewLive')}</span>
                    <FiArrowUpRight className="w-4 h-4" aria-hidden />
                  </a>
                )}
                {project.appLink && (
                  <a
                    href={project.appLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    <span>{project.appLink.label[language]}</span>
                    <FiArrowUpRight className="w-4 h-4" aria-hidden />
                  </a>
                )}
              </div>
            )}
          </header>

          <div className="relative rounded-md overflow-hidden bg-ink-100 dark:bg-ink-900 mb-16">
            <Image
              src={project.image}
              alt={project.title}
              width={project.imageSize.width}
              height={project.imageSize.height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="block w-full h-auto"
              priority
            />
            {project.concept && (
              <div className="absolute top-4 left-4 z-10 bg-ink-950/85 text-ink-50 text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm shadow-md backdrop-blur">
                {t('work.concept')}
              </div>
            )}
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
                <div className="space-y-5">
                  {project.solution[language].split('\n\n').map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed prose-measure"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
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

          {project.gallery && (
            <section className="mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-6">
                {project.gallery.heading[language]}
              </p>
              {/* A swipeable strip on phones, a grid from md up. The negative
                  margin lets the strip run to the screen edge while the first
                  shot still lines up with the text above. */}
              <ul className="mx-[calc(-1*clamp(1rem,4vw,2rem))] px-[clamp(1rem,4vw,2rem)] scroll-px-[clamp(1rem,4vw,2rem)] md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0">
                {project.gallery.shots.map((shot) => (
                  <li key={shot.src} className="snap-start shrink-0 w-[62vw] max-w-[260px] md:w-auto md:max-w-none">
                    <figure>
                      <div className="aspect-[900/1948] rounded-[1.75rem] overflow-hidden ring-1 ring-ink-200 dark:ring-ink-800 bg-ink-100 dark:bg-ink-900">
                        <Image
                          src={shot.src}
                          alt={shot.caption[language]}
                          width={shot.width}
                          height={shot.height}
                          sizes="(max-width: 768px) 62vw, 320px"
                          className="block w-full h-full object-cover object-top"
                        />
                      </div>
                      <figcaption className="mt-4 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                        {shot.caption[language]}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="pt-10 border-t border-ink-200 dark:border-ink-800">
            <Link
              href={pathFor('/work')}
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
