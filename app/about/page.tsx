import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { artist } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "About",
  description: "Two sides. One story. The life behind DAPRINXE.",
}

export default function AboutPage() {
  return (
    <div>
      <PageBand
        kicker={artist.kicker}
        title="ABOUT"
        copy="Pain made the records. Loyalty kept the circle small. This is the short version."
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-white/10">
          <Image
            src="/images/hero-artist.png"
            alt="DAPRINXE"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-6 text-sm leading-7 text-white/70">
          <p className="font-display text-4xl tracking-[0.08em] text-white">
            {artist.tagline}
          </p>
          <p>
            DAPRINXE writes what he lives. The nights with no heat. The rooms
            that went quiet. The people who stayed when the money was theoretical.
            The music sits between street anthems and melody — records that hit
            your chest first and explain themselves later.
          </p>
          <p>
            <span className="text-white">Crazy</span> is the latest official
            visual, directed by @whosmyree. It is the thesis: out the mud, still
            standing, still selective about who gets close.{" "}
            <span className="text-white">Billie Jean</span> and{" "}
            <span className="text-white">Pain Names</span> ride next to it —
            two more pages from the same book.
          </p>
          <p>
            Off the mic he is building a lane for the Real Ones: merch that
            looks like the music, rooms that feel like the records, and a
            direct line for fans who actually listen. No fake polish. No
            committee verses. If it did not happen, it does not ship.
          </p>
          <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {artist.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-brand">{stat.value}</p>
                <p className="text-[10px] tracking-[0.2em] text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/videos"
              className="bg-brand px-4 py-2 text-[11px] tracking-[0.16em] text-white"
            >
              WATCH CRAZY
            </Link>
            <Link
              href="/press"
              className="border border-white/20 px-4 py-2 text-[11px] tracking-[0.16em]"
            >
              PRESS KIT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
