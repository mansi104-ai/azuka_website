'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Leaf, TreePine, Factory, Recycle, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './language-provider'
import { useState } from 'react'

export function MissionSection() {
  const { t } = useLanguage()
  const [hoveredImpact, setHoveredImpact] = useState<number | null>(null)

  const impacts = [
    {
      icon: Factory,
      value: '50,000',
      label: t('mission.impact1'),
      description: 'Annual CO₂ emissions prevented through baling',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: TreePine,
      value: '25,000',
      label: t('mission.impact2'),
      description: 'Trees saved by replacing coal with biomass',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Leaf,
      value: '100,000',
      label: t('mission.impact3'),
      description: 'Acres protected from open field burning',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full opacity-20 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 rounded-full opacity-15 animate-float blur-3xl" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200 rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-slide-in-left">
            {/* Mission Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-white font-bold shadow-xl">
                <Heart className="mr-2 h-5 w-5 animate-pulse" />
                Environmental Mission
                <Sparkles className="ml-2 h-5 w-5 animate-spin" />
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                {t('mission.title')}
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                {t('mission.subtitle')}
              </p>
            </div>

            {/* Impact Statistics */}
            <div className="space-y-6">
              {impacts.map((impact, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl hover-lift transition-all duration-500 ${
                    hoveredImpact === index ? 'scale-105 shadow-2xl' : ''
                  }`}
                  onMouseEnter={() => setHoveredImpact(index)}
                  onMouseLeave={() => setHoveredImpact(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow`}>
                        <impact.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2">
                          <span className={`text-4xl font-black bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                            {impact.value}
                          </span>
                          <span className="text-lg font-semibold text-gray-600">+</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-1">{impact.label}</div>
                        <div className="text-sm text-gray-600">{impact.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="gradient-blue text-white hover:opacity-90 hover-lift shadow-xl px-8 py-4 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 hover-lift shadow-lg px-8 py-4 text-lg">
                <Recycle className="mr-2 h-5 w-5" />
                Twine Take-Back Program
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-xl-colored hover-glow transition-all duration-500">
                <Image
                  src="/green-fields-wind-turbines.png"
                  alt="Clean Environment Mission"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-blue-900/20"></div>
              </div>
            </div>
            
            {/* Enhanced Mission Quote */}
            <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-8 z-20 animate-float shadow-xl-colored">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <blockquote className="text-lg lg:text-xl font-bold text-gray-900 italic leading-relaxed">
                  "Clean Fields, Clean Skies - Every farmer becomes a partner in protecting our environment."
                </blockquote>
                <div className="mt-4 text-sm font-semibold text-gray-600">
                  - Azuka Agri Mission Statement
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 z-20 animate-float shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-black text-gradient-green">Carbon</div>
                <div className="text-xs font-semibold text-gray-700">Neutral</div>
              </div>
            </div>

            <div className="absolute top-1/3 -left-6 glass rounded-2xl p-4 z-20 animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-2xl font-black text-gradient">100%</div>
                <div className="text-xs font-semibold text-gray-700">Recyclable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
