import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Mascot from "./components/Mascot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sulavacharya.name.np"),
  title: {
    default: "Sulav Acharya | Software Engineer",
    template: "%s | Sulav Acharya"
  },
  description: 'Official portfolio of Sulav Acharya (sulav2060). Software Engineer specializing in React, Next.js, and Laravel. Explorer of NEPSE data and FPL SaaS developer.', keywords: [
    "Sulav Acharya",
    "Sulav2060",
    "Sulav Acharya Nepal",
    "Sulav Acharya Software Engineer",
    "Sulav Pokhara",
    "Web Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "sulav",
    "acharya",
  ],
  authors: [{ name: "Sulav Acharya", url: "https://sulavacharya.name.np" }],
  creator: "Sulav Acharya",
  publisher: "Sulav Acharya",
  openGraph: {
    title: 'Sulav Acharya | Software Engineer',
    description: 'Software Engineer specializing in React, Next.js, and Laravel.',
    url: 'https://sulavacharya.name.np',
    siteName: 'Sulav Acharya Portfolio',
    images: [
      {
        url: 'https://sulavacharya.name.np/SulavAcharya.webp',
        width: 1200,
        height: 630,
        alt: 'Sulav Acharya - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Acharya | Software Engineer",
    description: "Software Engineer Portfolio of Sulav Acharya",
    creator: "@sulav2060",
  },
  alternates: {
    canonical: "https://sulavacharya.name.np",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sulav Acharya',
  alternateName: 'sulav2060',
  url: 'https://sulavacharya.name.np',
  image: 'https://sulavacharya.name.np/SulavAcharya.webp',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://linktr.ee/sulav2060',
    'https://github.com/sulav2060',
    'https://linkedin.com/in/sulav-acharya-8b5629169/',
    'https://www.freelancer.com/u/sulav2060',
    'https://www.instagram.com/su7av_acharya/'
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    "name": "Pokhara University"
  },

  knowsAbout: ["Software Engineering", "React", "Next.js", "Laravel", "Full-Stack Development", "NEPSE"],
  knowsLanguage: [
    { "@type": "Language", "name": "English" },
    { "@type": "Language", "name": "Nepali" }
  ],
  description: "Software Engineer and Full-Stack Developer specializing in React, Next.js, and Laravel. Creator of NEPSE analytics tools and FPL SaaS applications."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V5FH4M31HM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V5FH4M31HM');
          `}
        </Script>
        <Mascot />
        {children}
      </body>
    </html>
  );
}
