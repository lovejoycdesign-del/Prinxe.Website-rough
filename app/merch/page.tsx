import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { merch, money } from "@/lib/data"
import { PageBand } from "@/components/page-band"
import { MerchOptionCard } from "@/components/merch-option-card"

export const metadata: Metadata = {
  title: "Merch",
  description: "Hoodie, sweatpants, sweatsuit, shirt, shorts, and hats from DA PRINXE.",
}

export default function MerchPage() {
  return (
    <div>
      <PageBand
        kicker="THE UNIFORM"
        title="MERCH"
        copy="Wear the name if you mean it. Heavyweight pieces, limited runs, shipped when the bag is paid."
      />
      <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {merch.map((item) =>
          item.variants?.length ? (
            <MerchOptionCard key={item.slug} item={item} />
          ) : (
            <Link
              key={item.slug}
              href={`/merch/${item.slug}`}
              className="group panel overflow-hidden"
            >
              <div className="relative aspect-[3/2] bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 bg-brand px-2 py-1 text-[10px] tracking-[0.16em]">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold tracking-[0.12em]">
                  {item.title}
                </p>
                <p className="mt-1 text-brand">{money(item.price)}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
