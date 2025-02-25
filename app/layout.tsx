import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HnG Productions | Premium Wedding Cinematography in Indore, India",
  description:
    "Capture your love story with HnG Productions. Expert wedding cinematography and photography in Indore, India. Book your premium shoot today!",
  keywords: [
    "wedding cinematography Indore",
    "pre wedding photography India",
    "luxury wedding videography",
    "professional wedding photographer Indore",
    "best wedding video production",
    "marriage photography services",
    "cinematic wedding shoots",
    "event cinematography India",
  ],
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
  icons: {
    icon: "/H_G_logo.jpg",
    apple: "/H_G_logo.jpg",
  },
  openGraph: {
    title: "HnG Productions | Premium Wedding Cinematography in Indore",
    description:
      "Timeless wedding films and photography by HnG Productions. Based in Indore, serving India-wide. Contact us for your dream shoot!",
    type: "website",
    locale: "en_IN", // Use en_IN for India-specific audience
    url: "https://hngproductions.in",
    siteName: "HnG Productions",
    images: [
      {
        url: "https://hngproductions.in/H_G_logo.jpg", // Use absolute URL
        width: 1200,
        height: 630,
        alt: "HnG Productions Wedding Cinematography",
      },
    ],
  },

  alternates: {
    canonical: "https://handgproductions.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HnG Productions",
            image: "https://hngproductions.in/H_G_logo.jpg",
            "@id": "https://hngproductions.in",
            url: "https://hngproductions.in",
            telephone: "+917999664287", // Add phone number
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "155 Sai Darshan Apartment, Sri Nagar Main, Anand Bazaar",
              addressLocality: "Saket, Indore",
              addressRegion: "Madhya Pradesh",
              postalCode: "452018", // Add postal code if known
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 22.7290562,
              longitude: 75.8930997,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            description:
              "Premium wedding cinematography and photography services in Indore, India.",
            priceRange: "$$$", // Adjust based on your pricing
            sameAs: [
              "https://www.instagram.com/hng_productions",
              "https://youtube.com/@hng_productions",
            ],
          })}
        </script>
      </body>
    </html>
  );
}
