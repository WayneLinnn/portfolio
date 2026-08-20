import type { Metadata } from "next"
import { IBM_Plex_Mono, Inter } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "biipmk",
  description:
    "Practice replica of biipmk.com — mechanical keyboards and keycaps design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        inter.variable,
        ibmPlexMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <div className="flex min-h-svh flex-col overflow-x-hidden">
              <div className="sticky top-0 z-50 bg-background px-gutter pt-gutter">
                <SiteHeader />
              </div>
              <main className="flex-1 px-gutter">{children}</main>
              <SiteFooter />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
