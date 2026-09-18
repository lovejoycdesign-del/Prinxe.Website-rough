import Link from "next/link"
import { money, type MerchItem } from "@/lib/data"
import { AddToCart } from "@/components/add-to-cart"
import {
  MerchOptionNames,
  MerchPictureStack,
  MerchRadios,
  MerchSwitch,
} from "@/components/merch-switch"

export function MerchDetailView({ item }: { item: MerchItem }) {
  const styleOptions = item.variants ?? []
  const colorOptions = item.colors ?? []
  const options = styleOptions.length ? styleOptions : colorOptions
  const optionKind = colorOptions.length && !styleOptions.length ? "COLOR" : null
  const groupName = `detail-${item.slug}`

  const info = (
    <div className="flex flex-col justify-center">
      <p className="text-[11px] tracking-[0.24em] text-brand">{item.tag}</p>
      <h1 className="font-display mt-2 text-5xl tracking-[0.08em]">
        {item.title}
      </h1>
      <p className="mt-3 text-2xl text-brand">{money(item.price)}</p>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
        {item.description}
      </p>
      {options.length > 0 ? (
        <div className="mt-6">
          <MerchOptionNames
            name={groupName}
            options={options}
            heading={optionKind ?? undefined}
          />
        </div>
      ) : null}
      <div className="mt-8">
        <AddToCart
          item={item}
          groupName={options.length ? groupName : undefined}
          optionLabel={options[0]?.label}
        />
      </div>
      <Link
        href="/pay"
        className="mt-4 text-[11px] tracking-[0.16em] text-white/50 hover:text-white"
      >
        GO TO CHECKOUT →
      </Link>
    </div>
  )

  if (!options.length) {
    return (
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-black ring-1 ring-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>
        {info}
      </div>
    )
  }

  return (
    <MerchSwitch className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <MerchRadios name={groupName} options={options} />
      <MerchPictureStack
        options={options}
        fit="contain"
        className="aspect-[4/3] bg-black ring-1 ring-white/10"
      />
      {info}
    </MerchSwitch>
  )
}
