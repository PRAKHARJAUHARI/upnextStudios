import HeroSection from '@/components/home/HeroSection'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import PitchSection from '@/components/home/PitchSection'
import ServicesSection from '@/components/home/ServicesSection'
import WorkGrid from '@/components/home/WorkGrid'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import AboutSection from '@/components/home/AboutSection'
import TeamSection from '@/components/home/TeamSection'
import SharedCtaSection from '@/components/SharedCtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <PitchSection />
      <ServicesSection />
      <WorkGrid />
      <TestimonialsSection />
      <AboutSection />
      <TeamSection />
      <SharedCtaSection />
    </>
  )
}
