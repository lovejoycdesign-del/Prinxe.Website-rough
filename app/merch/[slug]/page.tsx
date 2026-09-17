import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { merch } from "@/lib/data"
import { MerchDetailView } from "@/components/merch-detail-view"

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

  return <MerchDetailView item={item} />
}
