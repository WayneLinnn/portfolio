import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Wordmark } from "@/components/wordmark"
import { footerInfo, footerSocial } from "@/lib/site"

function FooterColumn({
  title,
  index,
  children,
}: {
  title: string
  index: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <h2 className="font-heading text-xl font-normal">{title}</h2>
        <span className="font-mono text-[10px] font-medium">{index}</span>
      </div>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-16 flex flex-col gap-gutter px-gutter pt-gutter pb-gutter">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-gutter">
        <FooterColumn title="Info" index="01">
          {footerInfo.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold"
            >
              {item.label}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Social" index="02">
          {footerSocial.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-bold"
            >
              {item.label}
              <ArrowUpRight className="size-3" />
            </a>
          ))}
        </FooterColumn>
      </div>
      <Separator />
      <div className="relative">
        <Wordmark />
        <p className="mt-2 flex flex-wrap justify-end gap-3 font-mono text-[10px] text-foreground uppercase md:absolute md:right-0 md:bottom-2 md:mt-0">
          <span>All rights reserved ©</span>
          <span>{year}</span>
          <span>biipmk / biip lab</span>
        </p>
      </div>
    </footer>
  )
}
