import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { artist } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "Press",
  description: "Electronic press kit for DAPRINXE — bio, facts, assets, and contacts.",
}

export default function PressPage() {
  return (
    <div>
      <PageBand
        kicker="EPK"
        title="PRESS"
        copy="One sheet for writers, programmers, and rooms that need the facts without the fluff."
      />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        <section className="grid gap-6 md:grid-cols-[200px_1fr] md:items-start">
          <Image
            src="/images/hero-artist.png"
            alt="DAPRINXE press"
            width={200}
            height={260}
            className="h-auto w-full object-cover"
          />
          <div>
            <h2 className="font-display text-3xl tracking-[0.1em]">SHORT BIO</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              DAPRINXE is an independent hip-hop artist writing from the split
              between pain and loyalty. His records move between street anthems
              and melody. The 2026 singles <em>Crazy</em> and <em>Billie Jean</em>{" "}
              mark the current run, with the official <em>Crazy</em> video
              directed by @whosmyree.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-[0.1em]">FACTS</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {[
              ["Artist", artist.name],
              ["Also billed", artist.short],
              ["Lane", "Hip-hop / melody / street records"],
              ["Latest visual", "Crazy — Official Video"],
              ["Booking", artist.email],
              ["Press", artist.pressEmail],
            ].map(([k, v]) => (
              <div key={k} className="border border-white/10 p-3">
                <dt className="text-[10px] tracking-[0.18em] text-brand">{k}</dt>
                <dd className="mt-1 text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-[0.1em]">ASSETS</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["/images/hero-artist.png", "Portrait"],
              ["/images/video-crazy-yt.jpg", "Crazy still"],
              ["/images/cover-crazy.png", "Crazy cover"],
            ].map(([src, label]) => (
              <a key={label} href={src} download className="panel overflow-hidden">
                <Image src={src} alt={label} width={360} height={240} className="h-40 w-full object-cover" />
                <p className="p-2 text-[11px] tracking-[0.14em] text-white/60">
                  DOWNLOAD · {label}
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="bg-brand px-4 py-2 text-[11px] tracking-[0.16em]">
            PRESS INQUIRY
          </Link>
          <Link href="/book" className="border border-white/20 px-4 py-2 text-[11px] tracking-[0.16em]">
            BOOK THE ARTIST
          </Link>
        </div>
      </div>
    </div>
  )
}
