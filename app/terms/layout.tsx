import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Terms',
  description:
    'The terms for using this site.',
  alternates: alternatesFor('/terms', 'en'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
