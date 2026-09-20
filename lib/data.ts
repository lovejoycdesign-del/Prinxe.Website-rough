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
  heading?: string
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
    {
      label: "Apple Music",
      href: "https://music.apple.com/us/artist/daprinxe/1595783759",
      key: "apple",
    },
  ],
}

export const appleMusic = {
  label: "Apple Music",
  url: "https://music.apple.com/us/artist/daprinxe/1595783759",
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
    links: {
    },
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
    links: {
    },
  },
  {
    id: "story-of-my-life",
    title: "STORY OF MY LIFE",
    artist: "DAPRINXE ft. Lonely7seven",
    cover: "/images/cover-billie-jean-v2.png",
    duration: "2:37",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/story-of-my-life-feat-lonely7seven/1710830754?i=1710830755",
    },
  },
  {
    id: "pain-in-my-eyes",
    title: "PAIN IN MY EYES",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/cover-pain-names-v2.png",
    duration: "2:50",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/pain-in-my-eyes-feat-yung-khris/1776682585?i=1776682587",
    },
  },
  {
    id: "distant-lover",
    title: "DISTANT LOVER",
    artist: "DAPRINXE",
    cover: "/images/cover-distant-lover-v2.png",
    duration: "2:15",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/distant-lover/1700906516?i=1700906522",
    },
  },
  {
    id: "walkin-dub",
    title: "WALKIN DUB (FEAT. YUNG CHRIS)",
    artist: "DAPRINXE ft. Yung Chris",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "2:36",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/walkin-dub-feat-yung-chris/1874290141?i=1874290142",
    },
  },
  {
    id: "go-away",
    title: "GO AWAY (FEAT. YUNG CHRIS)",
    artist: "DAPRINXE ft. Yung Chris",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "3:18",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/go-away-feat-yung-chris/1874290141?i=1874290144",
    },
  },
  {
    id: "lil-addiction",
    title: "LIL ADDICTION",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "2:33",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/lil-addiction/1874290141?i=1874290145",
    },
  },
  {
    id: "damage-thoughts",
    title: "DAMAGE THOUGHTS",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "2:57",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/damage-thoughts/1874290141?i=1874290146",
    },
  },
  {
    id: "toxic-love-story",
    title: "TOXIC LOVE STORY",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "3:12",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/toxic-love-story/1874290141?i=1874290147",
    },
  },
  {
    id: "venting",
    title: "VENTING",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "3:05",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/venting/1874290141?i=1874290149",
    },
  },
  {
    id: "real-life",
    title: "REAL LIFE (FEAT. YUNG CHRIS)",
    artist: "DAPRINXE ft. Yung Chris",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "2:30",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/real-life-feat-yung-chris/1874290141?i=1874290150",
    },
  },
  {
    id: "let-see-you-do-it",
    title: "LET SEE YOU DO IT (FEAT. YUNG CHRIS)",
    artist: "DAPRINXE ft. Yung Chris",
    cover: "/images/apple/apple-welcome-to-my-wrld.jpg",
    duration: "3:23",
    year: "2026",
    links: {
      apple: "https://music.apple.com/us/album/let-see-you-do-it-feat-yung-chris/1874290141?i=1874290151",
    },
  },
  {
    id: "im-him",
    title: "IM HIM (FEAT. YUNG KHRIS)",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "2:48",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/im-him-feat-yung-khris/1776682585?i=1776682586",
    },
  },
  {
    id: "heartbreak",
    title: "HEARTBREAK",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "2:14",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/heartbreak/1776682585?i=1776682588",
    },
  },
  {
    id: "can-i-trust-you",
    title: "CAN I TRUST YOU",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "2:11",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/can-i-trust-you/1776682585?i=1776682589",
    },
  },
  {
    id: "whatever-it-is",
    title: "WHATEVER IT IS",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "3:25",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/whatever-it-is/1776682585?i=1776682590",
    },
  },
  {
    id: "2-am-in-the-stu",
    title: "2 AM IN THE STU (FEAT. YUNG KHRIS)",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "2:22",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/2-am-in-the-stu-feat-yung-khris/1776682585?i=1776682591",
    },
  },
  {
    id: "packs-in",
    title: "PACKS IN (FEAT. YUNG KHRIS)",
    artist: "DAPRINXE ft. Yung Khris",
    cover: "/images/apple/apple-the-heartbreak-kid.jpg",
    duration: "2:06",
    year: "2024",
    links: {
      apple: "https://music.apple.com/us/album/packs-in-feat-yung-khris/1776682585?i=1776682592",
    },
  },
  {
    id: "act-like-dat",
    title: "ACT LIKE DAT (FEAT. EVK ZDOT)",
    artist: "DAPRINXE ft. EVK ZDOT",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "3:31",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/act-like-dat-feat-evk-zdot/1710830754?i=1710830756",
    },
  },
  {
    id: "trynna-get-dis-bag",
    title: "TRYNNA GET DIS BAG (FEAT. LONELY7SEVEN)",
    artist: "DAPRINXE ft. Lonely7seven",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "2:17",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/trynna-get-dis-bag-feat-lonely7seven/1710830754?i=1710830758",
    },
  },
  {
    id: "r-b-soul",
    title: "R&B SOUL (FEAT. EBK ZDOT & ALLPLAY)",
    artist: "DAPRINXE ft. EBK ZDOT & ALLPLAY",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "3:42",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/r-b-soul-feat-ebk-zdot-allplay/1710830754?i=1710830759",
    },
  },
  {
    id: "cant-feel-a-thing",
    title: "CANT FEEL A THING (FEAT. LONELY7SEVEN)",
    artist: "DAPRINXE ft. Lonely7seven",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "2:55",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/cant-feel-a-thing-feat-lonely7seven/1710830754?i=1710830760",
    },
  },
  {
    id: "going-down",
    title: "GOING DOWN",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "3:16",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/going-down/1710830754?i=1710830761",
    },
  },
  {
    id: "what-u-waitin-fo",
    title: "WHAT U WAITIN FO (FEAT. EAZY & POAH)",
    artist: "DAPRINXE ft. Eazy & Poah",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "4:34",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/what-u-waitin-fo-feat-eazy-poah/1710830754?i=1710830762",
    },
  },
  {
    id: "wats-kraken",
    title: "WATS KRAKEN (FEAT. LONELY7SEVEN)",
    artist: "DAPRINXE ft. Lonely7seven",
    cover: "/images/apple/apple-my-after-thought.jpg",
    duration: "1:38",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/wats-kraken-feat-lonely7seven/1710830754?i=1710830763",
    },
  },
  {
    id: "mix-emotions",
    title: "MIX EMOTIONS",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "2:10",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/mix-emotions/1700906516?i=1700906517",
    },
  },
  {
    id: "i-just-wanna-kno",
    title: "I JUST WANNA KNO",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "2:46",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/i-just-wanna-kno/1700906516?i=1700906518",
    },
  },
  {
    id: "reaper-child",
    title: "REAPER CHILD (FEAT. POAH)",
    artist: "DAPRINXE ft. Poah",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "3:14",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/reaper-child-feat-poah/1700906516?i=1700906519",
    },
  },
  {
    id: "what-you-waitin-foh",
    title: "WHAT YOU WAITIN FOH (FEAT. POAH)",
    artist: "DAPRINXE ft. Poah",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "3:13",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/what-you-waitin-foh-feat-poah/1700906516?i=1700906520",
    },
  },
  {
    id: "lmk",
    title: "LMK",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "2:10",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/lmk/1700906516?i=1700906521",
    },
  },
  {
    id: "for-you",
    title: "FOR YOU",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-goat-season.jpg",
    duration: "2:00",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/for-you/1700906516?i=1700906523",
    },
  },
  {
    id: "your-love-all-ova-me",
    title: "YOUR LOVE ALL OVA ME (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "3:43",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/your-love-all-ova-me-feat-taurusyak/1682983146?i=1682983148",
    },
  },
  {
    id: "dont-play-wit-my-feelings",
    title: "DONT PLAY WIT MY FEELINGS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "2:20",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/dont-play-wit-my-feelings-feat-taurusyak/1682983146?i=1682983149",
    },
  },
  {
    id: "empty",
    title: "EMPTY (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "3:31",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/empty-feat-taurusyak/1682983146?i=1682983150",
    },
  },
  {
    id: "teakin",
    title: "TEAKIN (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "2:31",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/teakin-feat-taurusyak/1682983146?i=1682983151",
    },
  },
  {
    id: "stay-away",
    title: "STAY AWAY (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "2:23",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/stay-away-feat-taurusyak/1682983146?i=1682983152",
    },
  },
  {
    id: "went-thru",
    title: "WENT THRU (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "2:42",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/went-thru-feat-taurusyak/1682983146?i=1682983153",
    },
  },
  {
    id: "11pm-n-md",
    title: "11PM N MD (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "2:21",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/11pm-n-md-feat-taurusyak/1682983146?i=1682983154",
    },
  },
  {
    id: "so-far-gone",
    title: "SO FAR GONE (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "3:29",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/so-far-gone-feat-taurusyak/1682983146?i=1682983155",
    },
  },
  {
    id: "nothing-like-u",
    title: "NOTHING LIKE U",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "3:34",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/nothing-like-u/1682983146?i=1682983366",
    },
  },
  {
    id: "dont-go",
    title: "DONT GO (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-back-like-i-neva-left.jpg",
    duration: "4:26",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/dont-go-feat-taurusyak/1682983146?i=1682983367",
    },
  },
  {
    id: "couldn-t-call-perry",
    title: "COULDN'T CALL PERRY (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-couldn-t-call-perry-single-single.jpg",
    duration: "2:55",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/couldnt-call-perry-feat-taurusyak/1672649888?i=1672649889",
    },
  },
  {
    id: "lovers-friends",
    title: "LOVERS&FRIENDS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "1:43",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/lovers-friends-feat-taurusyak/1667615393?i=1667615394",
    },
  },
  {
    id: "my-ways",
    title: "MY WAYS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "3:26",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/my-ways-feat-taurusyak/1667615393?i=1667615395",
    },
  },
  {
    id: "thinking-bout-u",
    title: "THINKING BOUT U (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "3:16",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/thinking-bout-u-feat-taurusyak/1667615393?i=1667615396",
    },
  },
  {
    id: "losing-myself",
    title: "LOSING MYSELF (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "2:43",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/losing-myself-feat-taurusyak/1667615393?i=1667615397",
    },
  },
  {
    id: "love-faces",
    title: "LOVE FACES (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "3:15",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/love-faces-feat-taurusyak/1667615393?i=1667615398",
    },
  },
  {
    id: "now",
    title: "NOW (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "2:54",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/now-feat-taurusyak/1667615393?i=1667615399",
    },
  },
  {
    id: "nbv",
    title: "NBV (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-lovers-friends.jpg",
    duration: "2:32",
    year: "2023",
    links: {
      apple: "https://music.apple.com/us/album/nbv-feat-taurusyak/1667615393?i=1667615400",
    },
  },
  {
    id: "wait-for-me",
    title: "WAIT FOR ME",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-miss-me-single.jpg",
    duration: "3:01",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/wait-for-me/1660603966?i=1660603967",
    },
  },
  {
    id: "break-my-heart",
    title: "BREAK MY HEART",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-miss-me-single.jpg",
    duration: "2:42",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/break-my-heart/1660603966?i=1660603968",
    },
  },
  {
    id: "not-n-the-mood",
    title: "NOT N THE MOOD",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-miss-me-single.jpg",
    duration: "2:51",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/not-n-the-mood/1660603966?i=1660603969",
    },
  },
  {
    id: "givin-up-on-me",
    title: "GIVIN UP ON ME",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-spark-sum-ep.jpg",
    duration: "3:20",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/givin-up-on-me/1639437856?i=1639437857",
    },
  },
  {
    id: "shake-yo-body",
    title: "SHAKE YO BODY",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-spark-sum-ep.jpg",
    duration: "3:00",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/shake-yo-body/1639437856?i=1639437858",
    },
  },
  {
    id: "blesses",
    title: "BLESSES",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-spark-sum-ep.jpg",
    duration: "1:59",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/blesses/1639437856?i=1639437860",
    },
  },
  {
    id: "fell-for-you",
    title: "FELL FOR YOU",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "4:50",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/fell-for-you/1635994990?i=1635994993",
    },
  },
  {
    id: "on-the-road",
    title: "ON THE ROAD",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:03",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/on-the-road/1635994990?i=1635994994",
    },
  },
  {
    id: "pain-is-love",
    title: "PAIN IS LOVE",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:17",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/pain-is-love/1635994990?i=1635994995",
    },
  },
  {
    id: "cupid-of-love",
    title: "CUPID OF LOVE",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:42",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/cupid-of-love/1635994990?i=1635995086",
    },
  },
  {
    id: "wanna-kno",
    title: "WANNA KNO",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:08",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/wanna-kno/1635994990?i=1635995087",
    },
  },
  {
    id: "trynna-get-away",
    title: "TRYNNA GET AWAY",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "2:46",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/trynna-get-away/1635994990?i=1635995088",
    },
  },
  {
    id: "i-had-hopes",
    title: "I HAD HOPES",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "2:41",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/i-had-hopes/1635994990?i=1635995089",
    },
  },
  {
    id: "love-me",
    title: "LOVE ME",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:19",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/love-me/1635994990?i=1635995090",
    },
  },
  {
    id: "actin-shady",
    title: "ACTIN SHADY",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-broken-heart.jpg",
    duration: "3:01",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/actin-shady/1635994990?i=1635995091",
    },
  },
  {
    id: "playing-through-your-thighs",
    title: "PLAYING THROUGH YOUR THIGHS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:13",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/playing-through-your-thighs-feat-taurusyak/1633580979?i=1633580980",
    },
  },
  {
    id: "the-backyardigans",
    title: "THE BACKYARDIGANS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:17",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/the-backyardigans-feat-taurusyak/1633580979?i=1633580981",
    },
  },
  {
    id: "do-you-love-me",
    title: "DO YOU LOVE ME (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:19",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/do-you-love-me-feat-taurusyak/1633580979?i=1633580982",
    },
  },
  {
    id: "cold-heart",
    title: "COLD HEART (FEAT. TAYRUSYAK)",
    artist: "DAPRINXE ft. Tayrusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:47",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/cold-heart-feat-tayrusyak/1633580979?i=1633580983",
    },
  },
  {
    id: "get-n-line",
    title: "GET N LINE (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:51",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/get-n-line-feat-taurusyak/1633580979?i=1633580984",
    },
  },
  {
    id: "glock-n-mops",
    title: "GLOCK N MOPS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:02",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/glock-n-mops-feat-taurusyak/1633580979?i=1633581138",
    },
  },
  {
    id: "partin-ways-pt2",
    title: "PARTIN WAYS PT2 (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:49",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/partin-ways-pt2-feat-taurusyak/1633580979?i=1633581139",
    },
  },
  {
    id: "jungle-fever",
    title: "JUNGLE FEVER (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:09",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/jungle-fever-feat-taurusyak/1633580979?i=1633581140",
    },
  },
  {
    id: "night-shift",
    title: "NIGHT SHIFT (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:54",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/night-shift-feat-taurusyak/1633580979?i=1633581141",
    },
  },
  {
    id: "moonlight",
    title: "MOONLIGHT",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:17",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/moonlight/1633580979?i=1633581142",
    },
  },
  {
    id: "midnight-lights",
    title: "MIDNIGHT LIGHTS (FEAT. TASTRO & TAURUSYAK)",
    artist: "DAPRINXE ft. Tastro & Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "4:20",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/midnight-lights-feat-tastro-taurusyak/1633580979?i=1633580985",
    },
  },
  {
    id: "partin-ways",
    title: "PARTIN WAYS",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:50",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/partin-ways/1633580979?i=1633581136",
    },
  },
  {
    id: "dont-call-me",
    title: "DONT CALL ME",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:33",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/dont-call-me/1633580979?i=1633581137",
    },
  },
  {
    id: "one-two-step",
    title: "ONE TWO STEP (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:45",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/one-two-step-feat-taurusyak/1633580979?i=1633581143",
    },
  },
  {
    id: "love-you-hate-you",
    title: "LOVE YOU HATE YOU (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:15",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/love-you-hate-you-feat-taurusyak/1633580979?i=1633581144",
    },
  },
  {
    id: "500-jets",
    title: "500 JETS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:12",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/500-jets-feat-taurusyak/1633580979?i=1633581145",
    },
  },
  {
    id: "million-dollar-n-a",
    title: "MILLION DOLLAR N***A (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:23",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/million-dollar-n-a-feat-taurusyak/1633580979?i=1633581146",
    },
  },
  {
    id: "break-in-life",
    title: "BREAK IN LIFE (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:49",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/break-in-life-feat-taurusyak/1633580979?i=1633581147",
    },
  },
  {
    id: "groovy-pt-2",
    title: "GROOVY PT 2 (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "3:03",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/groovy-pt-2-feat-taurusyak/1633580979?i=1633581148",
    },
  },
  {
    id: "i-wish",
    title: "I WISH",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-love-you-hate-you.jpg",
    duration: "2:30",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/i-wish/1633580979?i=1633581150",
    },
  },
  {
    id: "bad-habits",
    title: "BAD HABITS (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-mix-emotions-ep.jpg",
    duration: "2:35",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/bad-habits-feat-taurusyak/1621380966?i=1621380968",
    },
  },
  {
    id: "khase-it",
    title: "KHASE IT",
    artist: "DAPRINXE",
    cover: "/images/apple/apple-mix-emotions-ep.jpg",
    duration: "1:40",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/khase-it/1621380966?i=1621380970",
    },
  },
  {
    id: "amnesia",
    title: "AMNESIA (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-mix-emotions-ep.jpg",
    duration: "2:25",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/amnesia-feat-taurusyak/1621380966?i=1621380971",
    },
  },
  {
    id: "mo-money-mo-pain",
    title: "MO MONEY MO PAIN (FEAT. TAURUSYAK)",
    artist: "DAPRINXE ft. Taurusyak",
    cover: "/images/apple/apple-mix-emotions-ep.jpg",
    duration: "4:00",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/mo-money-mo-pain-feat-taurusyak/1621380966?i=1621380972",
    },
  },
  {
    id: "slide-fo-c4",
    title: "SLIDE FO C4 (FEAT. TASTRO & TAURUSYAK)",
    artist: "DAPRINXE ft. Tastro & Taurusyak",
    cover: "/images/apple/apple-spark-sum-ep.jpg",
    duration: "4:21",
    year: "2022",
    links: {
      apple: "https://music.apple.com/us/album/slide-fo-c4-feat-tastro-taurusyak/1639437856?i=1639437859",
    },
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
      "Hoodie and sweatpants together in black. Built Different circle up front, BD Clothing globe on the back. One bag, one look.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "stencil-tee",
    title: "SHIRT",
    price: 30,
    image: "/images/merch-tee.jpg",
    tag: "ESSENTIAL",
    description:
      "Work shirt in black. Quiet mark on the chest, Built Different globe print on the back. More than clothes.",
    sizes: ["S", "M", "L", "XL", "2XL"],
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
    heading: "Daprinxe",
    name: "Brelyn Williams",
    role: "Artist",
    email: "Daprinxe122@icloud.com",
    phone: "443-669-9897",
    location: "DMV",
  } satisfies ContactCard,
  manager: {
    heading: "Chirombo Inc.",
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
