import { NextRequest, NextResponse } from "next/server"
import { bookingOffers } from "@/lib/data"
import { BAG_COOKIE, bagCookieOptions } from "@/lib/bag-cookie"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const name = String(formData.get("cardname") ?? "").trim()
  const number = String(formData.get("card") ?? "").replace(/\s/g, "")
  const kind = String(formData.get("kind") ?? "bag")
  const offer = bookingOffers.find(
    (item) => item.id === String(formData.get("offer") ?? "")
  )
  const amount =
    kind === "book" && offer
      ? offer.deposit
      : Number(formData.get("amount") ?? 0)
  const tab = kind === "tip" || kind === "book" ? kind : "bag"
  if (!name || number.length < 12 || !(amount > 0)) {
    return new NextResponse(null, {
      status: 303,
      headers: { Location: `/pay?tab=${tab}&error=1` },
    })
  }
  const res = new NextResponse(null, {
    status: 303,
    headers: {
      Location: `/pay?tab=${tab}&paid=${encodeURIComponent(String(amount))}`,
    },
  })
  if (tab === "bag") {
    res.cookies.set(BAG_COOKIE, "[]", bagCookieOptions)
  }
  return res
}
