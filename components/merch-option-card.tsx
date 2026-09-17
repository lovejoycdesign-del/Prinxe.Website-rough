"use client"

import { useState } from "react"
import Link from "next/link"
import { money, type MerchItem } from "@/lib/data"
import { MerchOptionButtons } from "@/components/merch-option-buttons"

export function MerchOptionCard({ item }: { item: MerchItem }) {
  const options = item.variants ?? []
  const [activeId, setActiveId] = useState(options[0]?.id ?? "")
  const active = options.find((o) => o.id === activeId) ?? options[0]
  const image = active?.image ?? item.image
  const label = active?.label ?? item.title

  return (
    <div className="panel flex h-full flex-col overflow-hidden">
      <Link href={`/merch/${item.slug}`} className="group block">
        <div className="relative aspect-[3/2] bg-black">
          <img
            src={image}
            alt={label}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 bg-brand px-2 py-1 text-[10px] tracking-[0.16em]">
            {item.tag}
          </span>
        </div>
        <div className="p-4 pb-2">
          <p className="text-sm font-semibold tracking-[0.12em]">{item.title}</p>
          <p className="mt-1 text-brand">{money(item.price)}</p>
        </div>
      </Link>
      {options.length > 0 ? (
        <div className="mt-auto px-4 pb-4">
          <MerchOptionButtons
            options={options}
            activeId={activeId}
            onChange={setActiveId}
          />
        </div>
      ) : null}
    </div>
  )
}
