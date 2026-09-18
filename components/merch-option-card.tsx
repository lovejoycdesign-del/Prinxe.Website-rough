import Link from "next/link"
import { money, type MerchItem } from "@/lib/data"
import {
  MerchOptionNames,
  MerchPictureStack,
  MerchRadios,
  MerchSwitch,
} from "@/components/merch-switch"

export function MerchOptionCard({ item }: { item: MerchItem }) {
  const options = item.variants ?? []
  const groupName = `grid-${item.slug}`

  return (
    <MerchSwitch className="panel flex h-full flex-col overflow-hidden">
      <MerchRadios name={groupName} options={options} />
      <MerchPictureStack
        options={options}
        className="aspect-[3/2] bg-black"
      >
        <span className="absolute left-3 top-3 z-10 bg-brand px-2 py-1 text-[10px] tracking-[0.16em]">
          {item.tag}
        </span>
        <Link
          href={`/merch/${item.slug}`}
          className="merch-switch-photo-link"
          aria-label={item.title}
        />
      </MerchPictureStack>
      <Link href={`/merch/${item.slug}`} className="p-4 pb-2">
        <p className="text-sm font-semibold tracking-[0.12em]">{item.title}</p>
        <p className="mt-1 text-brand">{money(item.price)}</p>
      </Link>
      {options.length > 0 ? (
        <div className="mt-auto px-4 pb-4">
          <MerchOptionNames name={groupName} options={options} />
        </div>
      ) : null}
    </MerchSwitch>
  )
}
