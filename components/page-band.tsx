export function PageBand({
  kicker,
  title,
  copy,
}: {
  kicker: string
  title: string
  copy?: string
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/images/city-skyline.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-brand">
          {kicker}
        </p>
        <h1 className="font-display mt-3 text-5xl tracking-[0.08em] text-white sm:text-7xl">
          {title}
        </h1>
        {copy ? (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            {copy}
          </p>
        ) : null}
      </div>
    </div>
  )
}
