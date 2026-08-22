"use client"

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react"
import { merch } from "@/lib/data"
import { KEYS } from "@/lib/storage"
import { usePersistentState } from "@/hooks/use-persistent-state"

export type CartLine = {
  slug: string
  title: string
  price: number
  image: string
  size: string
  qty: number
}

type CartContextValue = {
  items: CartLine[]
  ready: boolean
  add: (item: Omit<CartLine, "qty">, qty?: number) => void
  setQty: (slug: string, size: string, qty: number) => void
  remove: (slug: string, size: string) => void
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
    const add: CartContextValue["add"] = (item, qty = 1) => {
      const product = merch.find((p) => p.slug === item.slug)
      if (!product) return
      setItems((prev) => {
        const i = prev.findIndex(
          (line) => line.slug === item.slug && line.size === item.size
        )
        if (i >= 0) {
          return prev.map((line, idx) =>
            idx === i ? { ...line, qty: line.qty + qty } : line
          )
        }
        return [...prev, { ...item, qty }]
      })
    }

    return {
      items,
      ready,
      add,
      setQty: (slug, size, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((line) => !(line.slug === slug && line.size === size))
            : prev.map((line) =>
                line.slug === slug && line.size === size
                  ? { ...line, qty }
                  : line
              )
        ),
      remove: (slug, size) =>
        setItems((prev) =>
          prev.filter((line) => !(line.slug === slug && line.size === size))
        ),
      clear: () => setItems([]),
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
