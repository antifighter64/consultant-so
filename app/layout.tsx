import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Linkbaits.com — The Linkbait Platform That Gets You Cited',
  description: 'AI tools to create, rate, and automate content people link to. Score any URL, generate linkbait ideas, spy competitors, and automate distribution.',
  metadataBase: new URL('https://linkbaits.com'),
  openGraph: {
    title: 'Linkbaits.com — The Linkbait Platform That Gets You Cited',
    description: 'AI tools to create, rate, and automate content people link to.',
    url: 'https://linkbaits.com',
    siteName: 'Linkbaits.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linkbaits.com — The Linkbait Platform That Gets You Cited',
    description: 'AI tools to create, rate, and automate content people link to.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  )
}
