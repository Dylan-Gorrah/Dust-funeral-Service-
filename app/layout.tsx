import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dust Funeral Services | Compassionate Care in Bloemfontein',
  description: '24/7 funeral services in Bloemfontein. Compassionate care, affordable funeral plans, and dignified services for your loved ones.',
  keywords: 'funeral services, Bloemfontein, funeral cover, burial services, memorial services, funeral plans, South Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  )
}
