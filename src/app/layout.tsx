import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar";

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
    default: "InnovateX – Crafting Digital Solutions",
    template: "%s | InnovateX",
  },
  description:
    "InnovateX is a digital agency building modern web and mobile applications to help businesses grow and innovate.",
  keywords: [
    "InnovateX",
    "web development",
    "mobile app",
    "digital agency",
    "startup tech partner",
  ],
  authors: [{ name: "InnovateX", url: "https://innovatexsh.com" }],
  creator: "InnovateX Team",
  metadataBase: new URL("https://innovatexsh.com"),
  openGraph: {
    title: "InnovateX – Crafting Digital Solutions",
    description:
      "We help businesses grow by building modern and scalable web & mobile applications.",
    url: "https://innovatexsh.com",
    siteName: "InnovateX",
    images: [
      {
        url: "https://innovatexsh.com/X.png",
        width: 1200,
        height: 630,
        alt: "InnovateX Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovateX – Crafting Digital Solutions",
    description:
      "We help businesses grow by building modern and scalable web & mobile applications.",
    images: ["https://innovatexsh.com/X.png"],
    creator: "@innovatex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/X.svg",
    shortcut: "/X.svg",
    apple: "/X.png",
  },
};

const telegraf = localFont({
  src: [
    {
      path: "../../public/fonts/PPTelegraf-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPTelegraf-UltraBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPTelegraf-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-telegraf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${telegraf.variable}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
