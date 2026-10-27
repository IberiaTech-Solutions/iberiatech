import type { Metadata } from 'next'

// The page itself is a client component, which cannot export metadata, so it
// lives here. Without it /services shared the homepage's title and summary.
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Security reviews for vibe coded and AI built apps, AI integrations, websites and online stores, bilingual sites, and custom business applications. One engineer, in English and Spanish.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
