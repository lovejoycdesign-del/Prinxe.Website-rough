"use client"

import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { Globe, Headphones, Users } from "lucide-react"
import { artist, extraNav, nav } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const statIcons = [Headphones, Globe, Users]

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")

  function join(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes("@")) {
      toast.error("Drop a real email.")
      return
    }
    setStatus("loading")
    window.setTimeout(() => {
      setStatus("done")
      setEmail("")
      toast.success("You're in. First access hits this inbox.")
    }, 700)
  }

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1.4fr_1fr] lg:items-center">
        <div>
          <p className="font-display text-6xl leading-none tracking-[0.08em] text-brand/35 sm:text-7xl">
            {artist.name}
          </p>
          <p className="mt-3 font-script text-3xl text-white/80">{artist.quote}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {artist.stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto mb-2 size-7 text-brand" strokeWidth={1.25} />
                <p className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.22em] text-white/55">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.26em] text-white">
            JOIN THE REAL ONES
          </p>
          <p className="mt-2 text-[11px] tracking-[0.12em] text-white/50">
            EXCLUSIVE DROPS. FIRST ACCESS. STRAIGHT TO YOU.
          </p>
          {status === "done" ? (
            <p className="mt-4 text-sm text-brand">You&apos;re on the list.</p>
          ) : (
            <form onSubmit={join} className="mt-4 flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-10 rounded-none border-white/20 bg-black text-white placeholder:text-white/35"
                aria-label="Email"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-10 rounded-none bg-brand px-4 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-brand/85"
              >
                {status === "loading" ? "..." : "JOIN NOW"}
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-5 text-[11px] tracking-[0.14em] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {artist.name}. ALL RIGHTS.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[...nav.slice(1), ...extraNav].map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
