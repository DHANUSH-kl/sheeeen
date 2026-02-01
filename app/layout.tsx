import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sheen.co.in/'),
  title: "SHEEEEN | Premium Car Detailing & Wash Studio in Mysore",
  description: "Experience Mysore's finest automotive care. SHEEEEN specializes in premium ceramic coating, paint correction, interior detailing, and high-end car wash services. Est. 2024.",
  keywords: ["car detailing mysore", "ceramic coating mysore", "car wash mysore", "paint correction mysore", "premium car detailing", "SHEEEEN detailing"],
  authors: [{ name: "SHEEEEN Detailing Studio" }],
  openGraph: {
    title: "SHEEEEN | Premium Car Detailing Mysore",
    description: "Transform your vehicle with Mysore's premier detailing studio. Precision, chemistry, and craftsmanship.",
    url: "https://sheen.co.in/", // Adjust to actual URL
    siteName: "SHEEEEN Detailing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SHEEEEN Detailing Studio Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHEEEEN | Premium Car Detailing Mysore",
    description: "Premium automotive care and detailing services in Mysore.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#053E43",
  width: "device-width",
  initialScale: 1,
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts – EXACT like HTML */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['DM_Sans'] antialiased overflow-x-hidden selection:bg-[#053E43] selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
