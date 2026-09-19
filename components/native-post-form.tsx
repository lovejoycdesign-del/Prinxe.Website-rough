"use client"

import type { FormHTMLAttributes, ReactNode } from "react"

export function NativePostForm({
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement> & { children: ReactNode }) {
  return (
    <form
      method="post"
      {...props}
      onSubmit={(event) => {
        event.preventDefault()
        event.currentTarget.submit()
      }}
    >
      {children}
    </form>
  )
}
