'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Award, Globe, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './language-provider'
import { useEffect, useState } from 'react'

export function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32 min-h-screen flex items-center">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full opacity-15 animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '6s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Attention-Grabbing Alert */}
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-xl animate-pulse-glow">
              <Sparkles className="animate-spin mr-2 h-4 w-4" />
              {t('hero.clickBait')}
              <Zap className="animate-bounce ml-2 h-4 w-4" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient block animate-fade-in-up">{t('hero.title1')}</span>
                <span className="text-gray-900 block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('hero.title2')}</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button size="lg" className="gradient-blue text-white hover:opacity-90 hover-lift shadow-xl text-lg px-8 py-4">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t('hero.freeSample')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover-lift shadow-lg text-lg px-8 py-4">
                  {t('hero.calculateTwine')}
                </Button>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex items-center justify-between pt-8 border-t-2 border-blue-200 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3 group hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-glow">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-glow-green">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">25+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">50+ Countries</div>
                  <div className="text-sm text-gray-600">Global Reach</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-xl-colored hover-glow transition-all duration-500">
                <Image
                  src="/modern-farm-haybales.png"
                  alt="Azuka Agri Baler Twine in Action"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-6 z-20 animate-float shadow-xl-colored">
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">10M+</div>
                <div className="text-sm font-semibold text-gray-700">Bales Tied</div>
                <div className="text-xs text-gray-500">Successfully</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 z-20 animate-float shadow-xl-colored" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-3xl font-black text-gradient-green">50%</div>
                <div className="text-sm font-semibold text-gray-700">Less Breakage</div>
                <div className="text-xs text-gray-500">Guaranteed</div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-4 glass rounded-2xl p-4 z-20 animate-float" style={{ animationDelay: '6s' }}>
              <div className="text-center">
                <div className="text-2xl font-black text-gradient">100%</div>
                <div className="text-xs font-semibold text-gray-700">Eco-Friendly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
