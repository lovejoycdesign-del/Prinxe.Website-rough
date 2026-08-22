import type { Metadata } from "next"
import { Suspense } from "react"
import { PageBand } from "@/components/page-band"
import { PayDesk } from "@/components/pay-desk"

export const metadata: Metadata = {
  title: "Payment",
  description:
    "Tip DA PRINXE on Cash App at $legenddakidd. Every donation helps him build the brand.",
}

export default function PayPage() {
  return (
    <div>
      <PageBand
        kicker="THE BAG"
        title="PAYMENT"
        copy="Every tip, donation, and dollar of support means something while DA PRINXE builds this brand from the ground up. He does not take that lightly. The love goes both ways — the same respect he shows his community is the reason he keeps showing up, writing what he lives, and putting the city on the record."
      />
      <Suspense
        fallback={
          <p className="px-4 py-16 text-center text-sm text-white/50">
            Opening the till…
          </p>
        }
      >
        <PayDesk />
      </Suspense>
    </div>
  )
}
