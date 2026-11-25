import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Abdurrahman Rıdvan | İşletmeler İçin Web Sitesi ve Yazılım Çözümleri — Ankara',
  description:
    'Ankara merkezli bağımsız yazılımcı. İşletmenize müşteri kazandıran mobil uyumlu web siteleri, kendi sunucumda hızlı barındırma, özel yazılım ve birebir teknik destek.',
  keywords: [
    'Ankara Web Tasarım',
    'Çankaya Web Sitesi',
    'İşletme Web Sitesi',
    'Özel Yazılım Ankara',
    'Abdurrahman Rıdvan',
    'Full Stack Geliştirici',
    'Ankara',
    'Türkiye',
  ],
  authors: [{ name: 'Abdurrahman Rıdvan' }],
  creator: 'Abdurrahman Rıdvan',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Abdurrahman Rıdvan | İşletmeler İçin Web Sitesi ve Yazılım Çözümleri',
    description:
      'Ankara’da işletmenize özel, hızlı ve müşteri getiren web siteleri, kurumsal barındırma ve birebir teknik destek.',
    siteName: 'Abdurrahman Rıdvan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdurrahman Rıdvan | İşletmeler İçin Web Sitesi ve Yazılım',
    description:
      'Ankara’da işletmeler için mobil uyumlu web siteleri, özel yazılım ve birebir destek.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png' }],
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
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased pb-20 md:pb-0`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
