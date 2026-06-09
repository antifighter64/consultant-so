import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultant.so — Find & Hire Top Consultants',
  description: 'The marketplace to find vetted consultants across business, legal, finance, marketing, and tech. Get matched in minutes.',
  metadataBase: new URL('https://consultant.so'),
  openGraph: {
    title: 'Consultant.so — Find & Hire Top Consultants',
    description: 'The marketplace to find vetted consultants across every industry.',
    url: 'https://consultant.so',
    siteName: 'Consultant.so',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  )
}
