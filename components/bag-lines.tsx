"use client"

import { money } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"

export function BagLines() {
  const { items, setQty, remove } = useCart()

  return (
    <ul className="divide-y divide-white/10">
      {items.map((line) => (
        <li key={`${line.slug}-${line.size}`} className="flex gap-4 py-4 first:pt-0 last:pb-0">
          <img
            src={line.image}
            alt=""
            className="size-24 shrink-0 bg-black object-cover sm:size-28"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-[0.12em]">{line.title}</p>
                <p className="mt-1 text-xs tracking-[0.08em] text-white/50">
                  {line.size}
                </p>
              </div>
              <p className="text-sm text-brand">{money(line.price * line.qty)}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="grid size-9 place-items-center border border-white/20 text-lg leading-none"
                onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                aria-label={`Fewer ${line.title}`}
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{line.qty}</span>
              <button
                type="button"
                className="grid size-9 place-items-center border border-white/20 text-lg leading-none"
                onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                aria-label={`More ${line.title}`}
              >
                +
              </button>
              <button
                type="button"
                className="ml-1 min-h-9 px-2 text-[10px] tracking-[0.14em] text-white/45 hover:text-white"
                onClick={() => remove(line.slug, line.size)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function BagEmpty() {
  return (
    <div className="panel p-10 text-center">
      <p className="font-display text-3xl tracking-[0.1em]">BAG IS EMPTY</p>
      <p className="mt-2 text-sm text-white/50">
        Nothing in here yet. Add a piece from merch and it will show up on this
        page.
      </p>
      <a
        href="/merch"
        className="mt-6 inline-flex h-11 items-center bg-brand px-5 text-[11px] tracking-[0.16em]"
      >
        SHOP MERCH
      </a>
    </div>
  )
}
