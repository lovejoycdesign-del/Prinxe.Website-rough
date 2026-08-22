"use client"

import { useEffect, useState } from "react"
import { readStore, writeStore } from "@/lib/storage"

export function usePersistentState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Hydration-safe: read the browser store only after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage sync
    setValue(readStore(key, fallback))
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!ready) return
    writeStore(key, value)
  }, [key, ready, value])

  return [value, setValue, ready] as const
}
