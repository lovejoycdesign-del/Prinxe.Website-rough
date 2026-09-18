"use client"

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react"
import { KEYS, readStore, writeStore } from "@/lib/storage"
import { usePersistentState } from "@/hooks/use-persistent-state"
import {
  cartLineKey,
  merchSelectionToLine,
  type CartLine,
} from "@/lib/cart-line"

export type { CartLine }

type CartContextValue = {
  items: CartLine[]
  ready: boolean
  add: (item: Omit<CartLine, "qty">, qty?: number) => void
  addSelection: (
    slug: string,
    optionId?: string | null,
    size?: string | null
  ) => boolean
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  clear: () => void
  count: number
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems, ready] = usePersistentState<CartLine[]>(
    KEYS.cart,
    []
  )

  const value = useMemo<CartContextValue>(() => {
    const commit = (next: CartLine[]) => {
      writeStore(KEYS.cart, next)
      setItems(next)
    }

    const add: CartContextValue["add"] = (item, qty = 1) => {
      if (!merchSelectionToLine(item.slug)) return
      const prev = readStore<CartLine[]>(KEYS.cart, [])
      const i = prev.findIndex(
        (line) => cartLineKey(line) === cartLineKey(item)
      )
      const next =
        i >= 0
          ? prev.map((line, idx) =>
              idx === i ? { ...line, qty: line.qty + qty } : line
            )
          : [...prev, { ...item, qty }]
      commit(next)
    }

    return {
      items,
      ready,
      add,
      addSelection: (slug, optionId, size) => {
        const line = merchSelectionToLine(slug, optionId, size)
        if (!line) return false
        add(line)
        return true
      },
      setQty: (key, qty) => {
        const prev = readStore<CartLine[]>(KEYS.cart, [])
        const next =
          qty <= 0
            ? prev.filter((line) => cartLineKey(line) !== key)
            : prev.map((line) =>
                cartLineKey(line) === key ? { ...line, qty } : line
              )
        commit(next)
      },
      remove: (key) => {
        const prev = readStore<CartLine[]>(KEYS.cart, [])
        commit(prev.filter((line) => cartLineKey(line) !== key))
      },
      clear: () => commit([]),
      count: items.reduce((n, line) => n + line.qty, 0),
      total: items.reduce((n, line) => n + line.price * line.qty, 0),
    }
  }, [items, ready, setItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
