import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function CtaLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const classNames = cn(
    "group inline-flex h-[50px] items-center rounded-[12px] border border-foreground p-1",
    className
  )
  const inner = (
    <>
      <span className="flex h-[42px] items-center px-6 font-heading text-xs font-bold">
        {children}
      </span>
      <span className="flex size-[42px] items-center justify-center rounded-[8px] bg-foreground text-background">
        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  )

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classNames}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classNames}>
      {inner}
    </Link>
  )
}
