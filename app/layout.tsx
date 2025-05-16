import type { Metadata } from "next";
import { Geist, PT_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["700"],
});

const siteUrl = "https://justfuckingusereact.com";
const siteTitle = "Just Fucking Use React";
const siteDescription =
  "An opinionated guide on why and when to use React (or similar JavaScript frameworks) for modern web development, especially for complex, interactive applications. Challenges the 'pure HTML' narrative.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | " + siteTitle,
  },
  description: siteDescription,
  keywords: [
    "react",
    "javascript",
    "framework",
    "web development",
    "html",
    "frontend",
    "rant",
    "just fucking use react",
    "complexity",
    "spa",
    "single page application",
  ],
  authors: [
    { name: "Omercan", url: "https://github.com/obsfx" },
    { name: "Burak", url: "https://github.com/burakcan" },
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: siteUrl + "/og.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@neoberg",
    creator: "@neoberg",
    images: [siteUrl + "/twitter.png"],
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
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${ptSerif.variable} antialiased bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 flex gap-2 z-50">
            <Button size="icon" asChild>
              <a
                href="https://github.com/burakcan/just-fucking-use-react"
                target="_blank"
                rel="noopener noreferrer"
                title="View the source code on GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-PQDS8VZD38" />
    </html>
  );
}
