import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HnG Productions | Premium Wedding Cinematography",
  description:
    "Capturing timeless moments through cinematic storytelling. Premium wedding and event cinematography by HnG Productions.",
  keywords: [
    "wedding photography",
    "pre wedding photography",
    "wedding cinematography",
    "wedding videography",
    "premium wedding services",
    "wedding photographer",
    "pre wedding shoot",
    "wedding video productions",
    "luxury wedding photography",
    "professional wedding photography",
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
    title: "HnG Productions | Premium Wedding Cinematography",
    description:
      "Capturing timeless moments through cinematic storytelling. Premium wedding and event cinematography by HnG Productions.",
    type: "website",
    locale: "en_US",
    url: "https://hngproductions.in",
    siteName: "HnG Productions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
        width: 1200,
        height: 630,
        alt: "HnG Productions Wedding Cinematography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HnG Productions | Premium Wedding Cinematography",
    description: "Professional wedding photography and cinematography services",
    images: ["https://images.unsplash.com/photo-1606800052052-a08af7148866"],
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
            image: "/H_G_logo.jpg",
            description:
              "Premium wedding photography and cinematography services",
            "@id": "https://handgproductions.in",
            url: "https://handgproductions.in",
            servesCuisine:
              "Wedding Photography, Pre-Wedding Photography, Wedding Cinematography, Corporate Events, Wedding Videography, Wedding Photography Services, Marriage Photography, Wedding Photographer, Pre-Wedding Shoot, Wedding Video Production, Luxury Wedding Photography, Professional Wedding Photography",
          })}
        </script>
      </body>
    </html>
  );
}
