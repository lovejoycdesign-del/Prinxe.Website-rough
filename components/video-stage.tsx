"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Play } from "lucide-react"
import { toast } from "sonner"
import { videos as seedVideos, youtubeEmbed, youtubeWatch } from "@/lib/data"
import { KEYS } from "@/lib/storage"
import { usePersistentState } from "@/hooks/use-persistent-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ExtraVideo = {
  id: string
  title: string
  youtubeId: string
}

function extractId(input: string) {
  const trimmed = input.trim()
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed
  try {
    const url = new URL(trimmed)
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1, 12)
    const v = url.searchParams.get("v")
    if (v) return v
  } catch {
    return null
  }
  return null
}

export function VideoStage() {
  const [extras, setExtras] = usePersistentState<ExtraVideo[]>(
    KEYS.videoLinks,
    []
  )
  const [activeId, setActiveId] = useState("_nTcWe1VNBk")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")

  const catalog = useMemo(() => {
    const live = seedVideos.filter((v) => v.youtubeId)
    const added = extras.map((v) => ({
      id: v.id,
      title: v.title,
      director: "Added by you",
      cover: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
      youtubeId: v.youtubeId,
      status: "live" as const,
    }))
    return [...live, ...added, ...seedVideos.filter((v) => !v.youtubeId)]
  }, [extras])

  const active = catalog.find((v) => v.youtubeId === activeId) ?? catalog[0]

  function addVideo(e: React.FormEvent) {
    e.preventDefault()
    const id = extractId(url)
    if (!title.trim()) {
      setError("Name the video.")
      return
    }
    if (!id) {
      setError("Paste a full YouTube link or an 11-character video ID.")
      return
    }
    setExtras((prev) => [
      ...prev,
      { id: `${id}-${Date.now()}`, title: title.trim(), youtubeId: id },
    ])
    setTitle("")
    setUrl("")
    setError("")
    setActiveId(id)
    toast.success("Video added to the page.")
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">
          <div>
            {active.youtubeId ? (
              <div className="aspect-video overflow-hidden bg-black ring-1 ring-white/10">
                <iframe
                  title={active.title}
                  src={`${youtubeEmbed(active.youtubeId)}?rel=0`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="grid aspect-video place-items-center bg-[#111] text-white/50">
                Video not live yet.
              </div>
            )}
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] tracking-[0.22em] text-brand">
                  {active.director ?? "OFFICIAL"}
                </p>
                <h2 className="font-display text-4xl tracking-[0.08em]">
                  {active.title}
                </h2>
              </div>
              {active.youtubeId ? (
                <a
                  href={youtubeWatch(active.youtubeId)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] tracking-[0.16em] text-white/60 hover:text-white"
                >
                  OPEN ON YOUTUBE
                </a>
              ) : null}
            </div>
          </div>

          <aside className="space-y-6">
            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.24em] text-brand">
                THE REEL
              </h3>
              <ul className="mt-4 space-y-3">
                {catalog.map((video) => (
                  <li key={video.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (video.youtubeId) setActiveId(video.youtubeId)
                        else toast.message("This visual is still in the vault.")
                      }}
                      className="flex w-full items-center gap-3 text-left"
                    >
                      <span className="relative block size-16 shrink-0 overflow-hidden">
                        <Image
                          src={video.cover}
                          alt=""
                          fill
                          className="object-cover"
                          unoptimized={video.cover.startsWith("http")}
                        />
                        {video.youtubeId ? (
                          <span className="absolute inset-0 grid place-items-center bg-black/20">
                            <Play className="size-3 fill-white text-white" />
                          </span>
                        ) : null}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold tracking-wide">
                          {video.title}
                        </span>
                        <span className="block text-[11px] text-white/45">
                          {video.status === "live" ? "LIVE" : "COMING SOON"}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={addVideo} className="panel p-4">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-white">
                ADD A VIDEO LINK
              </p>
              <p className="mt-1 text-xs text-white/50">
                Paste any YouTube URL. It saves in this browser so you can keep
                stacking visuals without code.
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <Label htmlFor="vid-title">Title</Label>
                  <Input
                    id="vid-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 h-10 rounded-none"
                    placeholder="BILLIE JEAN"
                  />
                </div>
                <div>
                  <Label htmlFor="vid-url">YouTube link</Label>
                  <Input
                    id="vid-url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-1 h-10 rounded-none"
                    placeholder="https://www.youtube.com/watch?v="
                  />
                </div>
                {error ? <p className="text-xs text-brand">{error}</p> : null}
                <Button
                  type="submit"
                  className="h-10 w-full rounded-none bg-brand text-[11px] tracking-[0.16em]"
                >
                  ADD TO VIDEOS
                </Button>
              </div>
            </form>
          </aside>
        </div>
    </div>
  )
}
