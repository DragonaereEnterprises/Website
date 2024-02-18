import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dragonaere Enterprises',
  description: 'Coming Soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
