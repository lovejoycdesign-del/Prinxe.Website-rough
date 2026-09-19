import { NextRequest, NextResponse } from "next/server"
import { bookingOffers } from "@/lib/data"
import {
  BAG_COOKIE,
  bagCookieOptions,
  bagTotal,
  parseBagCookie,
} from "@/lib/bag-cookie"

function field(formData: FormData, ...keys: string[]) {
  for (const key of keys) {
    const value = formData.get(key)
    if (typeof value === "string" && value.trim()) return value.trim()
  }
  return ""
}

function payTab(kind: string) {
  return kind === "tip" || kind === "book" ? kind : "bag"
}

function redirectTo(path: string, cookie?: string) {
  const res = new NextResponse(null, {
    status: 303,
    headers: { Location: path },
  })
  if (cookie !== undefined) {
    res.cookies.set(BAG_COOKIE, cookie, bagCookieOptions)
  }
  return res
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const name = field(formData, "cardname", "name")
  const number = field(formData, "card", "cardnumber", "number").replace(
    /[\s-]/g,
    ""
  )
  const kind = field(formData, "kind") || "bag"
  const tab = payTab(kind)
  const offer = bookingOffers.find(
    (item) => item.id === String(formData.get("offer") ?? "")
  )
  const bagItems = parseBagCookie(request.cookies.get(BAG_COOKIE)?.value)
  let amount =
    kind === "book" && offer
      ? offer.deposit
      : Number(field(formData, "amount") || 0)
  if (!(amount > 0) && tab === "bag") {
    amount = bagTotal(bagItems)
  }
  if (!name || number.length < 12 || !(amount > 0)) {
    return redirectTo(`/pay?tab=${tab}&error=1`)
  }
  return redirectTo(
    `/pay?tab=${tab}&paid=${encodeURIComponent(String(amount))}`,
    tab === "bag" ? "[]" : undefined
  )
}
