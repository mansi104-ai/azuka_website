import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "How to Prevent Hay Bale Fires: A Complete Guide",
    excerpt:
      "Every year, thousands of hay bales are lost to spontaneous combustion. Learn the science behind hay fires and proven prevention methods from agricultural experts.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Dr. Rajesh Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Safety",
    slug: "prevent-hay-bale-fires-guide",
  }

  const blogPosts = [
    {
      title: "Choosing the Right Baler Twine for Your Operation",
      excerpt:
        "A comprehensive guide to selecting the perfect twine based on your baler type, crop conditions, and storage requirements.",
      image: "/blue-baler-twine.png",
      author: "Suresh Kumar",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Equipment",
      slug: "choosing-right-baler-twine",
    },
    {
      title: "Sustainable Farming: Converting Crop Waste to Energy",
      excerpt:
        "Discover how modern baling techniques can transform agricultural waste into valuable biomass fuel, reducing environmental impact.",
      image: "/green-fields-wind-turbines.png",
      author: "Dr. Priya Patel",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Sustainability",
      slug: "crop-waste-to-energy",
    },
    {
      title: "Maximizing Hay Quality Through Proper Baling",
      excerpt:
        "Expert tips on timing, moisture content, and storage techniques to ensure your hay maintains maximum nutritional value.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Manjunath Gowda",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Quality",
      slug: "maximizing-hay-quality",
    },
    {
      title: "The Economics of Modern Baling Equipment",
      excerpt: "Cost-benefit analysis of different baling systems and how to calculate ROI for your farming operation.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Harpreet Singh",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "Economics",
      slug: "economics-modern-baling",
    },
    {
      title: "Weather-Resistant Baling: Tips for Monsoon Season",
      excerpt: "Strategies for successful baling during challenging weather conditions and protecting your harvest.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Rajesh Kumar",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Weather",
      slug: "weather-resistant-baling",
    },
    {
      title: "Twine Storage and Handling Best Practices",
      excerpt: "Proper storage techniques to maintain twine quality and prevent waste in your farming operations.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Suresh Patil",
      date: "2023-12-28",
      readTime: "3 min read",
      category: "Storage",
      slug: "twine-storage-best-practices",
    },
  ]

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Safety", count: 8 },
    { name: "Equipment", count: 6 },
    { name: "Sustainability", count: 5 },
    { name: "Quality", count: 4 },
    { name: "Economics", count: 2 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-bold shadow-xl">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn & Grow
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900">
              <span className="text-gradient">Agricultural</span> Insights
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Expert knowledge, practical tips, and industry insights to help you make better farming decisions and
              improve your agricultural operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Featured Article</span>
            </div>
          </div>

          <Card className="overflow-hidden shadow-xl hover-lift">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600 text-white">{featuredPost.category}</Badge>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="gradient-blue text-white hover:opacity-90 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <span>Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        category.active ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover-lift">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">{post.category}</Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
