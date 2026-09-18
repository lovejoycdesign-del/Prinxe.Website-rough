import Image from "next/image"
import { bookingOffers, cashApp, money } from "@/lib/data"
import { bagCount, bagTotal } from "@/lib/bag-cookie"
import type { CartLine } from "@/lib/cart-line"
import { demoPay } from "@/app/bag/actions"
import { BagEmpty, BagLines } from "@/components/bag-lines"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const tips = [5, 10, 25, 50]

export type PayTab = "bag" | "tip" | "book"

export function PayDesk({
  tab,
  items,
  paid,
  error,
  amountParam,
  offerParam,
}: {
  tab: PayTab
  items: CartLine[]
  paid?: string
  error?: boolean
  amountParam?: string
  offerParam?: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <CashAppPay />
      <a
        href="/bag"
        className="mb-8 flex h-12 items-center justify-between border border-white/20 px-4 text-[12px] tracking-[0.18em] text-white hover:border-white"
      >
        <span>YOUR BAG</span>
        <span>
          {items.length > 0
            ? `${bagCount(items)} ${bagCount(items) === 1 ? "PIECE" : "PIECES"} →`
            : "VIEW →"}
        </span>
      </a>
      <p className="mb-6 text-xs text-white/45">
        Merch and booking deposits below are a demo till — no card is processed.
        Real tips go through Cash App.
      </p>
      <div className="flex h-auto w-full flex-wrap gap-1 bg-white/5 p-1">
        <a
          href="/pay"
          className={`inline-flex min-h-10 flex-1 items-center justify-center px-3 text-[12px] tracking-[0.16em] ${
            tab === "bag" ? "bg-brand text-white" : "text-white/70 hover:text-white"
          }`}
        >
          MERCH
        </a>
        <a
          href="/pay?tab=tip"
          className={`inline-flex min-h-10 flex-1 items-center justify-center px-3 text-[12px] tracking-[0.16em] ${
            tab === "tip" ? "bg-brand text-white" : "text-white/70 hover:text-white"
          }`}
        >
          TIP
        </a>
        <a
          href="/pay?tab=book"
          className={`inline-flex min-h-10 flex-1 items-center justify-center px-3 text-[12px] tracking-[0.16em] ${
            tab === "book" ? "bg-brand text-white" : "text-white/70 hover:text-white"
          }`}
        >
          DEPOSIT
        </a>
      </div>
      <div className="mt-4">
        {tab === "tip" ? (
          <TipCheckout
            amountParam={amountParam}
            paid={paid}
            error={error}
          />
        ) : tab === "book" ? (
          <DepositCheckout
            offerParam={offerParam}
            paid={paid}
            error={error}
          />
        ) : (
          <BagCheckout items={items} paid={paid} error={error} />
        )}
      </div>
    </div>
  )
}

function CashAppPay() {
  return (
    <div className="mb-10 grid gap-6 border border-white bg-white p-6 text-black sm:grid-cols-[auto_1fr] sm:items-center">
      <a
        href={cashApp.url}
        target="_blank"
        rel="noreferrer"
        className="mx-auto block shrink-0"
        aria-label={`Open Cash App ${cashApp.tag}`}
      >
        <Image
          src={cashApp.qrSrc}
          alt={`Cash App QR code for ${cashApp.tag}`}
          width={220}
          height={220}
          className="size-[200px] sm:size-[220px]"
          priority
        />
      </a>
      <div className="text-center sm:text-left">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-black/45">
          CASH APP
        </p>
        <a
          href={cashApp.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block font-display text-4xl tracking-[0.08em] text-black hover:text-brand sm:text-5xl"
        >
          {cashApp.tag}
        </a>
        <p className="mt-3 text-sm leading-6 text-black/70">
          Scan the code or tap the tag. That is the live link for tips,
          donations, and anything you want to put in the bag.
        </p>
        <a
          href={cashApp.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex h-11 items-center justify-center bg-black px-5 text-[11px] font-semibold tracking-[0.2em] text-white transition-colors hover:bg-brand"
        >
          OPEN CASH APP
        </a>
      </div>
    </div>
  )
}

function BagCheckout({
  items,
  paid,
  error,
}: {
  items: CartLine[]
  paid?: string
  error?: boolean
}) {
  if (paid) {
    return <PaidNotice amount={Number(paid)} href="/pay" />
  }
  if (items.length === 0) {
    return <BagEmpty />
  }
  return (
    <div className="panel p-5">
      <BagLines items={items} />
      <p className="mt-6 text-right font-display text-3xl tracking-wide">
        {money(bagTotal(items))}
      </p>
      <CheckoutForm
        amount={bagTotal(items)}
        label="Pay merch"
        kind="bag"
        error={error}
      />
    </div>
  )
}

function TipCheckout({
  amountParam,
  paid,
  error,
}: {
  amountParam?: string
  paid?: string
  error?: boolean
}) {
  if (paid) {
    return <PaidNotice amount={Number(paid)} href="/pay?tab=tip" />
  }
  const selected = Number(amountParam) || 10
  return (
    <div className="panel p-5">
      <p className="text-sm text-white/60">
        Prefer a number first? Pick an amount here, then send it on Cash App at{" "}
        <a
          href={cashApp.url}
          target="_blank"
          rel="noreferrer"
          className="text-white underline underline-offset-4"
        >
          {cashApp.tag}
        </a>
        . Every tip is a thank-you, not a transaction with strings.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tips.map((n) => (
          <a
            key={n}
            href={`/pay?tab=tip&amount=${n}`}
            className={`inline-flex min-h-11 min-w-16 items-center justify-center border px-3 py-2 text-sm ${
              selected === n ? "border-brand bg-brand" : "border-white/20"
            }`}
          >
            {money(n)}
          </a>
        ))}
      </div>
      <CheckoutForm
        amount={selected}
        label="Send tip"
        kind="tip"
        error={error}
      />
    </div>
  )
}

function DepositCheckout({
  offerParam,
  paid,
  error,
}: {
  offerParam?: string
  paid?: string
  error?: boolean
}) {
  if (paid) {
    return <PaidNotice amount={Number(paid)} href="/pay?tab=book" />
  }
  const offerId = offerParam ?? bookingOffers[0].id
  const offer = bookingOffers.find((o) => o.id === offerId) ?? bookingOffers[0]
  return (
    <div className="panel p-5">
      <div className="grid gap-2">
        {bookingOffers.map((o) => (
          <a
            key={o.id}
            href={`/pay?tab=book&offer=${o.id}`}
            className={`border px-3 py-3 text-left ${
              offer.id === o.id ? "border-brand" : "border-white/15"
            }`}
          >
            <p className="text-sm font-semibold tracking-wide">{o.title}</p>
            <p className="text-xs text-white/50">
              {o.price} · deposit {money(o.deposit)}
            </p>
          </a>
        ))}
      </div>
      <CheckoutForm
        amount={offer.deposit}
        label="Pay deposit"
        kind="book"
        error={error}
      />
    </div>
  )
}

function PaidNotice({ amount, href }: { amount: number; href: string }) {
  return (
    <div className="panel p-5">
      <p className="font-display text-3xl tracking-[0.1em]">PAID.</p>
      <p className="mt-2 text-sm text-white/65">
        {money(Math.max(amount, 0))} logged on this device. No live processor is
        attached yet.
      </p>
      <a
        href={href}
        className="mt-4 inline-flex h-12 items-center bg-brand px-5 text-[12px] tracking-[0.18em] text-white"
      >
        RUN ANOTHER
      </a>
    </div>
  )
}

function CheckoutForm({
  amount,
  label,
  kind,
  error,
}: {
  amount: number
  label: string
  kind: PayTab
  error?: boolean
}) {
  const pretty = money(Math.max(amount, 0))
  return (
    <form action={demoPay} className="mt-6 space-y-3">
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="amount" value={amount} />
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <Label htmlFor={`${kind}-cardname`}>Name on card</Label>
          <Input
            id={`${kind}-cardname`}
            name="cardname"
            className="mt-1 h-10 rounded-none"
            placeholder="REAL ONE"
          />
        </div>
        <div>
          <Label htmlFor={`${kind}-card`}>Card number</Label>
          <Input
            id={`${kind}-card`}
            name="card"
            className="mt-1 h-10 rounded-none"
            placeholder="4242 4242 4242 4242"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor={`${kind}-exp`}>Exp</Label>
          <Input
            id={`${kind}-exp`}
            name="exp"
            placeholder="09/28"
            className="mt-1 h-10 rounded-none"
          />
        </div>
        <div>
          <Label htmlFor={`${kind}-cvc`}>CVC</Label>
          <Input
            id={`${kind}-cvc`}
            name="cvc"
            placeholder="123"
            className="mt-1 h-10 rounded-none"
          />
        </div>
      </div>
      {error ? (
        <p className="text-xs text-brand">
          Name and a card number (demo — any 12+ digits).
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.18em] text-white"
      >
        {`${label.toUpperCase()} · ${pretty}`}
      </button>
    </form>
  )
}
