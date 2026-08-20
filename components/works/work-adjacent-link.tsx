import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function WorkAdjacentLink({
  href,
  side,
  children,
  className,
}: {
  href: string
  side: "prev" | "next"
  children: ReactNode
  className?: string
}) {
  const icon = (
    <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[8px] bg-secondary">
      {side === "prev" ? (
        <ArrowLeft className="size-6" strokeWidth={1.5} />
      ) : (
        <ArrowRight className="size-6" strokeWidth={1.5} />
      )}
    </span>
  )

  return (
    <Link
      href={href}
      className={cn(
        "flex h-[50px] items-center rounded-[12px] border border-foreground p-1",
        className
      )}
    >
      {side === "prev" ? icon : null}
      <span className="flex flex-1 items-center justify-center font-heading text-sm font-bold">
        {children}
      </span>
      {side === "next" ? icon : null}
    </Link>
  )
}
