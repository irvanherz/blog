import { Metadata } from "next"

export const MY_X = 'irvan_herz'
export const MY_GITHUB = 'irvanherz'
export const MY_LINKEDIN = 'irvan-herz'
export const MY_EMAIL = 'irvan.herz@gmail.com'

export const POSTS_PER_PAGE = 10

export const DEFAULT_METADATA: Metadata = {
  title: "Irvan's Blog",
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
  other: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
}