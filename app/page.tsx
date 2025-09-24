'use client'

import { useLanguage } from '@/components/LanguageProvider'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import TrustedBySection from '@/components/TrustedBySection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative" suppressHydrationWarning>
      {/* World Map Background */}
      <div className="fixed inset-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none z-0">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world map outline */}
          <path
            d="M200,300 Q250,250 300,300 Q350,350 400,300 Q450,250 500,300 Q550,350 600,300 Q650,250 700,300 Q750,350 800,300 Q850,250 900,300 Q950,350 1000,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          />
          {/* North America */}
          <path
            d="M150,200 Q200,180 250,200 Q300,220 350,200 Q400,180 450,200 Q500,220 550,200 Q600,180 650,200 Q700,220 750,200 Q800,180 850,200 Q900,220 950,200 Q1000,180 1050,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* Europe */}
          <path
            d="M500,150 Q550,130 600,150 Q650,170 700,150 Q750,130 800,150 Q850,170 900,150 Q950,130 1000,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* Asia */}
          <path
            d="M800,150 Q850,130 900,150 Q950,170 1000,150 Q1050,130 1100,150 Q1150,170 1200,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* Africa */}
          <path
            d="M500,350 Q550,330 600,350 Q650,370 700,350 Q750,330 800,350 Q850,370 900,350 Q950,330 1000,350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* South America */}
          <path
            d="M300,400 Q350,380 400,400 Q450,420 500,400 Q550,380 600,400 Q650,420 700,400 Q750,380 800,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* Australia */}
          <path
            d="M900,450 Q950,430 1000,450 Q1050,470 1100,450"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          />
          {/* Highlight US and Spain */}
          <circle cx="300" cy="200" r="8" fill="currentColor" className="text-brand-600 dark:text-brand-400" />
          <circle cx="600" cy="150" r="8" fill="currentColor" className="text-brand-600 dark:text-brand-400" />
        </svg>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <TrustedBySection />
        <TestimonialsSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </div>
  )
}
