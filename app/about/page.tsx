import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Globe, Factory, Leaf, Shield } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const milestones = [
    { year: '1998', event: 'Company Founded', description: 'Started as a small twine manufacturing unit' },
    { year: '2005', event: 'ISO Certification', description: 'Achieved ISO 9001:2000 certification' },
    { year: '2010', event: 'Export Expansion', description: 'Started exporting to 15+ countries' },
    { year: '2015', event: 'Environmental Initiative', description: 'Launched Clean Fields, Clean Skies mission' },
    { year: '2020', event: 'Technology Upgrade', description: 'Modernized production with latest machinery' },
    { year: '2024', event: 'Market Leadership', description: 'Became India\'s leading baler twine manufacturer' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Every product undergoes rigorous testing to ensure superior performance',
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Committed to sustainable practices and reducing environmental impact',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term relationships through exceptional service and support',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Meeting international quality standards for export markets',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-gradient">Azuka Agri</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                For over 25 years, we have been at the forefront of agricultural innovation, 
                providing premium baler twine and farming solutions that help farmers achieve 
                better yields while protecting the environment.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Farmers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-agricultural-manufacturing.png"
                alt="Azuka Agri Manufacturing Facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small manufacturing unit to India's leading baler twine manufacturer
            </p>
          </div>

          <div className="grid gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in quality management and environmental standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'ISO 9001:2015',
              'ISO 14001:2015',
              'OHSAS 18001',
              'CE Certified',
              'Export License'
            ].map((cert, index) => (
              <Card key={index} className="text-center p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
