import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Abdurrahman El Savvaf | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web applications using React, Next.js, Python, FastAPI, .NET, and more. Based in Ankara, Türkiye.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Python', 'FastAPI', '.NET', 'Web Development', 'Ankara', 'Türkiye'],
  authors: [{ name: 'Abdurrahman El Savvaf' }],
  creator: 'Abdurrahman El Savvaf',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Abdurrahman El Savvaf | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications',
    siteName: 'Abdurrahman El Savvaf Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdurrahman El Savvaf | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
