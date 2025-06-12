import type { Metadata } from 'next'
import { Inter, Anton, Patrick_Hand, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  weight: ['400'],
})

const patrick_hand = Patrick_Hand({
  subsets: ['latin'],
  variable: '--font-patrick-hand',
  display: 'swap',
  weight: ['400'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Your Product | Transformative Solution',
  description: 'The ultimate solution for [your target audience]',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} ${patrick_hand.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} The Don&apos;t Start a Business Company. All rights reserved.
      </div>
    </footer>
  )
}