import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { PayDesk, type PayTab } from "@/components/pay-desk"
import { getBagItems } from "@/lib/bag-cookie"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Payment",
  description:
    "Tip DA PRINXE on Cash App at $Daprinxe12. Every donation helps him build the brand.",
}

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value
}

export default async function PayPage({
  searchParams,
}: {
  searchParams: Promise<{
    tab?: string | string[]
    intent?: string | string[]
    paid?: string | string[]
    error?: string | string[]
    amount?: string | string[]
    offer?: string | string[]
  }>
}) {
  const params = await searchParams
  const rawTab = first(params.tab)
  const intent = first(params.intent)
  const tab: PayTab =
    rawTab === "tip" || rawTab === "book"
      ? rawTab
      : intent === "book"
        ? "book"
        : "bag"
  const items = await getBagItems()

  return (
    <div>
      <PageBand
        kicker="THE BAG"
        title="PAYMENT"
        copy="Every tip, donation, and dollar of support means something while DA PRINXE builds this brand from the ground up. He does not take that lightly. The love goes both ways — the same respect he shows his community is the reason he keeps showing up, writing what he lives, putting his pain on the records and his soul into the sound."
      />
      <PayDesk
        tab={tab}
        items={items}
        paid={first(params.paid)}
        error={first(params.error) === "1"}
      />
    </div>
  )
}
