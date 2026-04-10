import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS, getProjectBySlug } from '@/data/projects'
import CaseStudyClient from './CaseStudyClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project not found' }

  return {
    title: project.title,
    description: project.summary.en,
    alternates: { canonical: `/work/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyClient project={project} />
}
