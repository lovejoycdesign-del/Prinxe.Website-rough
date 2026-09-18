"use client"

import { money, type MerchItem } from "@/lib/data"
import { merchSelectionToLine } from "@/lib/cart-line"
import { useCart } from "@/hooks/use-cart"
import { BUY_FORM_ID, MerchSizeNames } from "@/components/merch-switch"

export function AddToCart({ item }: { item: MerchItem }) {
  const { add } = useCart()
  const defaultSize = item.sizes[2] ?? item.sizes[0]

  return (
    <form
      id={BUY_FORM_ID}
      action="/bag"
      method="get"
      className="space-y-4"
      onSubmit={(event) => {
        const form = event.currentTarget
        const data = new FormData(form)
        const line = merchSelectionToLine(
          String(data.get("slug") || item.slug),
          String(data.get("option") || "") || null,
          String(data.get("size") || defaultSize)
        )
        if (!line) return
        event.preventDefault()
        add(line)
        window.location.assign("/bag")
      }}
    >
      <input type="hidden" name="slug" value={item.slug} />
      <MerchSizeNames
        name="size"
        sizes={item.sizes}
        defaultSize={defaultSize}
      />
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.2em] text-white hover:bg-brand/85"
      >
        ADD TO BAG · {money(item.price)}
      </button>
      <a
        href="/bag"
        className="inline-flex h-12 w-full items-center justify-center border border-white/25 text-[12px] tracking-[0.2em] text-white hover:border-white"
      >
        VIEW BAG →
      </a>
    </form>
  )
}
