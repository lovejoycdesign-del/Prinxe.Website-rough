import { merch } from "@/lib/data"

export type CartLine = {
  slug: string
  title: string
  price: number
  image: string
  size: string
  option?: string
  qty: number
}

export function cartLineKey(line: {
  slug: string
  size: string
  option?: string
}) {
  return `${line.slug}::${line.option ?? ""}::${line.size}`
}

export function merchSelectionToLine(
  slug: string,
  optionId?: string | null,
  size?: string | null
): Omit<CartLine, "qty"> | null {
  const product = merch.find((item) => item.slug === slug)
  if (!product) return null
  const choices = [...(product.variants ?? []), ...(product.colors ?? [])]
  const option = optionId
    ? choices.find((choice) => choice.id === optionId)
    : undefined
  const chosenSize =
    size && product.sizes.includes(size)
      ? size
      : (product.sizes[2] ?? product.sizes[0])
  return {
    slug: product.slug,
    title: product.title,
    price: product.price,
    image: option?.image ?? product.image,
    size: chosenSize,
    option: option?.label,
  }
}
