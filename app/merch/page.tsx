import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { merch, money } from "@/lib/data"
import { PageBand } from "@/components/page-band"

export const metadata: Metadata = {
  title: "Merch",
  description: "Real Ones hoodie, stencil tee, fitted cap, and DAPRINXE shorts.",
}

export default function MerchPage() {
  return (
    <div>
      <PageBand
        kicker="THE UNIFORM"
        title="MERCH"
        copy="Wear the name if you mean it. Heavyweight pieces, limited runs, shipped when the bag is paid."
      />
      <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {merch.map((item) => (
          <Link
            key={item.slug}
            href={`/merch/${item.slug}`}
            className="group panel overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
        ))}
      </div>
    </div>
  )
}
