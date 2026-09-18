"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { bookingOffers } from "@/lib/data"
import { cartLineKey } from "@/lib/cart-line"
import {
  addBagSelection,
  getBagItems,
  setBagItems,
} from "@/lib/bag-cookie"

function refreshBag() {
  revalidatePath("/bag")
  revalidatePath("/pay")
  revalidatePath("/")
}

export async function addToBag(formData: FormData) {
  const slug = String(formData.get("slug") ?? "")
  const option = String(formData.get("option") ?? "") || null
  const size = String(formData.get("size") ?? "") || null
  const ok = await addBagSelection(slug, option, size)
  refreshBag()
  redirect(ok ? "/bag" : "/merch")
}

export async function setBagQty(formData: FormData) {
  const key = String(formData.get("key") ?? "")
  const qty = Number(formData.get("qty") ?? 0)
  const items = await getBagItems()
  const next =
    qty <= 0
      ? items.filter((line) => cartLineKey(line) !== key)
      : items.map((line) =>
          cartLineKey(line) === key ? { ...line, qty } : line
        )
  await setBagItems(next)
  refreshBag()
}

export async function removeBagItem(formData: FormData) {
  const key = String(formData.get("key") ?? "")
  const items = await getBagItems()
  await setBagItems(items.filter((line) => cartLineKey(line) !== key))
  refreshBag()
}

export async function demoPay(formData: FormData) {
  const name = String(formData.get("cardname") ?? "").trim()
  const number = String(formData.get("card") ?? "").replace(/\s/g, "")
  const kind = String(formData.get("kind") ?? "bag")
  const offer = bookingOffers.find(
    (item) => item.id === String(formData.get("offer") ?? "")
  )
  const amount =
    kind === "book" && offer
      ? offer.deposit
      : Number(formData.get("amount") ?? 0)
  const tab = kind === "tip" || kind === "book" ? kind : "bag"
  if (!name || number.length < 12 || !(amount > 0)) {
    redirect(`/pay?tab=${tab}&error=1`)
  }
  if (tab === "bag") {
    await setBagItems([])
    refreshBag()
  }
  redirect(`/pay?tab=${tab}&paid=${encodeURIComponent(String(amount))}`)
}
