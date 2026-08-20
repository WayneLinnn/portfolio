"use client"

import * as React from "react"

function formatParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date)

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ""

  return {
    date: `${get("month")} ${get("day")}`,
    time: `${get("hour")}:${get("minute")} ${get("dayPeriod")}`,
  }
}

export function LocalClock() {
  const [now, setNow] = React.useState<{ date: string; time: string } | null>(
    null
  )

  React.useEffect(() => {
    const tick = () => setNow(formatParts(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="hidden items-center gap-3 font-mono text-[10px] text-foreground uppercase sm:flex">
      <span>Strasbourg, France.</span>
      <span>{now?.date ?? "—"}</span>
      <span>{now?.time ?? "—"}</span>
    </div>
  )
}
