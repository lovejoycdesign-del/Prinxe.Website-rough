import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { VideoStage } from "@/components/video-stage"

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch DAPRINXE — Crazy (Official Video) and the rest of the visual world.",
}

export default function VideosPage() {
  return (
    <div>
      <PageBand
        kicker="OFFICIAL VISUALS"
        title="VIDEOS"
        copy="The second room after home. Crazy is live — directed by @whosmyree. Drop more YouTube links anytime."
      />
      <VideoStage />
    </div>
  )
}
