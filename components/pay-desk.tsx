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
}: {
  tab: PayTab
  items: CartLine[]
  paid?: string
  error?: boolean
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
      <div className="pay-switch">
        <input
          id="pay-tab-bag"
          className="pay-tab-input"
          type="radio"
          name="pay-tab"
          value="bag"
          defaultChecked={tab === "bag"}
        />
        <input
          id="pay-tab-tip"
          className="pay-tab-input"
          type="radio"
          name="pay-tab"
          value="tip"
          defaultChecked={tab === "tip"}
        />
        <input
          id="pay-tab-book"
          className="pay-tab-input"
          type="radio"
          name="pay-tab"
          value="book"
          defaultChecked={tab === "book"}
        />
        <div className="pay-tab-bar">
          <label htmlFor="pay-tab-bag">MERCH</label>
          <label htmlFor="pay-tab-tip">TIP</label>
          <label htmlFor="pay-tab-book">DEPOSIT</label>
        </div>
        <div className="pay-panel" data-tab="bag">
          <BagCheckout items={items} paid={paid} error={error} />
        </div>
        <div className="pay-panel" data-tab="tip">
          <TipCheckout paid={paid} error={error} />
        </div>
        <div className="pay-panel" data-tab="book">
          <DepositCheckout paid={paid} error={error} />
        </div>
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
    return <PaidNotice amount={Number(paid)} />
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
  paid,
  error,
}: {
  paid?: string
  error?: boolean
}) {
  if (paid) {
    return <PaidNotice amount={Number(paid)} />
  }
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
      <form action={demoPay} className="pay-form mt-4 space-y-3">
        <input type="hidden" name="kind" value="tip" />
        <div className="flex flex-wrap gap-2">
          {tips.map((n) => (
            <label key={n} className="pay-choice">
              <input
                type="radio"
                name="amount"
                value={n}
                defaultChecked={n === 10}
                className="pay-choice-input"
              />
              {money(n)}
            </label>
          ))}
        </div>
        <CardFields kind="tip" error={error} />
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.18em] text-white"
        >
          SEND TIP ·{" "}
          {tips.map((n) => (
            <span key={n} className="pay-live-amount" data-value={String(n)}>
              {money(n)}
            </span>
          ))}
        </button>
      </form>
    </div>
  )
}

function DepositCheckout({
  paid,
  error,
}: {
  paid?: string
  error?: boolean
}) {
  if (paid) {
    return <PaidNotice amount={Number(paid)} />
  }
  return (
    <div className="panel p-5">
      <form action={demoPay} className="pay-form space-y-3">
        <input type="hidden" name="kind" value="book" />
        <div className="grid gap-2">
          {bookingOffers.map((o, index) => (
            <label key={o.id} className="pay-offer">
              <input
                type="radio"
                name="offer"
                value={o.id}
                defaultChecked={index === 0}
                className="pay-choice-input"
              />
              <span>
                <span className="block text-sm font-semibold tracking-wide">
                  {o.title}
                </span>
                <span className="block text-xs text-white/50 pay-offer-meta">
                  {o.price} · deposit {money(o.deposit)}
                </span>
              </span>
            </label>
          ))}
        </div>
        <CardFields kind="book" error={error} />
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.18em] text-white"
        >
          PAY DEPOSIT ·{" "}
          {bookingOffers.map((o) => (
            <span key={o.id} className="pay-live-amount" data-value={o.id}>
              {money(o.deposit)}
            </span>
          ))}
        </button>
      </form>
    </div>
  )
}

function PaidNotice({ amount }: { amount: number }) {
  return (
    <div className="panel p-5">
      <p className="font-display text-3xl tracking-[0.1em]">PAID.</p>
      <p className="mt-2 text-sm text-white/65">
        {money(Math.max(amount, 0))} logged on this device. No live processor is
        attached yet.
      </p>
      <a
        href="/pay"
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
      <CardFields kind={kind} error={error} />
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.18em] text-white"
      >
        {`${label.toUpperCase()} · ${pretty}`}
      </button>
    </form>
  )
}

function CardFields({ kind, error }: { kind: string; error?: boolean }) {
  return (
    <>
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
    </>
  )
}
