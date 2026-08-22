import type { Metadata } from "next"
import { Suspense } from "react"
import { PageBand } from "@/components/page-band"
import { PayDesk } from "@/components/pay-desk"

export const metadata: Metadata = {
  title: "Pay",
  description: "Checkout merch, send a tip, or drop a booking deposit. Demo payments — no live charges.",
}

export default function PayPage() {
  return (
    <div>
      <PageBand
        kicker="THE BAG"
        title="PAY"
        copy="Merch checkout, tips, tickets, and booking deposits. This is a demo till — nothing is charged."
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
