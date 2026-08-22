import type { Metadata } from "next"
import Link from "next/link"
import { shows } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "Tour",
  description: "Upcoming DAPRINXE dates. Grab tickets before the room is gone.",
}

export default function TourPage() {
  return (
    <div>
      <PageBand
        kicker="ON THE ROAD"
        title="TOUR"
        copy="Same set, different city. If your town is not on the list, book the room and we will talk."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <ul className="divide-y divide-white/10 border border-white/10">
          {shows.map((show) => (
            <li
              key={show.id}
              className="flex flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="grid gap-1 sm:grid-cols-[88px_1fr] sm:items-center sm:gap-6">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-brand">
                  {show.date}
                </p>
                <div>
                  <p className="text-sm font-semibold tracking-wide">{show.venue}</p>
                  <p className="text-xs text-white/50">{show.city}</p>
                </div>
              </div>
              {show.status === "sold-out" ? (
                <span className="text-[11px] tracking-[0.18em] text-white/35">
                  SOLD OUT
                </span>
              ) : show.status === "soon" ? (
                <span className="text-[11px] tracking-[0.18em] text-white/45">
                  ON SALE SOON
                </span>
              ) : (
                <Link
                  href={show.ticketUrl ?? "/pay"}
                  className="inline-flex h-9 items-center justify-center bg-brand px-4 text-[10px] font-semibold tracking-[0.18em] text-white hover:bg-brand/85"
                >
                  TICKETS
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="border border-brand px-4 py-2 text-[11px] tracking-[0.16em] text-brand hover:bg-brand hover:text-white"
          >
            BOOK YOUR CITY
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 px-4 py-2 text-[11px] tracking-[0.16em] text-white/70 hover:text-white"
          >
            PRESS / GUEST LIST
          </Link>
        </div>
      </div>
    </div>
  )
}
