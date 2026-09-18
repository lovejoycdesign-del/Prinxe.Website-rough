"use client"

import { toast } from "sonner"
import { money, type MerchItem } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { MerchSizeNames } from "@/components/merch-switch"

export function AddToCart({
  item,
  optionLabel,
  groupName,
}: {
  item: MerchItem
  optionLabel?: string
  groupName?: string
}) {
  const { add, ready } = useCart()
  const sizeName = `${item.slug}-size`
  const defaultSize = item.sizes[2] ?? item.sizes[0]

  function addFromForm(form: HTMLFormElement) {
    const sizeInput = form.querySelector<HTMLInputElement>(
      `input[name="${CSS.escape(sizeName)}"]:checked`
    )
    const size = sizeInput?.value ?? defaultSize
    const checked = groupName
      ? document.querySelector<HTMLInputElement>(
          `input[name="${CSS.escape(groupName)}"]:checked`
        )
      : null
    const chosenLabel = checked?.dataset.label ?? optionLabel
    const chosenImage = checked?.dataset.image ?? item.image
    const lineSize = chosenLabel ? `${chosenLabel} · ${size}` : size
    add({
      slug: item.slug,
      title: item.title,
      price: item.price,
      image: chosenImage,
      size: lineSize,
    })
    toast.success(`${item.title} · ${lineSize} added to bag.`)
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        addFromForm(event.currentTarget)
      }}
    >
      <MerchSizeNames
        name={sizeName}
        sizes={item.sizes}
        defaultSize={defaultSize}
      />
      <button
        type="submit"
        disabled={!ready}
        className="inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.2em] text-white hover:bg-brand/85 disabled:opacity-60"
      >
        ADD TO BAG · {money(item.price)}
      </button>
      <a
        href="/bag"
        className="inline-flex h-12 w-full items-center justify-center border border-white/25 text-[12px] tracking-[0.2em] text-white hover:border-white"
      >
        VIEW BAG →
      </a>
    </form>
  )
}
