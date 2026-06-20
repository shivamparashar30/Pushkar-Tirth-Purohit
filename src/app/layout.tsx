import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teerth Purohit Pushkar | Sacred Vedic Rituals at Holy Pushkar Sarovar",
  description:
    "Traditional Teerth Purohit family serving devotees at Holy Pushkar Sarovar for over 100 years. Book authentic Vedic rituals - Pind Daan, Asthi Visarjan, Pitra Dosh Nivaran Puja, Brahma Temple Darshan, Pushkar Snan Sankalp, and sacred ceremonies at Pushkar Lake, Rajasthan.",
  keywords: [
    "Pushkar Teerth Purohit",
    "Pushkar Pandit Ji",
    "Pushkar Puja Booking",
    "Pushkar Priest",
    "Pushkar Lake Priest",
    "Pind Daan Pushkar",
    "Asthi Visarjan Pushkar",
    "Pitra Dosh Puja Pushkar",
    "Pushkar Sarovar Rituals",
    "Brahma Temple Puja",
    "Pushkar Religious Services",
    "Pushkar Holy Bath",
    "Pushkar Snan Sankalp",
    "Tarpan Pushkar",
    "Narayan Bali Puja Pushkar",
    "Pushkar Pandit",
    "Pushkar Pujari",
    "Vedic Rituals Pushkar",
    "Hindu Priest Pushkar",
    "Ancestral Rituals Pushkar",
  ],
  authors: [{ name: "Traditional Teerth Purohit Family, Pushkar" }],
  creator: "Traditional Teerth Purohit Family",
  publisher: "Traditional Teerth Purohit Family",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Traditional Teerth Purohit Services at Holy Pushkar Sarovar",
    description:
      "Serving devotees for over 100 years with authentic Vedic rituals and sacred puja services at Holy Pushkar Sarovar, Rajasthan.",
    siteName: "Pushkar Teerth Purohit",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
        alt: "Traditional Teerth Purohit at Pushkar Sarovar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Teerth Purohit Services at Holy Pushkar Sarovar",
    description:
      "100+ years of authentic Vedic rituals. Book Pind Daan, Asthi Visarjan, Pitra Dosh Puja & more at Pushkar.",
    images: ["/images/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FF6B00" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Pushkar, Rajasthan" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ReligiousOrganization",
              name: "Traditional Teerth Purohit Family - Pushkar",
              description:
                "Traditional Teerth Purohit family serving devotees at Holy Pushkar Sarovar for over 100 years with authentic Vedic rituals.",
              url: "https://example.com",
              telephone: "+91-8112270790",
              email: "shivamparashar330@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pushkar",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.4897",
                longitude: "74.5511",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "05:00",
                closes: "21:00",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Puja Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pind Daan at Pushkar",
                      description: "Sacred offering for departed souls at Pushkar Sarovar",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Asthi Visarjan at Pushkar",
                      description: "Holy immersion of ashes in Pushkar Sarovar",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pitra Dosh Nivaran Puja",
                      description: "Removal of ancestral karmic obstacles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brahma Temple Darshan Puja",
                      description: "Guided worship at Brahma Temple, Pushkar",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
