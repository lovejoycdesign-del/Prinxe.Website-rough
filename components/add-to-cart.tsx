"use client"

import { useState } from "react"
import { toast } from "sonner"
import { money, type MerchItem } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"

export function AddToCart({ item }: { item: MerchItem }) {
  const { add } = useCart()
  const [size, setSize] = useState(item.sizes[2] ?? item.sizes[0])

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] tracking-[0.18em] text-white/50">SIZE</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`min-w-12 border px-3 py-2 text-xs tracking-[0.12em] ${
                size === s
                  ? "border-brand bg-brand text-white"
                  : "border-white/20 text-white/70 hover:border-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <Button
        className="h-12 w-full rounded-none bg-brand text-[12px] tracking-[0.2em]"
        onClick={() => {
          add({
            slug: item.slug,
            title: item.title,
            price: item.price,
            image: item.image,
            size,
          })
          toast.success(`${item.title} · ${size} added to bag.`)
        }}
      >
        ADD TO BAG · {money(item.price)}
      </Button>
    </div>
  )
}
