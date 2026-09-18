import type { Metadata } from "next"
import { Suspense } from "react"
import { PageBand } from "@/components/page-band"
import { BagView } from "@/components/bag-view"

export const metadata: Metadata = {
  title: "Bag",
  description: "Pieces in your DA PRINXE bag. Change quantities, then checkout.",
}

export default function BagPage() {
  return (
    <div>
      <PageBand
        kicker="YOUR PIECES"
        title="BAG"
        copy="Everything you add lands here — color, size, and count. Drop a piece or take it to checkout when the bag is right."
      />
      <Suspense
        fallback={
          <p className="px-4 py-16 text-center text-sm text-white/50">
            Opening the bag…
          </p>
        }
      >
        <BagView />
      </Suspense>
    </div>
  )
}
