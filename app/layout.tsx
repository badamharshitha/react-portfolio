import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhila Sri Harshitha Badam | Full Stack Developer',
  description: 'Aspiring Full Stack Developer building responsive applications with React, Node.js, MongoDB and modern web design.',
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://your-portfolio.example.com'),
  openGraph: {
    title: 'Nikhila Sri Harshitha Badam | Full Stack Developer',
    description: 'Modern personal portfolio showcasing projects, experience, and skills.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
