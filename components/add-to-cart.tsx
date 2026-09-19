import { money, type MerchItem } from "@/lib/data"
import { NativePostForm } from "@/components/native-post-form"
import { BUY_FORM_ID, MerchSizeNames } from "@/components/merch-switch"

export function AddToCartFields({ item }: { item: MerchItem }) {
  const defaultSize = item.sizes[2] ?? item.sizes[0]

  return (
    <div className="space-y-4">
      <input type="hidden" name="slug" value={item.slug} />
      <MerchSizeNames
        name="size"
        sizes={item.sizes}
        defaultSize={defaultSize}
      />
      <button
        type="submit"
        formAction="/bag/add"
        formMethod="post"
        className="relative z-30 inline-flex h-12 w-full items-center justify-center bg-brand text-[12px] tracking-[0.2em] text-white hover:bg-brand/85"
      >
        ADD TO BAG · {money(item.price)}
      </button>
      <a
        href="/bag"
        className="inline-flex h-12 w-full items-center justify-center border border-white/25 text-[12px] tracking-[0.2em] text-white hover:border-white"
      >
        VIEW BAG →
      </a>
    </div>
  )
}

export function AddToCart({ item }: { item: MerchItem }) {
  return (
    <NativePostForm id={BUY_FORM_ID} action="/bag/add" className="space-y-4">
      <AddToCartFields item={item} />
    </NativePostForm>
  )
}
