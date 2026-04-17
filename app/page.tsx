'use client'

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'

export default function HomePage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection featuredOnly showCta />
      <AboutSection />
    </div>
  )
}
