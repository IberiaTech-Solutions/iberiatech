import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What this site collects, which is almost nothing, and where it goes.',
  alternates: alternatesFor('/privacy', 'en'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
