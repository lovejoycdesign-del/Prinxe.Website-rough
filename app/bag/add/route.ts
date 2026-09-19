import { NextRequest, NextResponse } from "next/server"
import {
  BAG_COOKIE,
  applyBagSelection,
  bagCookieOptions,
  parseBagCookie,
} from "@/lib/bag-cookie"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const slug = String(formData.get("slug") ?? "")
  const option = String(formData.get("option") ?? "") || null
  const size = String(formData.get("size") ?? "") || null
  const current = parseBagCookie(request.cookies.get(BAG_COOKIE)?.value)
  const items = applyBagSelection(current, slug, option, size)
  const res = new NextResponse(null, {
    status: 303,
    headers: { Location: items ? "/bag?added=1" : "/merch" },
  })
  if (items) {
    res.cookies.set(BAG_COOKIE, JSON.stringify(items), bagCookieOptions)
  }
  return res
}
