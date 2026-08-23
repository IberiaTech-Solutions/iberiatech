import type { Metadata } from 'next'
import PortfolioSection from '@/components/PortfolioSection'
import WorkHeader from './WorkHeader'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work by IberiaTech Solutions. Websites, online stores, marketplaces, a subscription platform, and an open source security scanner.',
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
