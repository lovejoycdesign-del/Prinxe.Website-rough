import { NextResponse } from "next/server"
import {
  BAG_COOKIE,
  bagAfterSelection,
  bagCookieOptions,
} from "@/lib/bag-cookie"

export async function POST(request: Request) {
  const formData = await request.formData()
  const slug = String(formData.get("slug") ?? "")
  const option = String(formData.get("option") ?? "") || null
  const size = String(formData.get("size") ?? "") || null
  const items = await bagAfterSelection(slug, option, size)
  const res = new NextResponse(null, {
    status: 303,
    headers: { Location: items ? "/bag" : "/merch" },
  })
  if (items) {
    res.cookies.set(BAG_COOKIE, JSON.stringify(items), bagCookieOptions)
  }
  return res
}
