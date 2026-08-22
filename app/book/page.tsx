import type { Metadata } from "next"
import Link from "next/link"
import { bookingOffers, money } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "Book",
  description: "Book DAPRINXE for shows, features, sessions, and brand work.",
}

export default function BookPage() {
  return (
    <div>
      <PageBand
        kicker="THE CALENDAR"
        title="BOOK"
        copy="Shows, verses, sessions, campaigns. Hold the date with a deposit, then we lock the details."
      />
      <div className="mx-auto grid max-w-5xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        {bookingOffers.map((offer) => (
          <article key={offer.id} className="panel flex flex-col p-6">
            <p className="text-[11px] tracking-[0.2em] text-brand">{offer.price}</p>
            <h2 className="font-display mt-2 text-3xl tracking-[0.1em]">
              {offer.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
              {offer.copy}
            </p>
            <p className="mt-4 text-xs text-white/45">
              Deposit to hold · {money(offer.deposit)}
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href="/pay?intent=book"
                className="bg-brand px-3 py-2 text-[10px] tracking-[0.16em]"
              >
                PAY DEPOSIT
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 px-3 py-2 text-[10px] tracking-[0.16em]"
              >
                TALK FIRST
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
