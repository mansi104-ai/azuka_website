'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from './language-provider'

export function Footer() {
  const { t } = useLanguage()

  const productLinks = [
    { name: 'Square Baler Twine', href: '/products/square-baler-twine' },
    { name: 'Round Baler Twine', href: '/products/round-baler-twine' },
    { name: 'Big Baler Twine', href: '/products/big-baler-twine' },
    { name: 'Reaper Binder Twine', href: '/products/reaper-binder-twine' },
    { name: 'Bale Net Wraps', href: '/products/bale-net-wraps' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Applications', href: '/applications' },
    { name: 'Mission', href: '/mission' },
    { name: 'Blog', href: '/blog' },
    { name: 'Downloads', href: '/downloads' },
  ]

  const supportLinks = [
    { name: 'Twine Calculator', href: '/calculator' },
    { name: 'Usage Tips', href: '/tips' },
    { name: 'Technical Support', href: '/support' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest farming tips, product updates, and industry news.</p>
            </div>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="gradient-blue text-white hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-full gradient-blue flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Azuka Agri</h2>
                  <p className="text-sm text-gray-400">{t('footer.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading manufacturer of premium baler twine and agricultural solutions. 
                Committed to sustainable farming and environmental protection.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Industrial Area, Punjab, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@azukaagri.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Azuka Agri. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
