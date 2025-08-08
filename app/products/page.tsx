import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Shield, Leaf, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'RUFFKNOT Series',
      tagline: 'Built to Bind, Engineered to Last',
      description: 'Premium quality baler twine designed for reliability and performance in all conditions.',
      image: '/blue-baler-twine-ruffknot.png',
      features: ['High Tensile Strength', 'UV Resistant', 'Consistent Quality', 'All Weather Performance'],
      applications: ['Square Balers', 'Small Round Balers', 'Hay Baling', 'Straw Baling'],
      specifications: {
        'Breaking Strength': '95-130 kg',
        'Length': '2000-4000 m/kg',
        'Material': '100% Polypropylene',
        'Color': 'Blue/Orange'
      },
      href: '/products/ruffknot'
    },
    {
      name: 'MaxKnot Series',
      tagline: 'Max Strength. Max Yields.',
      description: 'Heavy-duty twine engineered for maximum performance in challenging agricultural conditions.',
      image: '/placeholder.svg?height=300&width=400',
      features: ['Extra Strong', 'Weather Resistant', 'Long Lasting', 'Superior Knot Strength'],
      applications: ['Round Balers', 'Heavy Duty Baling', 'Silage Baling', 'Commercial Operations'],
      specifications: {
        'Breaking Strength': '130-170 kg',
        'Length': '1800-3000 m/kg',
        'Material': '100% Polypropylene',
        'Color': 'Blue/Green'
      },
      href: '/products/maxknot'
    },
    {
      name: 'XtremeBALE Series',
      tagline: 'Tie the Toughest Bales',
      description: 'Engineered for extreme conditions and the most demanding agricultural applications.',
      image: '/placeholder.svg?height=300&width=400',
      features: ['Extreme Durability', 'High Break Strength', 'All Weather', 'Machine Compatible'],
      applications: ['Big Square Balers', 'Large Round Balers', 'Industrial Baling', 'Export Quality'],
      specifications: {
        'Breaking Strength': '170-220 kg',
        'Length': '1500-2500 m/kg',
        'Material': '100% Polypropylene',
        'Color': 'Blue/Red'
      },
      href: '/products/xtremebale'
    },
    {
      name: 'BaleMAX Series',
      tagline: 'Round Baling, Reinvented',
      description: 'Specially designed for round balers with optimized performance characteristics.',
      image: '/placeholder.svg?height=300&width=400',
      features: ['Round Baler Optimized', 'Smooth Running', 'Reduced Waste', 'Easy Handling'],
      applications: ['Round Balers', 'Hay Production', 'Silage Making', 'Livestock Feed'],
      specifications: {
        'Breaking Strength': '110-150 kg',
        'Length': '2200-3500 m/kg',
        'Material': '100% Polypropylene',
        'Color': 'Blue/Yellow'
      },
      href: '/products/balemax'
    },
    {
      name: 'ReapTuff Series',
      tagline: 'Harvest Strong. Reap Right.',
      description: 'Specialized twine for reaper binder machines with superior binding performance.',
      image: '/placeholder.svg?height=300&width=400',
      features: ['Reaper Compatible', 'Strong Binding', 'Harvest Optimized', 'Field Tested'],
      applications: ['Reaper Binders', 'Wheat Harvesting', 'Grain Binding', 'Traditional Harvesting'],
      specifications: {
        'Breaking Strength': '85-120 kg',
        'Length': '2500-4000 m/kg',
        'Material': '100% Polypropylene',
        'Color': 'Natural/Blue'
      },
      href: '/products/reaptuff'
    },
    {
      name: 'AgriForce Net Wraps',
      tagline: 'Cover More. Waste Less.',
      description: 'Advanced net wrap technology for efficient baling and superior bale protection.',
      image: '/placeholder.svg?height=300&width=400',
      features: ['Superior Coverage', 'Easy Unwrapping', 'Reduced Waste', 'Weather Protection'],
      applications: ['Round Balers', 'Silage Protection', 'Hay Preservation', 'Feed Quality'],
      specifications: {
        'Width': '1.23m - 1.28m',
        'Length': '2000m - 3600m',
        'Material': 'HDPE Monofilament',
        'Color': 'Green/Blue'
      },
      href: '/products/agriforce'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-gradient">Product Range</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Complete agricultural solutions designed for modern farming. From premium baler twine 
              to advanced net wraps, we have the right product for every farming need.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="gradient-blue text-white hover:opacity-90">
                Get Free Samples
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {productCategories.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="gradient-blue text-white text-sm px-3 py-1">
                        Premium Quality
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-blue-600 mb-2">{product.name}</h2>
                      <p className="text-lg font-medium text-gray-600 italic mb-4">{product.tagline}</p>
                      <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <Zap className="h-4 w-4 text-green-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Applications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Specifications:</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-gray-600">{key}:</span>
                            <span className="font-medium text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4 pt-4">
                      <Link href={product.href}>
                        <Button className="gradient-blue text-white hover:opacity-90">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Get Sample
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Azuka Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Superior quality, proven performance, and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Every product tested for strength, durability, and performance',
              },
              {
                icon: Award,
                title: 'Export Quality',
                description: 'Meeting international standards for global markets',
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description: 'Sustainable manufacturing with environmental responsibility',
              },
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Engineered for maximum efficiency and reliability',
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
