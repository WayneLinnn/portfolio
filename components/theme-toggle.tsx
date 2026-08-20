"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-5 w-9 shrink-0 rounded-[10px] bg-toggle"
    >
      <span
        className={cn(
          "absolute top-0.5 size-4 rounded-full bg-foreground transition-[left]",
          isDark ? "left-0.5" : "left-[18px]"
        )}
      />
    </button>
  )
}
