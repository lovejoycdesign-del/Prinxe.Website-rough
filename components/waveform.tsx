export function Waveform({ className = "" }: { className?: string }) {
  const bars = [
    18, 34, 22, 48, 30, 56, 40, 20, 44, 62, 28, 50, 36, 16, 42, 58, 24, 46, 32,
    14, 38, 52, 26, 48, 18, 40, 30, 56, 22, 44,
  ]

  return (
    <div
      className={`flex h-8 items-end gap-px ${className}`}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] bg-white/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}
