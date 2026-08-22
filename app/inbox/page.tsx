import type { Metadata } from "next"
import { PageBand } from "@/components/page-band"
import { FanInbox } from "@/components/fan-inbox"

export const metadata: Metadata = {
  title: "Fan DM",
  description: "Write DAPRINXE direct. Notes, verses, and late-night thoughts stay on this device.",
}

export default function InboxPage() {
  return (
    <div>
      <PageBand
        kicker="DIRECT LINE"
        title="FAN DM"
        copy="Not booking. Not invoices. Just you to the artist. Messages stay in this browser."
      />
      <FanInbox />
    </div>
  )
}
