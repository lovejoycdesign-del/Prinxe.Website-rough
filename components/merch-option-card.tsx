"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { money, type MerchItem } from "@/lib/data"

export function MerchOptionCard({ item }: { item: MerchItem }) {
  const options = item.variants ?? []
  const [activeId, setActiveId] = useState(options[0]?.id ?? "")
  const active = options.find((o) => o.id === activeId) ?? options[0]
  const image = active?.image ?? item.image
  const label = active?.label ?? item.title

  return (
    <div className="panel overflow-hidden">
      <Link href={`/merch/${item.slug}`} className="group block">
        <div className="relative aspect-[3/2] bg-black">
          <Image
            src={image}
            alt={label}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            key={image}
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
      <div className="flex gap-2 px-4 pb-4">
        {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setActiveId(option.id)
              }}
              className={`min-w-20 border px-3 py-2 text-[10px] tracking-[0.16em] ${
                option.id === activeId
                  ? "border-brand bg-brand text-white"
                  : "border-white/20 text-white/70 hover:border-white"
              }`}
            >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
