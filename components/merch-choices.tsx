"use client"

import type { MerchVariant } from "@/lib/data"

export function MerchChoices({
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
            className={`w-[7.25rem] border p-1 text-left ${
              selected
                ? "border-brand bg-brand/20"
                : "border-white/20 hover:border-white"
            }`}
          >
            <span className="block aspect-[3/2] overflow-hidden bg-[#2a2a2a] ring-1 ring-white/10">
              <img
                src={option.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </span>
            <span
              className={`mt-1 block text-center text-[10px] tracking-[0.16em] ${
                selected ? "text-white" : "text-white/70"
              }`}
            >
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
