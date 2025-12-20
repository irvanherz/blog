import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { DEFAULT_METADATA } from "@/config"

const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = DEFAULT_METADATA

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
