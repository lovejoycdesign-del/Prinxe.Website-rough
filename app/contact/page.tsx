import type { Metadata } from "next"
import { artist } from "@/lib/data"
import { PageBand } from "@/components/page-band"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Bookings, press, features, and everything else. Talk to the camp.",
}

export default function ContactPage() {
  return (
    <div>
      <PageBand
        kicker="THE LINE"
        title="CONTACT"
        copy="Shows, press, features, brand work. If it is real, it gets a reply."
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6 text-sm text-white/65">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-brand">BOOKING</p>
            <a href={`mailto:${artist.email}`} className="mt-1 block text-white">
              {artist.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-brand">PRESS</p>
            <a
              href={`mailto:${artist.pressEmail}`}
              className="mt-1 block text-white"
            >
              {artist.pressEmail}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-brand">FANS</p>
            <p className="mt-1">
              Slide the DM on the{" "}
              <a href="/inbox" className="text-white underline">
                fan inbox
              </a>
              . That room is for listeners, not invoices.
            </p>
          </div>
        </aside>
        <ContactForm />
      </div>
    </div>
  )
}
