import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// Use environment variable for the main domain, fallback to Netlify for demo, and localhost for dev
const siteUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.URL || 'https://radianz.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Radianz - Professional Online Counseling Services',
  description: 'Connect with experienced counselors for mental health support. Confidential, professional online counseling for individuals and couples.',
  keywords: 'counseling, therapy, mental health, online counselor, counseling services, mental health support',
  authors: [{ name: 'Radianz Counseling' }],
  openGraph: {
    title: 'Radianz - Professional Online Counseling Services',
    description: 'Connect with experienced counselors for mental health support. Confidential, professional online counseling.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radianz - Professional Online Counseling Services',
    description: 'Connect with experienced counselors for mental health support.',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d58f76' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
