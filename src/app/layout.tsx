import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealEstate Pro - Find Your Dream Home",
  description: "Discover the perfect property for sale or rent. Browse thousands of listings with detailed information, photos, and virtual tours.",
  keywords: "real estate, properties, homes for sale, apartments for rent, real estate listings",
  authors: [{ name: "RealEstate Pro" }],
  openGraph: {
    title: "RealEstate Pro - Find Your Dream Home",
    description: "Discover the perfect property for sale or rent. Browse thousands of listings with detailed information, photos, and virtual tours.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
