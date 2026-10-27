import type { Metadata } from 'next'

// The page itself is a client component, which cannot export metadata, so it
// lives here. Without it /contact shared the homepage's title and summary.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a call or email me about a security review for your vibe coded app, or a website, store or custom software project. Charleston, SC, working with clients across the US and Europe.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
