import Image from "next/image"

import { ImageTrail } from "@/components/hero/image-trail"
import { Reveal } from "@/components/motion/reveal"
import { FrameMarks } from "@/components/plus-mark"

function MouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="8" y="3" width="8" height="14" rx="4" />
      <path d="M12 7v3" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-66px)] flex-col overflow-hidden"
    >
      <div className="relative mt-gutter min-h-[50vh] flex-1">
        <Image
          src="/hero/keyboard.svg"
          alt=""
          fill
          priority
          className="object-cover invert dark:invert-0"
          sizes="100vw"
        />
        <FrameMarks />
      </div>
      <div className="relative z-20 flex items-end justify-between gap-4 py-4">
        <Reveal>
          <h1 className="font-heading text-[clamp(1.75rem,6vw,4rem)] leading-[1.3] font-normal md:leading-[1.4]">
            Mechanical keyboards
            <br />
            &amp; keycaps design
          </h1>
        </Reveal>
        <a
          href="#intro"
          className="mb-1 flex shrink-0 items-center gap-2 text-xs"
        >
          <MouseIcon />
          <span className="hidden sm:inline">Scroll down</span>
        </a>
      </div>
      <ImageTrail className="z-10 hidden md:block" />
    </section>
  )
}
