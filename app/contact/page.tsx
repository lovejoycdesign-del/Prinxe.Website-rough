import type { Metadata } from "next"
import { contacts } from "@/lib/data"
import { PageBand } from "@/components/page-band"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Artist and manager contact for DAPRINXE.",
}

export default function ContactPage() {
  return (
    <div>
      <PageBand
        kicker="THE LINE"
        title="CONTACT"
        copy="Artist details stay blank until he drops them. Management is the other line."
      />
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <ContactCard person={contacts.artist} />
          <ContactCard person={contacts.manager} />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

function ContactCard({
  person,
}: {
  person: {
    name: string
    role: string
    email: string
    phone: string
    location: string
  }
}) {
  return (
    <article className="panel p-6">
      <p className="text-[11px] tracking-[0.22em] text-brand">{person.role.toUpperCase()}</p>
      <h2 className="font-display mt-2 text-4xl tracking-[0.08em] text-white">
        {person.name || "—"}
      </h2>
      <dl className="mt-6 space-y-4 text-sm">
        <Field label="Name" value={person.name} />
        <Field
          label="Email"
          value={person.email}
          href={person.email ? `mailto:${person.email}` : undefined}
        />
        <Field
          label="Phone"
          value={person.phone}
          href={person.phone ? `tel:${person.phone.replace(/\D/g, "")}` : undefined}
        />
        <Field label="Location" value={person.location} />
      </dl>
    </article>
  )
}

function Field({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const shown = value.trim() ? value : "—"
  return (
    <div className="border-t border-white/10 pt-4">
      <dt className="text-[10px] tracking-[0.18em] text-white/40">{label}</dt>
      <dd className="mt-1 text-white">
        {href && value.trim() ? (
          <a href={href} className="hover:text-brand">
            {shown}
          </a>
        ) : (
          <span className={value.trim() ? "" : "text-white/25"}>{shown}</span>
        )}
      </dd>
    </div>
  )
}
