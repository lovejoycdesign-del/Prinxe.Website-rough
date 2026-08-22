export function readStore<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeStore<T>(key: string, value: T) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const KEYS = {
  songLinks: "daprinxe.song-links",
  customSongs: "daprinxe.custom-songs",
  videoLinks: "daprinxe.video-links",
  cart: "daprinxe.cart",
  inbox: "daprinxe.inbox",
  fanName: "daprinxe.fan-name",
} as const
