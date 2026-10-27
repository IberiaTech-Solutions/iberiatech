import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Security reviews for vibe coded and AI built apps, AI integrations, websites and online stores, bilingual sites, and custom business applications. One engineer, in English and Spanish.',
  alternates: alternatesFor('/services', 'en'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
