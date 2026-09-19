"use client"

import type { FormHTMLAttributes, ReactNode } from "react"

function nativeSubmit(form: HTMLFormElement) {
  const action = form.getAttribute("action")
  if (!action) {
    form.submit()
    return
  }
  const detached = document.createElement("form")
  detached.method = "post"
  detached.action = action
  detached.setAttribute("accept-charset", "UTF-8")
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value !== "string") continue
    const input = document.createElement("input")
    input.type = "hidden"
    input.name = key
    input.value = value
    detached.appendChild(input)
  }
  document.body.appendChild(detached)
  detached.submit()
}

export function NativePostForm({
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement> & { children: ReactNode }) {
  return (
    <form
      method="post"
      encType="application/x-www-form-urlencoded"
      {...props}
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        nativeSubmit(event.currentTarget)
      }}
    >
      {children}
    </form>
  )
}
