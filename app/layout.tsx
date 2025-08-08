import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azuka Agri - Baler Twine Manufacturer India | Agricultural Solutions',
  description: 'Leading manufacturer of baler twine, agricultural nets, and farming solutions in India. Built to Bind, Engineered to Last. Export quality products for modern agriculture.',
  keywords: 'Baler Twine Manufacturer India, Hay Baler Twine Supplier, Agricultural Twine Exporter, Round Baler Twine, Reaper Binder Twine',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
