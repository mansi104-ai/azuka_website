'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Globe, Award, Package } from 'lucide-react'
import { useLanguage } from './language-provider'

export function AuthoritySection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: t('authority.customers'),
      color: 'text-blue-600',
    },
    {
      icon: Globe,
      value: '50+',
      label: t('authority.countries'),
      color: 'text-green-600',
    },
    {
      icon: Award,
      value: '25+',
      label: t('authority.experience'),
      color: 'text-purple-600',
    },
    {
      icon: Package,
      value: '100+',
      label: t('authority.products'),
      color: 'text-orange-600',
    },
  ]

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'OHSAS 18001',
    'CE Certified',
    'Export License',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('authority.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('authority.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quality Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-blue-200 text-blue-700">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
