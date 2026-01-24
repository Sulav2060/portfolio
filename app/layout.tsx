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
  title: {
    default: "Sulav Acharya - Software Engineer",
    template: "%s | Sulav Acharya"
  },
  description: "Portfolio of Sulav Acharya, a Software Engineer and Full Stack Developer. Discover projects, skills, and experience of Sulav Acharya in modern web development.",
  keywords: [
    "Sulav Acharya",
    "Sulav Acharya Nepal",
    "Sulav Acharya Software Engineer",
    "Sulav2060",
    "Sulav Pokhara",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer Nepal",
    "React Developer",
    "Next.js Developer"
  ],
  authors: [{ name: "Sulav Acharya", url: "https://sulavacharya.name.np" }],
  creator: "Sulav Acharya",
  publisher: "Sulav Acharya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sulavacharya.name.np",
    title: "Sulav Acharya - Software Engineer",
    description: "Explore the portfolio of Sulav Acharya, a dedicated Software Engineer specializing in building exceptional digital experiences.",
    siteName: "Sulav Acharya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Acharya - Software Engineer",
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
