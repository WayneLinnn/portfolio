import Link from "next/link"
import { ArrowUp, LayoutGrid } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import { Reveal } from "@/components/motion/reveal"
import { Separator } from "@/components/ui/separator"
import { WorkCard } from "@/components/work-card"
import { getFeaturedWorks } from "@/lib/works"

export function SelectedWorks() {
  const featured = getFeaturedWorks()

  return (
    <section id="selected-works" className="flex flex-col gap-8 py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] leading-[1.4] font-normal">
            Selected works
          </h2>
          <div className="flex items-center gap-2">
            <CtaLink href="/works">View all</CtaLink>
            <Link
              href="/works"
              aria-label="View all projects"
              className="flex size-[50px] items-center justify-center rounded-[12px] border border-foreground"
            >
              <LayoutGrid />
            </Link>
          </div>
        </div>
      </Reveal>
      <Separator />
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {featured.map((work, index) => (
          <Reveal key={work.slug} delay={index * 0.08}>
            <WorkCard work={work} />
          </Reveal>
        ))}
      </div>
      <div className="flex justify-end">
        <a
          href="#hero"
          className="flex items-center gap-2 text-xs font-bold"
        >
          Back to top
          <ArrowUp className="size-3" />
        </a>
      </div>
    </section>
  )
}
