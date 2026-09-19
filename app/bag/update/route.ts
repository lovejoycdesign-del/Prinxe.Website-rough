import { NextRequest, NextResponse } from "next/server"
import { cartLineKey } from "@/lib/cart-line"
import {
  BAG_COOKIE,
  bagCookieOptions,
  parseBagCookie,
} from "@/lib/bag-cookie"

function nextPath(value: FormDataEntryValue | null) {
  const path = String(value ?? "/bag")
  return path === "/pay" || path.startsWith("/pay?") ? path : "/bag"
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const key = String(formData.get("key") ?? "")
  const qty = Number(formData.get("qty") ?? 0)
  const current = parseBagCookie(request.cookies.get(BAG_COOKIE)?.value)
  const items =
    qty <= 0
      ? current.filter((line) => cartLineKey(line) !== key)
      : current.map((line) =>
          cartLineKey(line) === key ? { ...line, qty } : line
        )
  const res = new NextResponse(null, {
    status: 303,
    headers: { Location: nextPath(formData.get("next")) },
  })
  res.cookies.set(BAG_COOKIE, JSON.stringify(items), bagCookieOptions)
  return res
}
