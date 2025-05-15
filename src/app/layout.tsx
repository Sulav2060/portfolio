import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sulav',
  description: 'A portfolio website for Sulav Acharya, sulav2060',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
