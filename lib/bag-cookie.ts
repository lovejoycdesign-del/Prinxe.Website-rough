import { cookies } from "next/headers"
import {
  cartLineKey,
  merchSelectionToLine,
  type CartLine,
} from "@/lib/cart-line"

export const BAG_COOKIE = "daprinxe.bag"

function isLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false
  const line = value as CartLine
  return (
    typeof line.slug === "string" &&
    typeof line.title === "string" &&
    typeof line.price === "number" &&
    typeof line.image === "string" &&
    typeof line.size === "string" &&
    typeof line.qty === "number"
  )
}

function readBag(raw: string): CartLine[] {
  const attempts = [raw]
  try {
    attempts.push(decodeURIComponent(raw))
  } catch {
    /* already plain */
  }
  try {
    attempts.push(decodeURIComponent(decodeURIComponent(raw)))
  } catch {
    /* not double-encoded */
  }
  for (const value of attempts) {
    try {
      const parsed = JSON.parse(value) as unknown
      if (Array.isArray(parsed)) return parsed.filter(isLine)
    } catch {
      /* try next */
    }
  }
  return []
}

export async function getBagItems(): Promise<CartLine[]> {
  const store = await cookies()
  const raw = store.get(BAG_COOKIE)?.value
  if (!raw) return []
  return readBag(raw)
}

export async function setBagItems(items: CartLine[]) {
  const store = await cookies()
  store.set(BAG_COOKIE, JSON.stringify(items), bagCookieOptions)
}

export const bagCookieOptions = {
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
  sameSite: "lax" as const,
  httpOnly: true,
}

export async function bagAfterSelection(
  slug: string,
  optionId?: string | null,
  size?: string | null
) {
  const line = merchSelectionToLine(slug, optionId, size)
  if (!line) return null
  const items = await getBagItems()
  const key = cartLineKey(line)
  const index = items.findIndex((item) => cartLineKey(item) === key)
  return index >= 0
    ? items.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    : [...items, { ...line, qty: 1 }]
}

export async function addBagSelection(
  slug: string,
  optionId?: string | null,
  size?: string | null
) {
  const next = await bagAfterSelection(slug, optionId, size)
  if (!next) return false
  await setBagItems(next)
  return true
}

export function bagCount(items: CartLine[]) {
  return items.reduce((n, line) => n + line.qty, 0)
}

export function bagTotal(items: CartLine[]) {
  return items.reduce((n, line) => n + line.price * line.qty, 0)
}
