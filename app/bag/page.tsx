import type { Metadata } from "next"
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
        copy="Everything you add lands here. Change the count, drop a piece, or take it to checkout when the bag is right."
      />
      <BagView />
    </div>
  )
}
