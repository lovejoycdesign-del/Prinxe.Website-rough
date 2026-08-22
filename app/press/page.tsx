import type { Metadata } from "next"
import Link from "next/link"
import { artist } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "Press",
  description: "Electronic press kit for DA PRINXE — bio, facts, and contacts.",
}

export default function PressPage() {
  return (
    <div>
      <PageBand
        kicker="EPK"
        title="PRESS"
        copy="One sheet for writers, programmers, and rooms that need the facts without the fluff."
        plain
      />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        <section>
          <h2 className="font-display text-3xl tracking-[0.1em]">SHORT BIO</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
            DA PRINXE is an independent hip-hop artist writing from the split
            between pain and loyalty. His records move between street anthems
            and melody. The 2026 singles <em>Crazy</em> and <em>Billie Jean</em>{" "}
            mark the current run, with the official <em>Crazy</em> video
            directed by @whosmyree.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-[0.1em]">FACTS</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {[
              ["Artist", artist.name],
              ["Also billed", artist.short],
              ["Lane", "Hip-hop / melody / street records"],
              ["Latest visual", "Crazy — Official Video"],
              ["Booking", artist.email || "—"],
              ["Press", artist.pressEmail || "—"],
            ].map(([k, v]) => (
              <div key={k} className="border border-white/10 p-3">
                <dt className="text-[10px] tracking-[0.18em] text-brand">{k}</dt>
                <dd className="mt-1 text-white">{v}</dd>
              </div>
            ))}
          </dl>
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
