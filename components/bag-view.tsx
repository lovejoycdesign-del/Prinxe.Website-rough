import { money } from "@/lib/data"
import { bagCount, bagTotal } from "@/lib/bag-cookie"
import type { CartLine } from "@/lib/cart-line"
import { BagEmpty, BagLines } from "@/components/bag-lines"

export function BagView({ items }: { items: CartLine[] }) {
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <BagEmpty />
      </div>
    )
  }

  const count = bagCount(items)
  const total = bagTotal(items)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="panel p-5 sm:p-6">
        <p className="text-[11px] tracking-[0.18em] text-white/50">
          {count} {count === 1 ? "PIECE" : "PIECES"}
        </p>
        <div className="mt-4">
          <BagLines items={items} />
        </div>
        <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
          <p className="text-[11px] tracking-[0.18em] text-white/50">TOTAL</p>
          <p className="font-display text-3xl tracking-wide">{money(total)}</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="/merch"
            className="inline-flex h-12 items-center justify-center border border-white/25 text-[12px] tracking-[0.2em] hover:border-white"
          >
            KEEP SHOPPING
          </a>
          <a
            href="/pay"
            className="inline-flex h-12 items-center justify-center bg-brand text-[12px] tracking-[0.2em] text-white hover:bg-brand/85"
          >
            CHECKOUT →
          </a>
        </div>
      </div>
    </div>
  )
}
