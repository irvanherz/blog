import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "blog.ivn.my.id — writing code, writing life",
  description:
    "Writing about software engineering, system design, and performance — alongside reflections on life, fear, focus, and the human side of building things.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
