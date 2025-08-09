"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, User, Building } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-XXXX-XXXXXX", "+91-YYYY-YYYYYY"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91-XXXX-XXXXXX", "Quick Response 24/7"],
      color: "from-green-500 to-green-700",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@azukaagri.com", "info@azukaagri.com"],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Industrial Area, Phase-II", "Punjab, India - 160002"],
      color: "from-red-500 to-red-700",
    },
  ]

  const offices = [
    {
      city: "Punjab (Head Office)",
      address: "Industrial Area, Phase-II, Punjab, India",
      phone: "+91-XXXX-XXXXXX",
      email: "punjab@azukaagri.com",
    },
    {
      city: "Maharashtra",
      address: "MIDC Area, Pune, Maharashtra, India",
      phone: "+91-YYYY-YYYYYY",
      email: "maharashtra@azukaagri.com",
    },
    {
      city: "Karnataka",
      address: "Industrial Estate, Bangalore, Karnataka, India",
      phone: "+91-ZZZZ-ZZZZZZ",
      email: "karnataka@azukaagri.com",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-bold shadow-xl">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get In Touch
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900">
              <span className="text-gradient">Contact</span> Our Team
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your agricultural operations? Our experts are here to help you choose the right
              solutions for your farming needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <Send className="h-6 w-6 text-blue-600" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company/Farm Name</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-blue text-white hover:opacity-90">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-green-100 text-green-800">WhatsApp Support 24/7</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our offices across India for personalized consultation and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-xl border-0 hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-blue-600 flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{office.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our sales team is ready to help you find the perfect agricultural solutions for your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91-XXXX-XXXXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
