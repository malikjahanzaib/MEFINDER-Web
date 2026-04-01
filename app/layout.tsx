import type { Metadata } from 'next'
import { DM_Serif_Display, Instrument_Sans } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MEFINDER — Multimodal Cancer AI Research',
  description:
    'MEFINDER is an NCI U01-funded multimodal cancer AI research initiative at Emory University\'s HITI Lab, integrating radiology, digital pathology, genomics, and EHR data to discover novel cancer phenotypes and deliver population-specific risk predictions for breast and prostate cancer.',
  openGraph: {
    title: 'MEFINDER — Multimodal Cancer AI Research',
    description:
      'NCI U01-funded initiative fusing radiology, pathology, genomics, and EHR data to uncover novel cancer phenotypes at Emory University HITI Lab.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${instrumentSans.variable}`}
    >
      <body className="font-sans bg-surface text-ink">{children}</body>
    </html>
  )
}
