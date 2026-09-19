import { money } from "@/lib/data"
import { cartLineKey, type CartLine } from "@/lib/cart-line"

export function BagLines({
  items,
  returnTo = "/bag",
}: {
  items: CartLine[]
  returnTo?: "/bag" | "/pay"
}) {
  return (
    <ul className="divide-y divide-white/10">
      {items.map((line) => {
        const key = cartLineKey(line)
        return (
          <li key={key} className="flex gap-4 py-4 first:pt-0 last:pb-0">
            <img
              src={line.image}
              alt=""
              className="size-24 shrink-0 bg-black object-cover sm:size-28"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em]">
                    {line.title}
                  </p>
                  {line.option ? (
                    <p className="mt-1 text-xs tracking-[0.08em] text-white/50">
                      {line.option}
                    </p>
                  ) : null}
                  <p className="mt-1 text-xs tracking-[0.08em] text-white/50">
                    SIZE {line.size}
                  </p>
                </div>
                <p className="text-sm text-brand">
                  {money(line.price * line.qty)}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <form action="/bag/update" method="post">
                  <input type="hidden" name="key" value={key} />
                  <input type="hidden" name="qty" value={line.qty - 1} />
                  <input type="hidden" name="next" value={returnTo} />
                  <button
                    type="submit"
                    className="grid size-9 place-items-center border border-white/20 text-lg leading-none"
                    aria-label={`Fewer ${line.title}`}
                  >
                    −
                  </button>
                </form>
                <span className="w-8 text-center text-sm">{line.qty}</span>
                <form action="/bag/update" method="post">
                  <input type="hidden" name="key" value={key} />
                  <input type="hidden" name="qty" value={line.qty + 1} />
                  <input type="hidden" name="next" value={returnTo} />
                  <button
                    type="submit"
                    className="grid size-9 place-items-center border border-white/20 text-lg leading-none"
                    aria-label={`More ${line.title}`}
                  >
                    +
                  </button>
                </form>
                <form action="/bag/update" method="post">
                  <input type="hidden" name="key" value={key} />
                  <input type="hidden" name="qty" value="0" />
                  <input type="hidden" name="next" value={returnTo} />
                  <button
                    type="submit"
                    className="ml-1 inline-flex min-h-9 items-center border border-white/20 px-3 text-[10px] tracking-[0.14em] text-white/70 hover:border-white hover:text-white"
                  >
                    REMOVE
                  </button>
                </form>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function BagEmpty() {
  return (
    <div className="panel p-10 text-center">
      <p className="font-display text-3xl tracking-[0.1em]">BAG IS EMPTY</p>
      <p className="mt-2 text-sm text-white/50">
        Pick a color and size on merch, tap add to bag, and the piece shows up
        here.
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
