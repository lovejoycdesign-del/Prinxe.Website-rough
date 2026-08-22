import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { merch, money } from "@/lib/data"
import { AddToCart } from "@/components/add-to-cart"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return merch.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = merch.find((p) => p.slug === slug)
  return { title: item?.title ?? "Merch" }
}

export default async function MerchDetailPage({ params }: Props) {
  const { slug } = await params
  const item = merch.find((p) => p.slug === slug)
  if (!item) notFound()

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div className="relative aspect-square overflow-hidden ring-1 ring-white/10">
        <Image src={item.image} alt={item.title} fill className="object-cover" priority />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[11px] tracking-[0.24em] text-brand">{item.tag}</p>
        <h1 className="font-display mt-2 text-5xl tracking-[0.08em]">{item.title}</h1>
        <p className="mt-3 text-2xl text-brand">{money(item.price)}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
          {item.description}
        </p>
        <div className="mt-8">
          <AddToCart item={item} />
        </div>
        <Link
          href="/pay"
          className="mt-4 text-[11px] tracking-[0.16em] text-white/50 hover:text-white"
        >
          GO TO CHECKOUT →
        </Link>
      </div>
    </div>
  )
}
