import type { ReactNode } from "react"

import { FrameMarks } from "@/components/plus-mark"
import { Reveal } from "@/components/motion/reveal"

export function PageShell({
  title,
  children,
}: {
  title?: string
  children?: ReactNode
}) {
  return (
    <section className="relative min-h-[calc(100svh-82px)]">
      <FrameMarks />
      {title ? (
        <Reveal>
          <h1 className="font-heading pt-8 text-[clamp(2.25rem,10vw,4rem)] leading-[1.2] font-normal md:leading-[1.4]">
            {title}
          </h1>
        </Reveal>
      ) : null}
      {children}
    </section>
  )
}
