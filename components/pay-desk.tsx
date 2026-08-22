"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { bookingOffers, money, shows } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tips = [5, 10, 25, 50]

export function PayDesk() {
  const params = useSearchParams()
  const intent = params.get("intent")
  const showId = params.get("show")
  const defaultTab =
    intent === "tickets" ? "tickets" : intent === "book" ? "book" : "bag"

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="mb-6 text-xs text-white/45">
        Demo checkout. Use it to walk the flow — no card is processed.
      </p>
      <Tabs defaultValue={defaultTab}>
        <TabsList className="h-auto w-full flex-wrap rounded-none bg-white/5 p-1">
          <TabsTrigger value="bag" className="rounded-none">
            MERCH
          </TabsTrigger>
          <TabsTrigger value="tip" className="rounded-none">
            TIP
          </TabsTrigger>
          <TabsTrigger value="tickets" className="rounded-none">
            TICKETS
          </TabsTrigger>
          <TabsTrigger value="book" className="rounded-none">
            DEPOSIT
          </TabsTrigger>
        </TabsList>
        <TabsContent value="bag">
          <BagCheckout />
        </TabsContent>
        <TabsContent value="tip">
          <TipCheckout />
        </TabsContent>
        <TabsContent value="tickets">
          <TicketCheckout preset={showId} />
        </TabsContent>
        <TabsContent value="book">
          <DepositCheckout />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BagCheckout() {
  const { items, total, setQty, remove, clear } = useCart()
  if (items.length === 0) {
    return (
      <Empty
        title="BAG IS EMPTY"
        copy="The Real Ones hoodie is waiting."
        href="/merch"
        cta="SHOP MERCH"
      />
    )
  }
  return (
    <div className="panel p-5">
      <ul className="space-y-4">
        {items.map((line) => (
          <li key={`${line.slug}-${line.size}`} className="flex gap-3">
            <Image
              src={line.image}
              alt=""
              width={64}
              height={64}
              className="size-16 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold tracking-wide">{line.title}</p>
              <p className="text-xs text-white/45">
                {line.size} · {money(line.price)}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  className="size-7 border border-white/20"
                  onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{line.qty}</span>
                <button
                  type="button"
                  className="size-7 border border-white/20"
                  onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="ml-2 text-[10px] tracking-[0.14em] text-white/40"
                  onClick={() => remove(line.slug, line.size)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-right font-display text-3xl tracking-wide">
        {money(total)}
      </p>
      <CheckoutForm
        amount={total}
        label="Pay merch"
        onPaid={() => {
          clear()
        }}
      />
    </div>
  )
}

function TipCheckout() {
  const [amount, setAmount] = useState(10)
  const [custom, setCustom] = useState("")
  const value = custom ? Number(custom) || 0 : amount
  return (
    <div className="panel p-5">
      <p className="text-sm text-white/60">
        Fuel the next video. Every tip is a thank-you, not a transaction with
        strings.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tips.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => {
              setAmount(n)
              setCustom("")
            }}
            className={`min-w-16 border px-3 py-2 text-sm ${
              !custom && amount === n
                ? "border-brand bg-brand"
                : "border-white/20"
            }`}
          >
            {money(n)}
          </button>
        ))}
      </div>
      <Input
        type="number"
        min={1}
        placeholder="Custom amount"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        className="mt-4 h-10 rounded-none"
      />
      <CheckoutForm amount={value} label="Send tip" />
    </div>
  )
}

function TicketCheckout({ preset }: { preset: string | null }) {
  const available = shows.filter((s) => s.status === "on-sale")
  const [show, setShow] = useState(preset ?? available[0]?.id ?? "")
  const [qty, setQty] = useState(2)
  const selected = available.find((s) => s.id === show)
  const price = 45
  if (available.length === 0) {
    return <Empty title="NO DATES ON SALE" copy="Check back." href="/tour" cta="TOUR" />
  }
  return (
    <div className="panel p-5">
      <Label htmlFor="show">Show</Label>
      <select
        id="show"
        value={show}
        onChange={(e) => setShow(e.target.value)}
        className="mt-1 h-10 w-full border border-white/15 bg-black px-2 text-sm"
      >
        {available.map((s) => (
          <option key={s.id} value={s.id}>
            {s.date} · {s.venue} · {s.city}
          </option>
        ))}
      </select>
      <div className="mt-4 flex items-center gap-3">
        <Label>Qty</Label>
        <Input
          type="number"
          min={1}
          max={8}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="h-10 w-24 rounded-none"
        />
      </div>
      <p className="mt-4 text-sm text-white/50">
        GA {money(price)} · {selected?.venue}
      </p>
      <CheckoutForm amount={price * qty} label="Pay tickets" />
    </div>
  )
}

function DepositCheckout() {
  const [offerId, setOfferId] = useState(bookingOffers[0].id)
  const offer = bookingOffers.find((o) => o.id === offerId) ?? bookingOffers[0]
  return (
    <div className="panel p-5">
      <div className="grid gap-2">
        {bookingOffers.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setOfferId(o.id)}
            className={`border px-3 py-3 text-left ${
              offerId === o.id ? "border-brand" : "border-white/15"
            }`}
          >
            <p className="text-sm font-semibold tracking-wide">{o.title}</p>
            <p className="text-xs text-white/50">
              {o.price} · deposit {money(o.deposit)}
            </p>
          </button>
        ))}
      </div>
      <CheckoutForm amount={offer.deposit} label="Pay deposit" />
    </div>
  )
}

function CheckoutForm({
  amount,
  label,
  onPaid,
}: {
  amount: number
  label: string
  onPaid?: () => void
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  )
  const [error, setError] = useState("")
  const pretty = useMemo(() => money(Math.max(amount, 0)), [amount])

  function pay(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (amount <= 0) {
      setStatus("error")
      setError("Amount has to be more than zero.")
      return
    }
    const data = new FormData(e.currentTarget)
    const name = String(data.get("cardname") ?? "").trim()
    const number = String(data.get("card") ?? "").replace(/\s/g, "")
    if (!name || number.length < 12) {
      setStatus("error")
      setError("Name and a card number (demo — any 12+ digits).")
      return
    }
    setError("")
    setStatus("loading")
    window.setTimeout(() => {
      setStatus("done")
      onPaid?.()
      toast.success(`Demo payment recorded · ${pretty}`)
    }, 900)
  }

  if (status === "done") {
    return (
      <div className="mt-6 border border-brand/40 bg-brand/10 p-5">
        <p className="font-display text-3xl tracking-[0.1em]">PAID.</p>
        <p className="mt-2 text-sm text-white/65">
          {pretty} logged on this device. No live processor is attached yet.
        </p>
        <Button
          className="mt-4 rounded-none bg-brand"
          onClick={() => setStatus("idle")}
        >
          Run another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={pay} className="mt-6 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <Label htmlFor="cardname">Name on card</Label>
          <Input
            id="cardname"
            name="cardname"
            className="mt-1 h-10 rounded-none"
            placeholder="REAL ONE"
          />
        </div>
        <div>
          <Label htmlFor="card">Card number</Label>
          <Input
            id="card"
            name="card"
            className="mt-1 h-10 rounded-none"
            placeholder="4242 4242 4242 4242"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="exp">Exp</Label>
          <Input id="exp" name="exp" placeholder="09/28" className="mt-1 h-10 rounded-none" />
        </div>
        <div>
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" name="cvc" placeholder="123" className="mt-1 h-10 rounded-none" />
        </div>
      </div>
      {status === "error" ? <p className="text-xs text-brand">{error}</p> : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 w-full rounded-none bg-brand text-[12px] tracking-[0.18em]"
      >
        {status === "loading" ? "PROCESSING…" : `${label.toUpperCase()} · ${pretty}`}
      </Button>
    </form>
  )
}

function Empty({
  title,
  copy,
  href,
  cta,
}: {
  title: string
  copy: string
  href: string
  cta: string
}) {
  return (
    <div className="panel p-10 text-center">
      <p className="font-display text-3xl tracking-[0.1em]">{title}</p>
      <p className="mt-2 text-sm text-white/50">{copy}</p>
      <Link
        href={href}
        className="mt-6 inline-flex bg-brand px-4 py-2 text-[11px] tracking-[0.16em]"
      >
        {cta}
      </Link>
    </div>
  )
}
