import { Metadata, Viewport } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import PlausibleProvider from 'next-plausible'

import './globals.css'

import Theme from "../lib/ColorMode";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dragonaere.com'),
  title: {
    default: 'Dragonaere Enterprises',
    template: '%s | Dragonaere Enterprises',
  },
  description: 'Dragonaere Enterprises | Coming Soon',
  creator: 'Andrew Still',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
    date: false,
    url: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  twitter: {
    card: 'summary',
    title: 'Dragonaere Enterprises',
    description: 'Dragonaere Enterprises | Coming Soon',
    creator: '@DragonaereEnt'
  },
  openGraph: {
    title: 'Dragonaere Enterprises',
    description: 'Dragonaere Enterprises | Coming Soon',
    url: 'https://www.dragonaere.com',
    siteName: 'Dragonaere Enterprises',
    type: 'website',
    locale: 'en_US'
  },
  icons: {
    icon: 'https://images.static.dragonaere.com/logos/favicon.ico',
    shortcut: 'https://images.static.dragonaere.com/logos/favicon.ico'
  }
}

export const viewport:Viewport = {
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider trackLocalhost={true} domain='dragonaere.com' selfHosted={true} customDomain='https://plausible.andrewstill.moe' trackOutboundLinks={true} />
      </head>
      <body>
        <AppRouterCacheProvider>
            {InitColorSchemeScript({
              attribute: "data-mui-color-scheme",
              modeStorageKey: "mui-mode",
              colorSchemeStorageKey: "mui-color-scheme",
              defaultMode: "system",
            })}
            <Theme>
              {children}
            </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
