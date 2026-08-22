import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { artist, contacts, merch, platforms, songs, videos } from "@/lib/data"
import { platformIcons } from "@/components/icons"
import { Waveform } from "@/components/waveform"

export default function HomePage() {
  const featured = songs.filter((s) => s.featured)
  const hoodie = merch[0]
  const featuredVideo = videos.find((v) => v.featured) ?? videos[0]

  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
        <Image
          src="/images/city-skyline.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-x-0 top-16 h-72 opacity-70 md:hidden">
          <Image
            src="/images/hero-artist.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
          <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[52%] md:block">
          <Image
            src="/images/hero-artist.png"
            alt="DAPRINXE"
            fill
            priority
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
        </div>

        <div className="relative mx-auto grid min-h-[92vh] max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.32em] text-brand">
              {artist.kicker}
            </p>
            <h1 className="font-display wordmark mt-3 text-7xl leading-[0.85] tracking-[0.08em] text-white sm:text-8xl lg:text-9xl">
              {artist.name}
            </h1>
            <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-white sm:text-base">
              {artist.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-[15px]">
              {artist.blurb}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/music"
                className="inline-flex h-11 items-center gap-2 bg-brand px-5 text-[11px] font-semibold tracking-[0.18em] text-white hover:bg-brand/85"
              >
                <Play className="size-3.5 fill-white" />
                STREAM NOW
              </Link>
              <Link
                href="/videos"
                className="inline-flex h-11 items-center border border-white/70 px-5 text-[11px] font-semibold tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                WATCH VIDEO
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-[10px] tracking-[0.28em] text-white/45">
                LISTEN ON
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-white/70">
                {platforms.map((p) => {
                  const Icon = platformIcons[p.key]
                  return (
                    <span
                      key={p.key}
                      className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em]"
                    >
                      <Icon className="size-4" />
                      <span className="hidden sm:inline">{p.label}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-xs justify-self-end text-right md:mr-6">
            <p className="font-display text-4xl leading-[0.9] tracking-[0.06em] text-white sm:text-5xl">
              OUT NOW
              <br />
              2 NEW SONGS
            </p>
            <div className="mt-6 space-y-1">
              {featured.map((song) => (
                <p
                  key={song.id}
                  className={`font-script text-5xl leading-none ${
                    song.scriptColor === "blue" ? "text-sky-400" : "text-brand"
                  }`}
                >
                  {song.title === "BILLIE JEAN" ? "Billie Jean" : "Crazy"}
                </p>
              ))}
            </div>
            <Link
              href="/music"
              className="mt-8 inline-flex h-11 items-center bg-brand px-6 text-[11px] font-semibold tracking-[0.18em] text-white hover:bg-brand/85"
            >
              LISTEN NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto grid max-w-[1400px] divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          <HomeBlock title="NEW MUSIC" href="/music" cta="VIEW ALL MUSIC">
            <ul className="space-y-4">
              {featured.map((song) => (
                <li key={song.id} className="flex items-center gap-3">
                  <Image
                    src={song.cover}
                    alt={song.title}
                    width={56}
                    height={56}
                    className="size-14 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold tracking-wide">
                      {song.title}
                    </p>
                    <p className="text-[11px] text-white/45">{song.artist}</p>
                    <Waveform className="mt-1 h-4 opacity-70" />
                  </div>
                  <Link
                    href="/music"
                    className="grid size-8 place-items-center bg-white text-black"
                    aria-label={`Play ${song.title}`}
                  >
                    <Play className="size-3 fill-black" />
                  </Link>
                </li>
              ))}
            </ul>
          </HomeBlock>

          <HomeBlock title="MUSIC VIDEOS" href="/videos" cta="WATCH ALL">
            <Link href="/videos" className="group relative block overflow-hidden">
              <Image
                src={featuredVideo.cover}
                alt={featuredVideo.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover"
              />
              <span className="absolute inset-0 grid place-items-center bg-black/30">
                <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                  <Play className="size-4 fill-white" />
                </span>
              </span>
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {videos.slice(1, 3).map((video) => (
                <Link key={video.id} href="/videos" className="block">
                  <Image
                    src={video.cover}
                    alt={video.title}
                    width={280}
                    height={160}
                    className="aspect-video w-full object-cover"
                  />
                  <p className="mt-1 text-[10px] tracking-[0.16em] text-white/70">
                    {video.title}
                  </p>
                </Link>
              ))}
            </div>
          </HomeBlock>

          <HomeBlock title="CONTACT" href="/contact" cta="GET IN TOUCH">
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-brand">ARTIST</p>
                <p className="mt-1 text-white/35">Name —</p>
                <p className="text-white/35">Email —</p>
                <p className="text-white/35">Phone —</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.18em] text-brand">MANAGER</p>
                <p className="mt-1 font-medium">{contacts.manager.name}</p>
                <p className="text-white/70">{contacts.manager.email}</p>
                <p className="text-white/70">{contacts.manager.phone}</p>
                <p className="text-white/70">{contacts.manager.location}</p>
              </div>
            </div>
          </HomeBlock>

          <HomeBlock title="MERCH" href="/merch" cta="SHOP ALL">
            <Link href={`/merch/${hoodie.slug}`} className="block">
              <Image
                src={hoodie.image}
                alt={hoodie.title}
                width={480}
                height={480}
                className="aspect-square w-full object-cover"
              />
              <p className="mt-3 text-sm font-semibold tracking-[0.12em]">
                {hoodie.title}
              </p>
              <p className="text-brand">${hoodie.price.toFixed(2)}</p>
            </Link>
          </HomeBlock>
        </div>
      </section>
    </div>
  )
}

function HomeBlock({
  title,
  href,
  cta,
  children,
}: {
  title: string
  href: string
  cta: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col px-5 py-8 sm:px-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-[12px] font-semibold tracking-[0.26em] text-brand">
          {title}
        </h2>
        {title === "MERCH" ? (
          <Link
            href={href}
            className="text-[10px] tracking-[0.16em] text-white/55 hover:text-white"
          >
            {cta}
          </Link>
        ) : null}
      </div>
      <div className="flex-1">{children}</div>
      {title !== "MERCH" ? (
        <Link
          href={href}
          className="mt-6 inline-flex justify-center border border-brand px-3 py-2 text-center text-[10px] font-semibold tracking-[0.18em] text-brand hover:bg-brand hover:text-white"
        >
          {cta}
        </Link>
      ) : null}
    </div>
  )
}
