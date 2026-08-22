import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { MusicDesk } from "@/components/music-desk"

export const metadata: Metadata = {
  title: "Music",
  description: "Stream DAPRINXE and attach Spotify, Apple, YouTube, SoundCloud, or Tidal links to every record.",
}

export default function MusicPage() {
  return (
    <div>
      <PageBand
        kicker="THE CATALOG"
        title="MUSIC"
        copy="Billie Jean and Crazy are out. Attach the real streaming URLs below — they stay on this device so you can update the page as links land."
      />
      <MusicDesk />
    </div>
  )
}
