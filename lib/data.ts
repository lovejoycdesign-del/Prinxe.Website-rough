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

export type MerchVariant = {
  id: string
  label: string
  image: string
}

export type MerchItem = {
  slug: string
  title: string
  price: number
  image: string
  tag: string
  description: string
  sizes: string[]
  variants?: MerchVariant[]
  colors?: MerchVariant[]
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
  { href: "/bag", label: "BAG" },
  { href: "/inbox", label: "FAN DM" },
  { href: "/book", label: "BOOK" },
  { href: "/join", label: "JOIN" },
]

export const cashApp = {
  tag: "$Daprinxe12",
  url: "https://cash.app/$daprinxe12",
  qrSrc: "/images/cashapp-qr-daprinxe12-live.png",
}

export const songs: Song[] = [
  {
    id: "billie-jean",
    title: "BILLIE JEAN",
    artist: "DAPRINXE",
    cover: "/images/cover-billie-jean-v2.png",
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
    cover: "/images/cover-crazy-cell.png",
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
    cover: "/images/cover-pain-names-v2.png",
    duration: "3:02",
    year: "2026",
    links: {},
  },
  {
    id: "story-of-my-life",
    title: "STORY OF MY LIFE",
    artist: "DAPRINXE",
    cover: "/images/cover-billie-jean-v2.png",
    duration: "2:37",
    year: "2023",
    links: {},
  },
  {
    id: "pain-in-my-eyes",
    title: "PAIN IN MY EYES",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/cover-pain-names-v2.png",
    duration: "2:21",
    year: "2024",
    links: {},
  },
  {
    id: "distant-lover",
    title: "DISTANT LOVER",
    artist: "DAPRINXE",
    cover: "/images/cover-distant-lover-v2.png",
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
    cover: "/images/cover-crazy-cell.png",
    youtubeId: "_nTcWe1VNBk",
    featured: true,
    status: "live",
  },
  {
    id: "billie-jean",
    title: "BILLIE JEAN",
    director: "Official Video",
    cover: "/images/cover-billie-jean-v2.png",
    status: "soon",
  },
  {
    id: "pain-names",
    title: "PAIN NAMES",
    director: "Visual",
    cover: "/images/cover-pain-names-v2.png",
    status: "soon",
  },
  {
    id: "bts-real-ones",
    title: "REAL ONES BTS",
    director: "Behind the scenes",
    cover: "/images/video-room-empty.png",
    status: "soon",
  },
]

export const merch: MerchItem[] = [
  {
    slug: "real-ones-hoodie",
    title: "HOODIE",
    price: 70,
    image: "/images/merch-hoodie.jpg",
    tag: "CORE DROP",
    description:
      "Washed hoodie in black, grey, or white. Forever Searching face print up front, eclipse and wings on the back. Never settling.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        id: "black",
        label: "BLACK",
        image: "/images/merch-hoodie.jpg",
      },
      {
        id: "grey",
        label: "GREY",
        image: "/images/merch-hoodie-grey-drop.png",
      },
      {
        id: "white",
        label: "WHITE",
        image: "/images/merch-hoodie-white-drop.png",
      },
    ],
  },
  {
    slug: "real-ones-sweatpants",
    title: "SWEATPANTS",
    price: 50,
    image: "/images/merch-sweatpants-drop.png",
    tag: "CORE DROP",
    description:
      "Fleece pants in black, grey, or white. Face print and red slash on the left leg, Forever Searching eclipse on the back.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        id: "black",
        label: "BLACK",
        image: "/images/merch-sweatpants-drop.png",
      },
      {
        id: "grey",
        label: "GREY",
        image: "/images/merch-sweatpants-grey-drop.png",
      },
      {
        id: "white",
        label: "WHITE",
        image: "/images/merch-sweatpants-white-drop.png",
      },
    ],
  },
  {
    slug: "real-ones-sweat-set",
    title: "SWEATSUIT",
    price: 120,
    image: "/images/merch-sweatsuit-drop.png",
    tag: "THE SUIT",
    description:
      "Hoodie and sweatpants together in black, grey, or white. Built Different circle up front, BD Clothing globe on the back. One bag, one look.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        id: "black",
        label: "BLACK",
        image: "/images/merch-sweatsuit-drop.png",
      },
      {
        id: "grey",
        label: "GREY",
        image: "/images/merch-sweatsuit-grey-drop.png",
      },
      {
        id: "white",
        label: "WHITE",
        image: "/images/merch-sweatsuit-white-drop.png",
      },
    ],
  },
  {
    slug: "stencil-tee",
    title: "SHIRT",
    price: 30,
    image: "/images/merch-tee.jpg",
    tag: "ESSENTIAL",
    description:
      "Work shirt in black, grey, or white. Quiet mark on the chest, Built Different globe print on the back. More than clothes.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        id: "black",
        label: "BLACK",
        image: "/images/merch-tee.jpg",
      },
      {
        id: "grey",
        label: "GREY",
        image: "/images/merch-tee-grey-drop.png",
      },
      {
        id: "white",
        label: "WHITE",
        image: "/images/merch-tee-white-drop.png",
      },
    ],
  },
  {
    slug: "real-ones-shorts",
    title: "SHORTS",
    price: 25,
    image: "/images/merch-shorts-drop.png",
    tag: "NEW DROP",
    description:
      "Heavyweight french terry shorts in black, grey, or white. Forever Searching face print up front, eclipse and wings on the back.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        id: "black",
        label: "BLACK",
        image: "/images/merch-shorts-drop.png",
      },
      {
        id: "grey",
        label: "GREY",
        image: "/images/merch-shorts-grey-drop.png",
      },
      {
        id: "white",
        label: "WHITE",
        image: "/images/merch-shorts-white-drop.png",
      },
    ],
  },
  {
    slug: "fitted-cap",
    title: "HAT / BEANIE",
    price: 10,
    image: "/images/merch-beanie-born-card.png",
    tag: "NEW",
    description:
      "Black beanie or cap. Born Different type across the front, eight-point star, red slash.",
    sizes: ["S/M", "L/XL"],
    variants: [
      {
        id: "beanie",
        label: "BEANIE",
        image: "/images/merch-beanie-born-card.png",
      },
      {
        id: "hat",
        label: "HAT",
        image: "/images/merch-cap-born-card.png",
      },
    ],
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
