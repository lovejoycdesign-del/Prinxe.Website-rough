"use client"

import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { KEYS } from "@/lib/storage"
import { usePersistentState } from "@/hooks/use-persistent-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Msg = {
  id: string
  from: "fan" | "artist"
  text: string
  at: string
}

const welcome: Msg = {
  id: "welcome",
  from: "artist",
  text: "You made it to the private line. Keep it real — I read these. If you want a feature or a show, use Contact.",
  at: new Date().toISOString(),
}

const replies = [
  "I see you. Keep streaming Crazy and tell two people who actually listen.",
  "Appreciate that. Real Ones hoodie is the uniform if you want to wear it.",
  "Write it down. Pain makes the best records if you tell the truth.",
  "Noted. If you in the city when I pull up, find me after the set.",
]

export function FanInbox() {
  const [name, setName] = usePersistentState(KEYS.fanName, "")
  const [messages, setMessages] = usePersistentState<Msg[]>(KEYS.inbox, [
    welcome,
  ])
  const [draft, setDraft] = useState("")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, sending])

  function send(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError("Put a name on it so I know who I’m talking to.")
      return
    }
    if (draft.trim().length < 2) {
      setError("Say something first.")
      return
    }
    setError("")
    const outgoing: Msg = {
      id: `fan-${Date.now()}`,
      from: "fan",
      text: draft.trim(),
      at: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, outgoing])
    setDraft("")
    setSending(true)
    window.setTimeout(() => {
      const reply: Msg = {
        id: `daprinxe-${Date.now()}`,
        from: "artist",
        text: replies[Math.floor(Math.random() * replies.length)],
        at: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, reply])
      setSending(false)
      toast.success("DAPRINXE replied.")
    }, 900)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-4">
        <label className="text-[11px] tracking-[0.16em] text-white/45" htmlFor="fan-name">
          YOUR NAME
        </label>
        <Input
          id="fan-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What should he call you?"
          className="mt-1 h-10 rounded-none"
        />
      </div>

      <div className="panel flex min-h-[420px] flex-col">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="text-[11px] tracking-[0.2em] text-brand">DAPRINXE</p>
          <p className="text-xs text-white/45">Usually replies after the studio</p>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <p className="py-16 text-center text-sm text-white/40">
              No messages yet. Slide in.
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  msg.from === "fan"
                    ? "ml-auto bg-brand text-white"
                    : "bg-white/8 text-white/85"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
          {sending ? (
            <div className="bg-white/8 px-3 py-2 text-sm text-white/45">
              DAPRINXE is typing…
            </div>
          ) : null}
          <div ref={endRef} />
        </div>
        <form onSubmit={send} className="border-t border-white/10 p-3">
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write him something real."
            className="rounded-none"
            rows={3}
          />
          {error ? <p className="mt-2 text-xs text-brand">{error}</p> : null}
          <div className="mt-3 flex items-center justify-between">
            <button
              type="button"
              className="text-[10px] tracking-[0.14em] text-white/35 hover:text-white/70"
              onClick={() => {
                setMessages([welcome])
                toast.message("Inbox cleared.")
              }}
            >
              CLEAR THREAD
            </button>
            <Button
              type="submit"
              disabled={sending}
              className="h-10 rounded-none bg-brand px-5 text-[11px] tracking-[0.16em]"
            >
              {sending ? "SENDING…" : "SEND"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
