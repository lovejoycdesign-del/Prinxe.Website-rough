import type { ReactNode } from "react"
import type { MerchVariant } from "@/lib/data"
import { cn } from "@/lib/utils"

export function MerchSwitch({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("merch-switch", className)}>{children}</div>
}

export function MerchRadios({
  name,
  options,
}: {
  name: string
  options: MerchVariant[]
}) {
  return (
    <>
      {options.map((option, index) => (
        <input
          key={option.id}
          id={`${name}-${option.id}`}
          type="radio"
          name={name}
          value={option.id}
          defaultChecked={index === 0}
          data-label={option.label}
          data-image={option.image}
          className="merch-switch-input"
        />
      ))}
    </>
  )
}

export function MerchPictureStack({
  options,
  fit = "cover",
  className,
  children,
}: {
  options: MerchVariant[]
  fit?: "cover" | "contain"
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        "merch-switch-frame",
        fit === "contain" && "merch-switch-frame--contain",
        className
      )}
    >
      {options.map((option) => (
        <img
          key={option.id}
          data-option={option.id}
          src={option.image}
          alt={option.label}
          className="merch-layer"
        />
      ))}
      {children}
    </div>
  )
}

export function MerchOptionNames({
  name,
  options,
  heading,
}: {
  name: string
  options: MerchVariant[]
  heading?: string
}) {
  return (
    <div className="merch-switch-controls">
      {heading ? (
        <p className="mb-2 w-full text-[11px] tracking-[0.18em] text-white/50">
          {heading}
        </p>
      ) : null}
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={`${name}-${option.id}`}
          className="merch-switch-label"
          data-option={option.id}
        >
          {option.label}
        </label>
      ))}
    </div>
  )
}

export function sizeInputId(name: string, size: string) {
  return `${name}-${size.replace(/[^A-Za-z0-9]+/g, "-")}`
}

export function MerchSizeNames({
  name,
  sizes,
  defaultSize,
}: {
  name: string
  sizes: string[]
  defaultSize: string
}) {
  return (
    <div className="merch-switch-controls">
      <p className="mb-2 w-full text-[11px] tracking-[0.18em] text-white/50">
        SIZE
      </p>
      {sizes.map((size) => {
        const id = sizeInputId(name, size)
        return (
          <label
            key={size}
            htmlFor={id}
            className="merch-switch-label merch-size-label"
            data-option={size}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={size}
              defaultChecked={size === defaultSize}
              className="merch-size-input"
            />
            {size}
          </label>
        )
      })}
    </div>
  )
}
