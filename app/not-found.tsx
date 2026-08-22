import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-[11px] tracking-[0.24em] text-brand">404</p>
      <h1 className="font-display mt-3 text-6xl tracking-[0.1em]">
        WRONG BLOCK
      </h1>
      <p className="mt-3 text-sm text-white/55">
        That page is not on the map. Go home or hit the videos.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="bg-brand px-4 py-2 text-[11px] tracking-[0.16em]">
          HOME
        </Link>
        <Link
          href="/videos"
          className="border border-white/20 px-4 py-2 text-[11px] tracking-[0.16em]"
        >
          VIDEOS
        </Link>
      </div>
    </div>
  )
}
