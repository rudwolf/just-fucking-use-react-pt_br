import type { Metadata } from "next";
import { Geist, PT_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
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
const siteTitle = "Use React, Meu Amigo";
const siteDescription =
  "Um guia opinativo sobre por que e quando usar React (ou frameworks JavaScript similares) para desenvolvimento web moderno, especialmente para aplicações complexas e interativas. Desafia a narrativa do 'HTML puro'.";

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
    "desenvolvimento web",
    "html",
    "frontend",
    "aplicações complexas",
    "spa",
    "single page application",
    "português",
    "brasil",
  ],
  authors: [
    { name: "Rudwolf", url: "https://github.com/rudwolf" },
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
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@rudwolf",
    creator: "@rudwolf",
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
                href="https://github.com/rudwolf/just-fucking-use-react-pt_br"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver o código fonte no Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
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
