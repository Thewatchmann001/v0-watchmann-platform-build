"use client"
import React from "react"

export function TrackLink({
  href,
  children,
  event,
  target,
  ariaLabel,
}: {
  href: string
  children: React.ReactNode
  event: string
  target?: "_blank"
  ariaLabel?: string
}) {
  async function handleClick() {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: event, source_path: window.location.pathname }),
      })
    } catch {}
  }
  return (
    <a href={href} target={target} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  )
}
