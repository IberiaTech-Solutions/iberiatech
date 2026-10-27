'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'
import Reveal from '@/components/Reveal'
import { CONTENT, TOOLS } from './content'

export default function SecurityReviewContent() {
  const { language, pathFor } = useLanguage()
  const c = CONTENT[language === 'es' ? 'es' : 'en']

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-900 text-ink-50">
        <div className="container-max max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-300 font-medium mb-6">
            {c.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-8">
            {c.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed prose-measure mb-10">
            {c.intro}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="text-ink-400">{c.toolsLabel}</span>
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-ink-50/20 px-3 py-1 text-ink-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 dark:text-ink-50 mb-10">
            {c.checksTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {c.checks.map((check, i) => (
              <Reveal
                key={check.title}
                delay={i * 60}
                className="rounded-md border border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900 p-6 md:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-3">
                  {check.title}
                </h3>
                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">{check.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50 dark:bg-ink-950">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 dark:text-ink-50 mb-10">
            {c.stepsTitle}
          </h2>
          <ol className="space-y-5 mb-10">
            {c.steps.map((step, i) => (
              <li key={step} className="flex gap-5 items-baseline">
                <span className="font-display text-2xl font-light text-ink-400 dark:text-ink-500 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-ink-700 dark:text-ink-200">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-ink-600 dark:text-ink-300 mb-8">{c.terms}</p>
          <Link
            href={pathFor('/contact')}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-ink-950 font-semibold py-3.5 px-6 rounded-md transition-colors duration-200"
          >
            <span>{c.cta}</span>
            <FiArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 dark:text-ink-50 mb-10">
            {c.faqTitle}
          </h2>
          <dl className="divide-y divide-ink-200 dark:divide-ink-800 border-y border-ink-200 dark:border-ink-800">
            {c.faq.map((item) => (
              <div key={item.q} className="py-7">
                <dt className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-3">
                  {item.q}
                </dt>
                <dd className="text-ink-600 dark:text-ink-300 leading-relaxed prose-measure">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
