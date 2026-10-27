import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Términos',
  description:
    'Las condiciones de uso de esta web.',
  alternates: alternatesFor('/terms', 'es'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
