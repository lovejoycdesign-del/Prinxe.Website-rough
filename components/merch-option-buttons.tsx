"use client"

import type { MerchVariant } from "@/lib/data"

export function MerchOptionButtons({
  options,
  activeId,
  onChange,
}: {
  options: MerchVariant[]
  activeId: string
  onChange: (id: string) => void
}) {
  return (
    <div className="relative z-20 flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = option.id === activeId
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onPointerDown={(event) => {
              event.preventDefault()
              event.stopPropagation()
            }}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onChange(option.id)
            }}
            className={`min-w-20 border px-3 py-2 text-[10px] tracking-[0.16em] ${
              selected
                ? "border-brand bg-brand text-white"
                : "border-white/20 text-white/70 hover:border-white"
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
