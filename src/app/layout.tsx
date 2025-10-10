import type { Metadata } from 'next'
import { Inter, Anton, Patrick_Hand, Poppins, Kalam,Bowlby_One_SC, Lato, Montserrat, Merriweather, Bebas_Neue, PT_Serif, Bitter, Roboto } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { FB_PIXEL_ID } from '@/lib/fbpixel'
// import {PageViewTracker} from '@/components/biz/PageViewTracker'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['500', '600', '700'],
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

const bowlby = Bowlby_One_SC({
  subsets: ['latin'],
  variable: '--font-bowlby',
  display: 'swap',
  weight: ['400'],
})
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['400', '700', '900'],
})


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['700'],
  // We'll use weights 400 (regular) and 900 (black)
});
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: [ '400'],
  // We'll use weights 400 (regular) and 900 (black)
});
const pt_serif = PT_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt_serif',
  weight: [ '400'],
  // We'll use weights 400 (regular) and 900 (black)
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kalam'
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
})

const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: '',
  description: '',
  // metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ebook.umarsaadu.com.ng'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${bitter.variable} ${inter.variable} ${anton.variable} ${patrick_hand.variable} ${poppins.variable} ${kalam.variable} 
   ${bowlby.variable} ${lato.variable} 
   ${merriweather.variable} ${montserrat.variable} 
   ${bebas_neue.variable} ${pt_serif.variable} 
    
    `}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {/* <PageViewTracker /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
       {/* Facebook Pixel Script */}
       <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src='https://connect.facebook.net/en_US/fbevents.js';
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script');
            fbq('init', ${FB_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />
    </html>
  )
}

// function Footer() {
//   return (
 
//     <footer className="bg-primary text-white py-8 px-4 sm:px-6 lg:px-8 text-center text-xs mt-16">
//   <p>© {new Date().getFullYear()} The Ultimate Cash Machine. All rights reserved.</p>
//   <p className="mt-2">No hype. No scams. Just real business training.</p>
// </footer>

//   )
// }