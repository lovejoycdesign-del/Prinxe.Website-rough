import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { BagView } from "@/components/bag-view"
import { getBagItems } from "@/lib/bag-cookie"

export const metadata: Metadata = {
  title: "Bag",
  description: "Pieces in your DA PRINXE bag. Change quantities, then checkout.",
}

export default async function BagPage() {
  const items = await getBagItems()

  return (
    <div>
      <PageBand
        kicker="YOUR PIECES"
        title="BAG"
        copy="Everything you add lands here — color, size, and count. Drop a piece or take it to checkout when the bag is right."
      />
      <BagView items={items} />
    </div>
  )
}
