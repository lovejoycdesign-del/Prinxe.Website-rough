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
            onClick={() => onChange(option.id)}
            className={`min-h-11 min-w-24 border px-4 py-2.5 text-[11px] tracking-[0.16em] ${
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
