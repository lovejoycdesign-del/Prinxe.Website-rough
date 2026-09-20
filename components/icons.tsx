import { cn } from "@/lib/utils"

type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10.2 15.2V8.8L15.4 12l-5.2 3.2z" />
    </svg>
  )
}

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm4.6 14.4a.7.7 0 0 1-1 .24c-2.6-1.6-5.9-2-9.8-1.1a.7.7 0 0 1-.32-1.37c4.2-1 7.9-.55 10.8 1.24a.7.7 0 0 1 .32 1zm1.3-2.9a.86.86 0 0 1-1.18.28c-3-1.84-7.5-2.38-11-1.3a.86.86 0 1 1-.5-1.64c4-.1 8.9.5 12.3 2.56a.86.86 0 0 1 .38 1.1zm.12-3a1 1 0 0 1-1.4.34c-3.4-2-9-2.2-12.2-1.2a1 1 0 1 1-.58-1.93c3.7-1.1 9.9-.88 13.8 1.4a1 1 0 0 1 .38 1.4z" />
    </svg>
  )
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm3.15 14.62c-.28.46-.55.86-.97 1.1-.43.24-.86.3-1.32.08-.48-.24-.83-.24-1.32 0-.32.16-.66.34-1.1.3-.42-.02-.8-.26-1.14-.62-1.12-1.2-1.36-3.02-.62-4.52.38-.76 1.04-1.24 1.8-1.28.46-.02.88.14 1.26.34.3.16.56.18.88.02.36-.16.76-.34 1.2-.3.74.06 1.32.4 1.68 1.02-1.48.86-1.24 3.12.25 3.86zm-.4-6.08c-.86.06-1.56-.62-1.82-1.36.74-.14 1.56.4 1.82 1.36z" />
    </svg>
  )
}

export function SoundCloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor">
      <path d="M17.6 10.1a3.7 3.7 0 0 0-1.3.2 5 5 0 0 0-9.7 1.5H4.8A2.8 2.8 0 0 0 2 14.6a2.8 2.8 0 0 0 2.8 2.8h12.8a3.4 3.4 0 0 0 0-6.8 3.5 3.5 0 0 0-1-.17z" />
    </svg>
  )
}

export function TidalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} fill="currentColor">
      <path d="M4.2 9.1 7.4 6l3.2 3.1-3.2 3.2zm6.4 0L13.8 6l3.2 3.1-3.2 3.2zm6.4 0L20.2 6 23.4 9.1 20.2 12.3zM10.6 15.5 13.8 12.3 17 15.5 13.8 18.7z" />
    </svg>
  )
}

export const socialIcons = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  spotify: SpotifyIcon,
  apple: AppleIcon,
}

export const platformIcons = {
  spotify: SpotifyIcon,
  apple: AppleIcon,
  youtube: YouTubeIcon,
  soundcloud: SoundCloudIcon,
  tidal: TidalIcon,
}
