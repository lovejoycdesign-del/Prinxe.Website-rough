"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const subjects = ["Booking", "Press", "Feature / Collab", "Brand", "Other"]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  )
  const [error, setError] = useState("")

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email.includes("@") || message.length < 8) {
      setStatus("error")
      setError("Name, a real email, and a message that actually says something.")
      return
    }
    setError("")
    setStatus("loading")
    window.setTimeout(() => {
      setStatus("done")
      toast.success("Message sent to the camp.")
      e.currentTarget.reset()
    }, 800)
  }

  if (status === "done") {
    return (
      <div className="panel p-8">
        <p className="font-display text-3xl tracking-[0.1em]">GOT IT.</p>
        <p className="mt-2 text-sm text-white/60">
          If it is time-sensitive, follow up at booking@daprinxe.com.
        </p>
        <Button
          className="mt-6 rounded-none bg-brand"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="panel space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" id="name" name="name" placeholder="Your name" />
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <select
          id="subject"
          name="subject"
          className="mt-1 h-10 w-full border border-white/15 bg-black px-2 text-sm"
          defaultValue="Booking"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="City, date, budget, or the record you want him on."
          className="mt-1 rounded-none"
        />
      </div>
      {status === "error" ? <p className="text-xs text-brand">{error}</p> : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 w-full rounded-none bg-brand text-[12px] tracking-[0.18em]"
      >
        {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
      </Button>
    </form>
  )
}

function Field({
  label,
  id,
  ...props
}: React.ComponentProps<typeof Input> & { label: string; id: string }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className="mt-1 h-10 rounded-none" {...props} />
    </div>
  )
}
