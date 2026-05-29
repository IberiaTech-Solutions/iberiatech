'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import { PROJECTS, type Project } from '@/data/projects'
import Reveal from './Reveal'

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
          <Reveal className="max-w-2xl mb-16 md:mb-24">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 font-medium mb-5">
              {language === 'es' ? 'Proyectos recientes' : 'Selected work'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-[1.05]">
              {t('work.title')}
            </h2>
            <p className="text-lg text-ink-600 dark:text-ink-300 prose-measure">
              {t('work.subtitle')}
            </p>
          </Reveal>
        )}

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
              language={language}
              t={t}
            />
          ))}
        </div>

        {showCta && featuredOnly && (
          <div className="mt-16 md:mt-20">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-ink-900 dark:text-ink-50 font-medium hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
            >
              <span>{t('work.cta')}</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

interface ProjectRowProps {
  project: Project
  index: number
  language: 'en' | 'es'
  t: (key: string) => string
}

function ProjectRow({ project, index, language, t }: ProjectRowProps) {
  const reversed = index % 2 === 1

  return (
    <Reveal
      as="article"
      className="group relative border-t border-ink-200 dark:border-ink-800 py-12 md:py-20 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className={`md:col-span-7 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
          <ProjectImage
            project={project}
            language={language}
            t={t}
            aspectClass="aspect-[16/10]"
          />
        </div>

        <div className={`md:col-span-5 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
          <ProjectMeta project={project} index={index} language={language} />
          <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink-900 dark:text-ink-50 mb-4 leading-[1.1]">
            <ProjectTitleLink project={project}>{project.title}</ProjectTitleLink>
          </h3>
          <p className="text-base md:text-lg text-ink-600 dark:text-ink-300 leading-relaxed prose-measure mb-6">
            {project.summary[language]}
          </p>
          <ProjectTech project={project} />
          <ProjectActions project={project} language={language} t={t} />
        </div>
      </div>
    </Reveal>
  )
}

function ProjectImage({
  project,
  language,
  t,
  aspectClass,
}: {
  project: Project
  language: 'en' | 'es'
  t: (key: string) => string
  aspectClass: string
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={
        language === 'es'
          ? `Ver el caso de estudio de ${project.title}`
          : `View ${project.title} case study`
      }
      className={`block relative ${aspectClass} w-full bg-ink-100 dark:bg-ink-900 rounded-lg overflow-hidden ring-1 ring-ink-200/60 dark:ring-ink-800/60 before:absolute before:inset-0 before:z-20`}
    >
      <Image
        src={project.image}
        alt={
          language === 'es'
            ? `Captura del sitio de ${project.title}`
            : `Screenshot of ${project.title}`
        }
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
      />
      {/* Hover wash */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-t from-primary-950/70 via-primary-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* Hover CTA chip */}
      <div
        aria-hidden
        className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink-50/95 dark:bg-ink-950/95 backdrop-blur px-3.5 py-2 text-xs font-medium text-ink-900 dark:text-ink-50 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
      >
        <span>{t('work.view')}</span>
        <FiArrowUpRight className="w-3.5 h-3.5" />
      </div>
      {project.comingSoon && (
        <div className="absolute top-4 left-4 z-10 bg-accent-500 text-ink-950 text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm shadow-md">
          {t('work.comingSoon')}
        </div>
      )}
    </Link>
  )
}

function ProjectMeta({
  project,
  index,
  language,
}: {
  project: Project
  index: number
  language: 'en' | 'es'
}) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        aria-hidden
        className="font-display text-2xl md:text-3xl font-light text-ink-300 dark:text-ink-600 tabular-nums leading-none"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="h-px flex-1 max-w-[3rem] bg-ink-200 dark:bg-ink-800" aria-hidden />
      <span className="text-[11px] uppercase tracking-[0.15em] text-ink-500 font-medium">
        {project.category[language]}
      </span>
    </div>
  )
}

function ProjectTitleLink({
  project,
  children,
}: {
  project: Project
  children: React.ReactNode
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="bg-[length:0%_2px] bg-left-bottom bg-no-repeat bg-gradient-to-r from-accent-500 to-accent-500 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]"
    >
      {children}
    </Link>
  )
}

function ProjectTech({ project }: { project: Project }) {
  if (project.technologies.length === 0) return null
  return (
    <ul className="flex flex-wrap gap-2 mb-7">
      {project.technologies.slice(0, 4).map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-ink-200 dark:border-ink-800 px-2.5 py-1 text-[11px] font-medium text-ink-600 dark:text-ink-400"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function ProjectActions({
  project,
  language,
  t,
}: {
  project: Project
  language: 'en' | 'es'
  t: (key: string) => string
}) {
  return (
    <div className="flex items-center gap-6 text-sm font-medium">
      <Link
        href={`/work/${project.slug}`}
        className="relative z-10 inline-flex items-center gap-1.5 text-ink-900 dark:text-ink-50 group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors"
      >
        <span>{language === 'es' ? 'Ver caso' : 'View case study'}</span>
        <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-400 hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
        >
          <span>{t('work.viewLive')}</span>
          <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden />
        </a>
      )}
    </div>
  )
}
