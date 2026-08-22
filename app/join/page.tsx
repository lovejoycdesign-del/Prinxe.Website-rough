import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { JoinForm } from "@/components/join-form"

export const metadata: Metadata = {
  title: "Join the Real Ones",
  description: "Exclusive drops, first access, and the rooms before they go public.",
}

export default function JoinPage() {
  return (
    <div>
      <PageBand
        kicker="THE INNER CIRCLE"
        title="JOIN THE REAL ONES"
        copy="Exclusive drops. First access. Straight to you. No spam, no fluff — just the records, the merch, and the cities."
      />
      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <ul className="space-y-4 text-sm text-white/65">
          {[
            "Hear the next single before the timeline does.",
            "Merch restocks hit this list first.",
            "City-by-city presale codes when the tour expands.",
            "Occasional voice notes. Never a newsletter essay.",
          ].map((item) => (
            <li key={item} className="border-l-2 border-brand pl-4">
              {item}
            </li>
          ))}
        </ul>
        <JoinForm />
      </div>
    </div>
  )
}
