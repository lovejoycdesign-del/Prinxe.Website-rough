"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function JoinForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  )
  const [error, setError] = useState("")

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") ?? "")
    if (!email.includes("@")) {
      setStatus("error")
      setError("Need a real email.")
      return
    }
    setError("")
    setStatus("loading")
    window.setTimeout(() => {
      setStatus("done")
      toast.success("Welcome to the Real Ones.")
    }, 700)
  }

  if (status === "done") {
    return (
      <div className="panel p-8">
        <p className="font-display text-3xl tracking-[0.1em]">YOU&apos;RE IN.</p>
        <p className="mt-2 text-sm text-white/60">
          First drop hits when it is actually ready — not when a calendar says so.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="panel space-y-4 p-6">
      <div>
        <Label htmlFor="join-name">Name</Label>
        <Input id="join-name" name="name" className="mt-1 h-10 rounded-none" />
      </div>
      <div>
        <Label htmlFor="join-email">Email</Label>
        <Input
          id="join-email"
          name="email"
          type="email"
          className="mt-1 h-10 rounded-none"
        />
      </div>
      <div>
        <Label htmlFor="join-city">City</Label>
        <Input
          id="join-city"
          name="city"
          placeholder="So we know when the tour is close"
          className="mt-1 h-10 rounded-none"
        />
      </div>
      {status === "error" ? <p className="text-xs text-brand">{error}</p> : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 w-full rounded-none bg-brand text-[12px] tracking-[0.18em]"
      >
        {status === "loading" ? "JOINING…" : "JOIN NOW"}
      </Button>
    </form>
  )
}
