import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code',
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
    { media: '(prefers-color-scheme: light)', color: '#F8FAFF' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
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
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
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
