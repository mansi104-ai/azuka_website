'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export function ValueSection() {
  const tips = [
    {
      icon: Calculator,
      title: 'Twine Calculator',
      description: 'Calculate exactly how much twine you need for your baling operations',
      link: '/calculator',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: AlertTriangle,
      title: 'Fire Prevention Tips',
      description: 'Learn how to prevent hay bale fires and protect your investment',
      link: '/tips/fire-prevention',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: BookOpen,
      title: 'Stacking Guide',
      description: 'Best practices for stacking hay bales to avoid water damage',
      link: '/tips/stacking',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Lightbulb,
      title: 'Moisture Management',
      description: 'What to do when moisture levels are too high in your hay',
      link: '/tips/moisture',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Valuable Resources for Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free tools and expert knowledge to help you make better decisions and improve your farming operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${tip.bgColor} flex items-center justify-center mb-4`}>
                  <tip.icon className={`h-8 w-8 ${tip.color}`} />
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm">{tip.description}</p>
                <Link href={tip.link}>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Featured Guide: Stop Hay Bale Fires</h3>
              <p className="text-blue-100">
                Every year, thousands of hay bales are lost to spontaneous combustion. Learn the science behind hay fires and proven prevention methods from agricultural experts.
              </p>
              <div className="flex space-x-4">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Read Full Guide
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 rounded-full">
                <AlertTriangle className="h-16 w-16 text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
