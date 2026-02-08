import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pink Beam — Hire AI Employees for $500/Month",
  description:
    "Build your AI workforce with Pink Beam. Hire AI employees for research, sales, support, content, and design starting at $500/month. Replace $12K+ human salaries.",
  keywords: [
    "AI employees",
    "AI workforce",
    "automation",
    "AI sales",
    "AI support",
    "AI content",
    "AI research",
    "business automation",
  ],
  authors: [{ name: "Pink Beam" }],
  creator: "Pink Beam",
  publisher: "Pink Beam",
  metadataBase: new URL("https://pinkbeam.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pink Beam — Hire AI Employees for $500/Month",
    description:
      "Build your AI workforce with Pink Beam. Hire AI employees for research, sales, support, and design starting at $500/month.",
    type: "website",
    siteName: "Pink Beam",
    locale: "en_US",
    url: "https://pinkbeam.io",
    images: [
      {
        url: "/api/og?title=Pink+Beam&subtitle=AI+Employees+for+Your+Business&type=default",
        width: 1200,
        height: 630,
        alt: "Pink Beam - AI Employees for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Beam — Hire AI Employees for $500/Month",
    description:
      "Build your AI workforce with Pink Beam. Hire AI employees for research, sales, support, and design starting at $500/month.",
    creator: "@pinkbeam",
    site: "@pinkbeam",
    images: ["/api/og?title=Pink+Beam&subtitle=AI+Employees+for+Your+Business&type=default"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FF006E",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <div className="relative flex flex-col min-h-screen">
            <Navigation />
            <main id="main-content" className="flex-1 pt-16 lg:pt-20" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
