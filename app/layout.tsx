import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxery dark AirBNB',
  description: 'Experience luxury in a dark-themed AirBNB space',
  keywords: ['luxery dark AirBNB', 'dark design', 'luxury accommodations', 'technology'],
  authors: [{ name: 'luxery dark AirBNB' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function