import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { FramerPresence } from '@/components/FramerPresence';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ekene Ezeifeoma',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#A6A6A6]'>
      <body className={inter.className}>
        <FramerPresence mode='wait'>
        {children}
        </FramerPresence>
      <Analytics />
        </body>
    </html>
  )
}
