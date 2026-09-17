"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { money, type MerchItem } from "@/lib/data"
import { AddToCart } from "@/components/add-to-cart"

export function MerchDetailView({ item }: { item: MerchItem }) {
  const options = item.variants ?? []
  const [activeId, setActiveId] = useState(options[0]?.id ?? "")
  const active = options.find((o) => o.id === activeId) ?? options[0]
  const selected: MerchItem = {
    ...item,
    title: active?.label ?? item.title,
    image: active?.image ?? item.image,
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-black ring-1 ring-white/10">
        <Image
          src={selected.image}
          alt={selected.title}
          fill
          className="object-contain"
          priority
          key={selected.image}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[11px] tracking-[0.24em] text-brand">{item.tag}</p>
        <h1 className="font-display mt-2 text-5xl tracking-[0.08em]">
          {item.title}
        </h1>
        <p className="mt-3 text-2xl text-brand">{money(item.price)}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
          {item.description}
        </p>
        {options.length > 0 ? (
          <div className="mt-6 flex gap-2">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveId(option.id)}
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
        ) : null}
        <div className="mt-8">
          <AddToCart item={selected} optionLabel={active?.label} />
        </div>
        <Link
          href="/pay"
          className="mt-4 text-[11px] tracking-[0.16em] text-white/50 hover:text-white"
        >
          GO TO CHECKOUT →
        </Link>
      </div>
    </div>
  )
}
