import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Factory, Recycle, Heart, Users, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function MissionPage() {
  const environmentalImpacts = [
    {
      icon: Factory,
      title: "CO₂ Emissions Prevented",
      value: "50,000+ tons",
      description: "Annual carbon dioxide emissions prevented through our baling solutions",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: TreePine,
      title: "Trees Saved Equivalent",
      value: "25,000+ trees",
      description: "Environmental impact equivalent to planting thousands of trees",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Leaf,
      title: "Fields Protected",
      value: "100,000+ acres",
      description: "Agricultural land protected from harmful open field burning",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const initiatives = [
    {
      title: "Clean Fields Initiative",
      description: "Working with farmers to eliminate open field burning through effective baling solutions.",
      impact: "80% reduction in field burning",
      image: "/green-fields-wind-turbines.png",
    },
    {
      title: "Twine Take-Back Program",
      description: "Collecting and recycling used twine to create a circular economy in agriculture.",
      impact: "90% material recovery rate",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Biomass Energy Partnership",
      description: "Converting crop waste into clean energy, replacing coal and wood burning.",
      impact: "1000+ MW clean energy",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-white font-bold shadow-xl">
              <Heart className="mr-2 h-5 w-5" />
              Our Environmental Mission
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900">
              <span className="text-gradient-green">Clean Fields,</span>
              <br />
              <span className="text-gradient">Clean Skies</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We dream of a future where no field is burned, no air is choked, and every farmer earns more by doing the
              right thing. Our mission is to reduce open field burning and air pollution by promoting baling of crop
              waste.
            </p>

            <div className="flex justify-center space-x-4">
              <Button size="lg" className="gradient-blue text-white hover:opacity-90">
                <Heart className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Recycle className="mr-2 h-5 w-5" />
                Take-Back Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Environmental Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results in protecting our environment and supporting sustainable agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {environmentalImpacts.map((impact, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover-lift">
                <CardHeader>
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
                  >
                    <impact.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`text-3xl font-black bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                    {impact.value}
                  </div>
                  <p className="text-gray-600">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Green Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting environmental change
            </p>
          </div>

          <div className="grid gap-12">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover-lift">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">{initiative.impact}</Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{initiative.description}</p>
                    <Button className="gradient-blue text-white hover:opacity-90 w-fit">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Every roll of Azuka Baler Twine helps convert crop waste into fuel – saving trees, replacing coal, and
            protecting clean air.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Globe className="mr-2 h-5 w-5" />
              Global Impact Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
