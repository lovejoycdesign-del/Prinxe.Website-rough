"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { CartProvider } from "@/hooks/use-cart"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  )
}
