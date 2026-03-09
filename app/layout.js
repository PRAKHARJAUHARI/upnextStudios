import './globals.css'
import { Space_Grotesk, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Upnext — Premium Marketing Agency for Fashion & Food Brands | Lucknow',
  description: 'Upnext is a boutique marketing and branding agency in Lucknow, India, crafting visceral brand identities, editorial photography, and digital experiences for luxury fashion labels, fine dining restaurants, and premium lifestyle brands across India.',
  keywords: [
    'marketing agency Lucknow',
    'branding agency Lucknow',
    'fashion marketing India',
    'restaurant marketing agency',
    'luxury brand strategy',
    'food photography agency',
    'editorial photography Lucknow',
    'social media agency fashion',
    'digital marketing fine dining',
    'boutique branding agency India',
  ],
  authors: [{ name: 'Upnext Agency' }],
  creator: 'Upnext',
  metadataBase: new URL('https://upnextagency.com'),
  openGraph: {
    title: 'Upnext — Premium Marketing for Fashion & Food',
    description: 'We craft brand identities for luxury fashion and fine dining. Based in Lucknow. Working globally.',
    url: 'https://upnextagency.com',
    siteName: 'Upnext Agency',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upnext — Premium Marketing for Fashion & Food',
    description: 'Branding, photography, and digital experiences for luxury lifestyle brands.',
    creator: '@upnextagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data: Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: 'Upnext',
              url: 'https://upnextagency.com',
              description: 'Premium marketing and branding agency for fashion and food brands. Based in Lucknow, India.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lucknow',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
              areaServed: ['India', 'Global'],
              knowsAbout: ['Fashion Marketing', 'Food Photography', 'Brand Strategy', 'Social Media', 'UI/UX Design'],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white font-body antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
