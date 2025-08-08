import { Hero } from '@/components/hero'
import { ProductShowcase } from '@/components/product-showcase'
import { MissionSection } from '@/components/mission-section'
import { AuthoritySection } from '@/components/authority-section'
import { ValueSection } from '@/components/value-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AuthoritySection />
      <ProductShowcase />
      <ValueSection />
      <MissionSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
