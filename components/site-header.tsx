"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingBag } from "lucide-react"
import { artist, extraNav, nav } from "@/lib/data"
import { socialIcons } from "@/components/icons"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.16em] text-white sm:text-[1.7rem]"
        >
          {artist.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] font-semibold tracking-[0.22em] transition-colors",
                pathname === item.href
                  ? "text-brand"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {artist.socials.map((social) => {
              const Icon = socialIcons[social.key as keyof typeof socialIcons]
              return (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-brand"
                >
                  <Icon className="size-[15px]" />
                </a>
              )
            })}
          </div>

          <Link
            href="/pay"
            className="relative text-white/80 hover:text-white"
            aria-label="Bag"
          >
            <ShoppingBag className="size-4" />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-brand text-[9px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </Link>

          <Link
            href="/join"
            className="hidden h-9 items-center border border-white px-3 text-[10px] font-semibold tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
          >
            JOIN THE REAL ONES
          </Link>

          <Sheet>
            <SheetTrigger
              className="lg:hidden"
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                />
              }
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-black text-white"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-left text-2xl tracking-[0.16em] text-white">
                  {artist.name}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {[...nav, ...extraNav].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-white/10 py-3 text-sm tracking-[0.18em]",
                      pathname === item.href ? "text-brand" : "text-white/80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
