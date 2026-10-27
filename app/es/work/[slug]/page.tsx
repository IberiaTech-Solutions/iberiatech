import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS, getProjectBySlug } from '@/data/projects'
import { alternatesFor } from '@/lib/i18n'
import CaseStudyClient from '../../../work/[slug]/CaseStudyClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Proyecto no encontrado' }

  return {
    title: project.title,
    description: project.summary.es,
    alternates: alternatesFor(`/work/${slug}`, 'es'),
  }
}

export default async function CaseStudyPageEs({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyClient project={project} />
}
