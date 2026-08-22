"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ExternalLink, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"
import {
  platforms,
  songs as seedSongs,
  type PlatformKey,
  type Song,
  type SongLinks,
} from "@/lib/data"
import { KEYS } from "@/lib/storage"
import { usePersistentState } from "@/hooks/use-persistent-state"
import { platformIcons } from "@/components/icons"
import { Waveform } from "@/components/waveform"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type LinkMap = Record<string, SongLinks>
type CustomSong = Pick<Song, "id" | "title" | "artist" | "cover" | "duration" | "year">

const emptyLinks: SongLinks = {}

export function MusicDesk() {
  const [overrides, setOverrides] = usePersistentState<LinkMap>(
    KEYS.songLinks,
    {}
  )
  const [custom, setCustom] = usePersistentState<CustomSong[]>(
    KEYS.customSongs,
    []
  )
  const [editing, setEditing] = useState<string | null>(null)
  const [draft, setDraft] = useState<SongLinks>({})
  const [adding, setAdding] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newArtist, setNewArtist] = useState("DAPRINXE")
  const [formError, setFormError] = useState("")

  const catalog = useMemo<Song[]>(() => {
    const extras: Song[] = custom.map((s) => ({
      ...s,
      links: overrides[s.id] ?? {},
    }))
    return [
      ...seedSongs.map((s) => ({
        ...s,
        links: { ...s.links, ...(overrides[s.id] ?? {}) },
      })),
      ...extras,
    ]
  }, [custom, overrides])

  const current = catalog.find((s) => s.id === editing)

  function openEdit(song: Song) {
    setEditing(song.id)
    setDraft({ ...song.links })
  }

  function saveLinks() {
    if (!editing) return
    setOverrides((prev) => ({ ...prev, [editing]: draft }))
    setEditing(null)
    toast.success("Links saved on this device.")
  }

  function addSong(e: React.FormEvent) {
    e.preventDefault()
    if (!newTitle.trim()) {
      setFormError("Give the record a title.")
      return
    }
    const id = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    if (catalog.some((s) => s.id === id)) {
      setFormError("That title is already on the list.")
      return
    }
    setCustom((prev) => [
      ...prev,
      {
        id,
        title: newTitle.trim().toUpperCase(),
        artist: newArtist.trim() || "DAPRINXE",
        cover: "/images/cover-crazy.png",
        duration: "—",
        year: String(new Date().getFullYear()),
      },
    ])
    setNewTitle("")
    setFormError("")
    setAdding(false)
    toast.success("Song added. Now drop the streaming links.")
    setEditing(id)
    setDraft(emptyLinks)
  }

  function removeCustom(id: string) {
    setCustom((prev) => prev.filter((s) => s.id !== id))
    setOverrides((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
    toast.success("Removed from this browser.")
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-lg text-sm text-white/55">
          Empty play buttons mean the URL is still missing. Use Add links on
          any row.
        </p>
        <Button
          onClick={() => setAdding(true)}
          className="h-10 rounded-none bg-brand px-4 text-[11px] tracking-[0.16em]"
        >
          <Plus className="size-3.5" />
          ADD A SONG
        </Button>
      </div>

      {catalog.length === 0 ? (
        <div className="panel p-10 text-center">
          <p className="font-display text-3xl tracking-[0.1em]">NO RECORDS YET</p>
          <p className="mt-2 text-sm text-white/50">
            Add the first title and paste the streaming links.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-white/10 border border-white/10">
          {catalog.map((song) => {
            const live = platforms.filter((p) => song.links[p.key])
            const isCustom = custom.some((s) => s.id === song.id)
            return (
              <li
                key={song.id}
                className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
              >
                <Image
                  src={song.cover}
                  alt={`${song.title} cover`}
                  width={112}
                  height={112}
                  className="size-[96px] shrink-0 object-cover sm:size-[112px]"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold tracking-[0.12em]">
                    {song.title}
                  </p>
                  <p className="text-xs text-white/45">
                    {song.artist} · {song.year} · {song.duration}
                  </p>
                  <Waveform className="mt-2 h-5 max-w-xs opacity-60" />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {live.length === 0 ? (
                      <span className="text-xs text-white/35">
                        No streaming links yet.
                      </span>
                    ) : (
                      live.map((p) => {
                        const Icon = platformIcons[p.key]
                        return (
                          <a
                            key={p.key}
                            href={song.links[p.key]}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 border border-white/15 px-2 py-1 text-[10px] tracking-[0.12em] text-white/75 hover:border-brand hover:text-white"
                          >
                            <Icon className="size-3.5" />
                            {p.label}
                            <ExternalLink className="size-3" />
                          </a>
                        )
                      })
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => openEdit(song)}
                    className="h-9 rounded-none border-white/20 text-[10px] tracking-[0.14em]"
                  >
                    ADD LINKS
                  </Button>
                  {isCustom ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeCustom(song.id)}
                      aria-label="Remove song"
                    >
                      <Trash2 className="size-4 text-white/50" />
                    </Button>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      )}

      <Dialog open={Boolean(editing)} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-md rounded-none bg-black sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-[0.12em]">
              {current?.title ?? "LINKS"}
            </DialogTitle>
            <DialogDescription>
              Paste the official URLs. Leave a field blank if it is not live yet.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            {platforms.map((p) => (
              <div key={p.key}>
                <Label htmlFor={p.key}>{p.label}</Label>
                <Input
                  id={p.key}
                  value={draft[p.key] ?? ""}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      [p.key]: e.target.value as SongLinks[PlatformKey],
                    }))
                  }
                  placeholder={`https://`}
                  className="mt-1 h-10 rounded-none"
                />
              </div>
            ))}
          </div>
          <DialogFooter className="rounded-none">
            <Button
              variant="outline"
              onClick={() => setEditing(null)}
              className="rounded-none"
            >
              Cancel
            </Button>
            <Button
              onClick={saveLinks}
              className="rounded-none bg-brand text-white"
            >
              Save links
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent className="max-w-md rounded-none bg-black">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-[0.12em]">
              ADD A SONG
            </DialogTitle>
            <DialogDescription>
              Title first. Links after. This stays in your browser until you
              clear site data.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={addSong} className="grid gap-3">
            <div>
              <Label htmlFor="song-title">Title</Label>
              <Input
                id="song-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="mt-1 h-10 rounded-none"
                placeholder="PAIN NAMES"
              />
            </div>
            <div>
              <Label htmlFor="song-artist">Artist credit</Label>
              <Input
                id="song-artist"
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                className="mt-1 h-10 rounded-none"
              />
            </div>
            {formError ? <p className="text-xs text-brand">{formError}</p> : null}
            <DialogFooter className="rounded-none">
              <Button type="submit" className="rounded-none bg-brand">
                Add to catalog
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
