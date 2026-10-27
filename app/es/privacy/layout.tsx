import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Privacidad',
  description:
    'Qué recoge esta web, que es casi nada, y adónde va.',
  alternates: alternatesFor('/privacy', 'es'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
