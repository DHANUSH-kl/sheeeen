import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sheen.co.in/'),
  title: "Sheen | Car Detailing & Wash Studio in Mysore",
  description: "Experience Mysore's finest automotive care. Sheen specializes in ceramic coating, paint correction, interior detailing, and high-end car wash services. Est. 2024.",
  keywords: ["car detailing mysore", "ceramic coating mysore", "car wash mysore", "paint correction mysore", "car detailing", "sheen detailing"],
  authors: [{ name: "Sheen Detailing Studio" }],
  openGraph: {
    title: "Sheen | Car Detailing Mysore",
    description: "Transform your vehicle with Mysore's premier detailing studio. Precision, chemistry, and craftsmanship.",
    url: "https://sheen.co.in/", // Adjust to actual URL
    siteName: "Sheen Detailing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sheen Detailing Studio Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheen | Car Detailing Mysore",
    description: "Automotive care and detailing services in Mysore.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Sheen Detailing Studio",
      "image": "https://sheen.co.in/logo.png",
      "url": "https://sheen.co.in/",
      "telephone": "+918660010700",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mysore",
        "addressLocality": "Mysore",
        "addressRegion": "Karnataka",
        "postalCode": "570001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.2958,
        "longitude": 76.6394
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday"
          ],
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "07:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/sheen.co.in_?igsh=MTNsZGFyaXFkdzlrZw=="
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Car Detailing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sheen Refresh Pack",
              "description": "Professional multi-stage car wash with pH-neutral snow foam, wheel cleaning, and interior vacuuming."
            },
            "price": "1400",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sheen Signature Pack",
              "description": "Full restorative detailing including machine polishing, interior steam cleaning, and ceramic protection."
            },
            "price": "3999",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a typical detailing service take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic wash takes 1-2 hours. Complete detailing packages require 4-6 hours. Ceramic coating can take 1-2 days for proper curing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to book an appointment in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we operate by appointment only to ensure dedicated time and attention for your vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ceramic coating last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our ceramic coatings last 3-5 years with proper maintenance."
          }
        }
      ]
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
