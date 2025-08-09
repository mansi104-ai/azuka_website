"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Award, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { useState } from "react"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      role: "Wheat & Rice Farmer",
      content:
        "Azuka RUFFKNOT twine has never let me down. Even in heavy monsoon conditions, the bales stay intact. My yield loss has reduced by 30% since switching.",
      rating: 5,
      image: "/indian-farmer-portrait.png",
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      name: "Suresh Patil",
      location: "Maharashtra, India",
      role: "Sugarcane Contractor",
      content:
        "We process 500+ tons daily. MaxKnot series handles our heavy-duty requirements perfectly. Quality is consistent and delivery is always on time.",
      rating: 5,
      image: "/indian-agricultural-contractor.png",
      gradient: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
    },
    {
      name: "Manjunath Gowda",
      location: "Karnataka, India",
      role: "Biomass Plant Owner",
      content:
        "AgriForce net wraps have revolutionized our operations. Bales arrive in perfect condition, reducing our processing costs significantly.",
      rating: 5,
      image: "/indian-business-owner-portrait.png",
      gradient: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
    },
    {
      name: "Harpreet Singh",
      location: "Haryana, India",
      role: "Progressive Farmer",
      content:
        "The environmental mission of Azuka aligns with our values. We are proud to contribute to reducing field burning while getting superior quality products.",
      rating: 5,
      image: "/sikh-farmer-portrait.png",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230066cc' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-white font-bold mb-6 shadow-xl">
            <Award className="mr-2 h-5 w-5" />
            Customer Success Stories
            <ThumbsUp className="ml-2 h-5 w-5" />
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">{t("testimonials.title")}</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-xl hover-lift transition-all duration-500 overflow-hidden ${
                hoveredTestimonial === index ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredTestimonial(index)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <CardContent className="p-6 relative">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Quote Icon */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg opacity-20 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <Quote className="h-6 w-6 text-white" />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-gray-600">({testimonial.rating}.0)</span>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-base text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="relative z-10 rounded-full border-2 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm font-semibold text-gray-600">{testimonial.role}</div>
                      <div
                        className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                      >
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-12 glass rounded-3xl px-12 py-8 shadow-xl-colored">
            <div className="text-center group hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-black text-gradient">4.9/5</div>
              <div className="text-sm font-semibold text-gray-600">Average Rating</div>
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

            <div className="text-center group hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow-green">
                <ThumbsUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-black text-gradient-green">98%</div>
              <div className="text-sm font-semibold text-gray-600">Customer Retention</div>
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

            <div className="text-center group hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm font-semibold text-gray-600">Happy Farmers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
