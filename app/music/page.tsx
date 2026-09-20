import type { Metadata } from "next"
import { appleMusic } from "@/lib/data"
import { PageBand } from "@/components/page-band"
import { MusicDesk } from "@/components/music-desk"

export const metadata: Metadata = {
  title: "Music",
  description:
    "Stream DAPRINXE on Apple Music. Open the artist page or play the catalog from this list.",
}

export default function MusicPage() {
  return (
    <div>
      <PageBand
        kicker="THE CATALOG"
        title="MUSIC"
        copy="The Apple Music catalog is on this page. Billie Jean and Crazy sit up top. Everything else opens the official Daprinxe record on Apple Music."
      />
      <div className="mx-auto flex max-w-5xl justify-end px-4 pt-8 sm:px-6">
        <a
          href={appleMusic.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center bg-brand px-5 text-[11px] tracking-[0.16em] text-white hover:bg-brand/85"
        >
          ARTIST PAGE · APPLE MUSIC
        </a>
      </div>
      <MusicDesk />
    </div>
  )
}
