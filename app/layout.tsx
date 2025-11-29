import type { Metadata } from 'next'
import { Inter_Tight, Fira_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({ 
  subsets: ["latin"],
  variable: '--font-inter-tight',
  weight: ['300', '400', '500', '600', '700', '800']
});

const firaSans = Fira_Sans({ 
  subsets: ["latin"],
  variable: '--font-fira-sans',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'iProfile',
  description: 'Build your digital business card & portfolio in minutes. Share your professional profile with a custom domain.',
  manifest: '/favicon/site.webmanifest',
  themeColor: '#ED1C24',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Md. Arif Azam',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#ED1C24" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </head>
      <body className={`${interTight.variable} ${firaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
