import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a call or email me about a security review for your vibe coded app, or a website, store or custom software project. Charleston, SC, working with clients across the US and Europe.',
  alternates: alternatesFor('/contact', 'en'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
