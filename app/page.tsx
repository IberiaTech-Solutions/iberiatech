'use client'

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import SectionDivider from '@/components/SectionDivider'

export default function HomePage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <PortfolioSection featuredOnly showCta />
      <SectionDivider />
      <AboutSection />
    </div>
  )
}
