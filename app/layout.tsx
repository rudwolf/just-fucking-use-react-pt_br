import type { Metadata } from "next";
import { Geist, PT_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Just Fucking Use React",
  description: "Just Fucking Use React",
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
          <div className="fixed top-4 right-4 flex gap-2">
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
    </html>
  );
}
