export type PlatformKey =
  | "spotify"
  | "apple"
  | "youtube"
  | "soundcloud"
  | "tidal";

export type SongLinks = Partial<Record<PlatformKey, string>>;

export type Song = {
  id: string
  title: string
  artist: string
  cover: string
  featured?: boolean
  scriptColor?: "blue" | "red"
  duration: string
  year: string
  links: SongLinks
}

export type Video = {
  id: string
  title: string
  director?: string
  cover: string
  youtubeId?: string
  featured?: boolean
  status: "live" | "soon"
}

export type MerchItem = {
  slug: string
  title: string
  price: number
  image: string
  tag: string
  description: string
  sizes: string[]
}

export type ContactCard = {
  name: string
  role: string
  email: string
  phone: string
  location: string
}

export const platforms: { key: PlatformKey; label: string }[] = [
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Music" },
  { key: "youtube", label: "YouTube" },
  { key: "soundcloud", label: "SoundCloud" },
  { key: "tidal", label: "Tidal" },
]

export const artist = {
  name: "DA PRINXE",
  short: "Da Prinxe",
  kicker: "TWO SIDES. ONE STORY.",
  tagline: "PAIN MADE ME. LOYALTY KEEPS ME.",
  blurb:
    "Raw stories. Real emotions. Street anthems & melodies that hit your soul.",
  quote: "I write what I live.",
  location: "The city that raised him. The stages that keep him honest.",
  email: "",
  pressEmail: "",
  phone: "",
  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com/da._prinxe",
      key: "instagram",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/watch?v=_nTcWe1VNBk",
      key: "youtube",
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/4pajbF6YIwwAY7ryqk2e0P",
      key: "spotify",
    },
  ],
}

export const nav = [
  { href: "/", label: "HOME" },
  { href: "/videos", label: "VIDEOS" },
  { href: "/music", label: "MUSIC" },
  { href: "/merch", label: "MERCH" },
  { href: "/contact", label: "CONTACT" },
  { href: "/about", label: "ABOUT" },
  { href: "/pay", label: "PAYMENT" },
]

export const extraNav = [
  { href: "/inbox", label: "FAN DM" },
  { href: "/book", label: "BOOK" },
  { href: "/press", label: "PRESS" },
  { href: "/join", label: "JOIN" },
]

export const cashApp = {
  tag: "$legenddakidd",
  url: "https://cash.app/$legenddakidd",
  qrSrc: "/images/cashapp-qr.png",
}

export const songs: Song[] = [
  {
    id: "billie-jean",
    title: "BILLIE JEAN",
    artist: "DAPRINXE",
    cover: "/images/cover-billie-jean.png",
    featured: true,
    scriptColor: "blue",
    duration: "2:48",
    year: "2026",
    links: {},
  },
  {
    id: "crazy",
    title: "CRAZY",
    artist: "DAPRINXE",
    cover: "/images/cover-crazy.png",
    featured: true,
    scriptColor: "red",
    duration: "2:36",
    year: "2026",
    links: {
      youtube: "https://www.youtube.com/watch?v=_nTcWe1VNBk",
    },
  },
  {
    id: "pain-names",
    title: "PAIN NAMES",
    artist: "DAPRINXE",
    cover: "/images/cover-pain-names.png",
    duration: "3:02",
    year: "2026",
    links: {},
  },
  {
    id: "story-of-my-life",
    title: "STORY OF MY LIFE",
    artist: "DAPRINXE",
    cover: "/images/cover-billie-jean.png",
    duration: "2:37",
    year: "2023",
    links: {},
  },
  {
    id: "pain-in-my-eyes",
    title: "PAIN IN MY EYES",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/cover-pain-names.png",
    duration: "2:21",
    year: "2024",
    links: {},
  },
  {
    id: "distant-lover",
    title: "DISTANT LOVER",
    artist: "DAPRINXE",
    cover: "/images/cover-distant-lover.png",
    duration: "2:15",
    year: "2023",
    links: {},
  },
]

export const videos: Video[] = [
  {
    id: "crazy",
    title: "CRAZY",
    director: "dir. @whosmyree",
    cover: "/images/video-crazy-yt.jpg",
    youtubeId: "_nTcWe1VNBk",
    featured: true,
    status: "live",
  },
  {
    id: "billie-jean",
    title: "BILLIE JEAN",
    director: "Official Video",
    cover: "/images/cover-billie-jean.png",
    status: "soon",
  },
  {
    id: "pain-names",
    title: "PAIN NAMES",
    director: "Visual",
    cover: "/images/cover-pain-names.png",
    status: "soon",
  },
  {
    id: "bts-real-ones",
    title: "REAL ONES BTS",
    director: "Behind the scenes",
    cover: "/images/video-room.png",
    status: "soon",
  },
]

export const merch: MerchItem[] = [
  {
    slug: "real-ones-hoodie",
    title: "HOODIE",
    price: 80,
    image: "/images/merch-hoodie.png",
    tag: "CORE DROP",
    description:
      "Heavyweight black fleece. Distressed DAPRINXE mark on the chest. Built for late nights, long drives, and the people who stayed.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "stencil-tee",
    title: "T-SHIRT",
    price: 50,
    image: "/images/merch-tee.png",
    tag: "ESSENTIAL",
    description:
      "Oversized black tee with the white stencil wordmark. Soft wash, street cut, Real Ones tag on the hem.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "fitted-cap",
    title: "HAT",
    price: 40,
    image: "/images/merch-cap.png",
    tag: "NEW",
    description:
      "Black fitted cap, embroidered DAPRINXE front, red flash under the brim. Keep it low.",
    sizes: ["S/M", "L/XL"],
  },
  {
    slug: "real-ones-shorts",
    title: "SHORTS",
    price: 45,
    image: "/images/merch-shorts.png",
    tag: "NEW DROP",
    description:
      "Black mesh shorts, white distressed DAPRINXE mark on the thigh, Real Ones tag on the waist. Cut for the set and the after.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
]

export const contacts = {
  artist: {
    name: "",
    role: "Artist",
    email: "",
    phone: "",
    location: "",
  } satisfies ContactCard,
  manager: {
    name: "LJ Chirombo",
    role: "Manager",
    email: "lovejoyc.design@gmail.com",
    phone: "410-699-7677",
    location: "Baltimore, MD",
  } satisfies ContactCard,
}

export const bookingOffers = [
  {
    id: "show",
    title: "LIVE SHOW",
    price: "From $2,500",
    deposit: 500,
    copy: "Clubs, colleges, private rooms. Full set or stripped set. Travel billed separate.",
  },
  {
    id: "feature",
    title: "FEATURE VERSE",
    price: "From $400",
    deposit: 150,
    copy: "16 or 24. Melody or straight bar. Turnaround in 7 days once the beat is locked.",
  },
  {
    id: "collab",
    title: "COLLAB SESSION",
    price: "From $800",
    deposit: 250,
    copy: "In-studio or remote. Song, hook, and mix notes. You leave with a record, not a vibe.",
  },
  {
    id: "brand",
    title: "BRAND / CONTENT",
    price: "Custom",
    deposit: 300,
    copy: "Looks, UGC, campaign verses. If it fits the world, we talk numbers.",
  },
]

export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n)
}

export function youtubeWatch(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
}

export function youtubeEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`
}
