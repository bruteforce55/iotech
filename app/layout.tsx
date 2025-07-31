import './globals.css'
import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/contexts/languageContext';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'I-O-Tech Task App',
  description: 'App for IOTech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {/* no lang or dir here */}
      <body className={dmSans.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
