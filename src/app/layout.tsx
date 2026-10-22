import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LittleSpace.co — Coffee, Cycling & Good Space in Sumedang",
  description:
    "Little Space & Co. in Sumedang, West Java. Built around coffee, driven by cycling. Founded by Jamal Hibatullah. Open daily 07.00 – 22.00.",
  keywords: [
    "Little Space & Co.",
    "Little Space Coffee Sumedang",
    "Coffee Shop Sumedang",
    "Cycling Cafe Sumedang",
    "Jamal Hibatullah",
    "Es Kopi Susu Aren Sumedang",
  ],
  authors: [{ name: "LittleSpace.co Team" }],
  openGraph: {
    title: "LittleSpace.co — Coffee, Cycling & Good Space in Sumedang",
    description:
      "A sanctuary between coffee & life in Sumedang, West Java. Open daily 07.00 – 22.00 WIB.",
    url: "https://littlespace.co",
    siteName: "Little Space & Co.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Local Business SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.brandName,
    image: "https://littlespace.co/images/placeholders/hero-placeholder.webp",
    description: "Coffee, conversations, and a creative sanctuary in Sumedang.",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.province,
      addressCountry: siteConfig.location.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    telephone: siteConfig.whatsappNumber,
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-cream selection:bg-accent-purple/30 antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
