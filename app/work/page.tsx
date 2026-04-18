import type { Metadata } from 'next'
import PortfolioSection from '@/components/PortfolioSection'
import WorkHeader from './WorkHeader'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work by IberiaTech Solutions: websites, ecommerce, marketplaces, and custom business applications built with Next.js, React, and modern cloud infrastructure.',
  alternates: {
    canonical: '/work',
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <WorkHeader />
      <PortfolioSection featuredOnly={false} showHeading={false} showCta={false} />
    </div>
  )
}
