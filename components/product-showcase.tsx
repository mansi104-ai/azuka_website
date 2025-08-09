"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Leaf, Star, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { useState } from "react"

export function ProductShowcase() {
  const { t } = useLanguage()
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      name: "RUFFKNOT Series",
      tagline: "Built to Bind, Engineered to Last",
      description: "Premium quality baler twine for all types of balers. Superior strength and durability.",
      image: "/blue-baler-twine.png",
      features: ["High Tensile Strength", "UV Resistant", "Consistent Quality"],
      category: "Square Baler Twine",
      rating: 4.9,
      gradient: "from-blue-500 to-blue-700",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "MaxKnot Series",
      tagline: "Max Strength. Max Yields.",
      description: "Heavy-duty twine designed for maximum performance in challenging conditions.",
      image: "/placeholder-ra9gj.png",
      features: ["Extra Strong", "Weather Resistant", "Long Lasting"],
      category: "Round Baler Twine",
      rating: 4.8,
      gradient: "from-green-500 to-green-700",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "XtremeBALE Series",
      tagline: "Tie the Toughest Bales",
      description: "Engineered for extreme conditions and heavy-duty agricultural applications.",
      image: "/placeholder-xlipv.png",
      features: ["Extreme Durability", "High Break Strength", "All Weather"],
      category: "Big Baler Twine",
      rating: 4.9,
      gradient: "from-red-500 to-red-700",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "AgriForce Net Wraps",
      tagline: "Cover More. Waste Less.",
      description: "Advanced net wrap technology for efficient baling and superior bale protection.",
      image: "/blue-net-wrap.png",
      features: ["Superior Coverage", "Easy Unwrapping", "Reduced Waste"],
      category: "Bale Net Wrap",
      rating: 4.7,
      gradient: "from-purple-500 to-purple-700",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230066cc' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white font-semibold mb-6 shadow-xl">
            <Award className="mr-2 h-4 w-4" />
            Premium Product Range
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">{t("products.title")}</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("products.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift shadow-xl-colored transition-all duration-500 border-0 ${
                hoveredProduct === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${product.gradient} text-white shadow-lg`}>
                  {product.category}
                </Badge>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle
                  className={`text-xl font-bold ${product.iconColor} group-hover:scale-105 transition-transform duration-300`}
                >
                  {product.name}
                </CardTitle>
                <p className="text-base font-semibold text-gray-600 italic">{product.tagline}</p>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>

                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className={`w-8 h-8 ${product.bgColor} rounded-full flex items-center justify-center`}>
                        <Zap className={`h-4 w-4 ${product.iconColor}`} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3 pt-6">
                  <Button
                    className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 shadow-lg hover-lift`}
                  >
                    Get Sample
                  </Button>
                  <Button
                    variant="outline"
                    className={`border-2 ${product.iconColor.replace("text-", "border-")} ${product.iconColor} hover:${product.bgColor} hover-lift`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-6 glass rounded-3xl p-8 shadow-xl-colored">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">Complete Product Catalog</h3>
                <p className="text-gray-600">Explore our full range of agricultural solutions</p>
              </div>
            </div>

            <Link href="/products">
              <Button
                size="lg"
                className="gradient-blue text-white hover:opacity-90 hover-lift shadow-xl px-8 py-4 text-lg"
              >
                <Leaf className="mr-2 h-5 w-5" />
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
