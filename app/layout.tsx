import type { Metadata } from "next"
import { Allura, Bebas_Neue, Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-face",
})

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script-face",
})

export const metadata: Metadata = {
  title: {
    default: "DA PRINXE — Pain Made Me. Loyalty Keeps Me.",
    template: "%s · DA PRINXE",
  },
  description:
    "Official site for DA PRINXE. Stream Crazy, shop merch, and reach the artist or manager.",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${allura.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="grain min-h-full flex flex-col bg-black text-white">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
