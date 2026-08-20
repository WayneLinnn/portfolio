"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { BrandMark } from "@/components/brand-mark"
import { LocalClock } from "@/components/local-clock"
import { ThemeToggle } from "@/components/theme-toggle"
import { navItems } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="relative z-50 flex h-[50px] items-center justify-between gap-2">
      <Link href="/" aria-label="Home" className="flex shrink-0 items-center">
        <BrandMark />
      </Link>
      <nav
        aria-label="Primary"
        className="absolute top-1/2 left-1/2 flex max-w-[calc(100%-5.5rem)] -translate-x-1/2 -translate-y-1/2 items-center overflow-x-auto sm:max-w-none"
      >
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-8 shrink-0 items-center rounded-[8px] px-2.5 text-[11px] sm:h-[42px] sm:px-6 sm:text-xs",
                active
                  ? "bg-foreground text-background"
                  : "bg-chip text-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        })}
        <div className="ml-2 flex items-center sm:ml-3">
          <ThemeToggle />
        </div>
      </nav>
      <LocalClock />
    </header>
  )
}
