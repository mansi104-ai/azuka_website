'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MessageCircle, Gift } from 'lucide-react'
import { useLanguage } from './language-provider'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Free Sample Offer */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <Gift className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-4">Free Sample Program</h3>
              <p className="text-blue-100 mb-6">
                Try our premium baler twine risk-free. Get a sample spool delivered to your farm at no cost.
              </p>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your mobile number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                />
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  {t('cta.freeSample')}
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">
                * Free delivery within 48 hours. No obligations.
              </p>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Get In Touch</h3>
            
            <div className="grid gap-4">
              <Button size="lg" variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10">
                <Phone className="mr-3 h-5 w-5" />
                Call Sales: +91-XXXX-XXXXXX
              </Button>
              
              <Button size="lg" variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="mr-3 h-5 w-5" />
                WhatsApp: +91-XXXX-XXXXXX
              </Button>
              
              <Button size="lg" variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10">
                <Mail className="mr-3 h-5 w-5" />
                Email: sales@azukaagri.com
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mt-6">
              <h4 className="font-semibold mb-3">Special Offers Available:</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Bulk order discounts up to 15%</li>
                <li>• Free technical consultation</li>
                <li>• Dealer partnership opportunities</li>
                <li>• Custom packaging solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
