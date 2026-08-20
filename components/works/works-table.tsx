"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion, useSpring } from "motion/react"

import { FrameMarks } from "@/components/plus-mark"
import { getWorkPreview } from "@/lib/work-detail"
import { works } from "@/lib/works"
import { tokens } from "@/lib/tokens"

const previewSize = {
  width: tokens.trail.width,
  height: tokens.trail.height,
}

const previewOffset = {
  x: 20,
  y: 20,
}

const followSpring = {
  stiffness: 380,
  damping: 36,
  mass: 0.8,
}

function canFollowCursor() {
  if (typeof window === "undefined") {
    return false
  }

  return window.matchMedia("(pointer: fine) and (hover: hover)").matches
}

export function WorksTable() {
  const [active, setActive] = React.useState<string | null>(null)
  const [enabled, setEnabled] = React.useState(false)
  const x = useSpring(0, followSpring)
  const y = useSpring(0, followSpring)
  const hasPosition = React.useRef(false)

  const preview = active ? getWorkPreview(active) : null
  const showPreview = enabled && Boolean(preview)

  React.useEffect(() => {
    setEnabled(canFollowCursor())
  }, [])

  function movePreview(clientX: number, clientY: number) {
    const nextX = clientX + previewOffset.x
    const nextY = clientY + previewOffset.y

    if (!hasPosition.current) {
      x.jump(nextX)
      y.jump(nextY)
      hasPosition.current = true
      return
    }

    x.set(nextX)
    y.set(nextY)
  }

  function onTableMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!enabled) {
      return
    }

    movePreview(event.clientX, event.clientY)
  }

  function onLeaveTable() {
    setActive(null)
    hasPosition.current = false
  }

  return (
    <div className="relative mt-8" onMouseMove={onTableMove} onMouseLeave={onLeaveTable}>
      <div className="-mx-gutter grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] border-b border-border px-gutter pb-3 font-mono text-[10px] uppercase text-toggle md:grid-cols-3">
        <span>Name</span>
        <span>Status</span>
        <span>Year</span>
      </div>
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/works/${work.slug}`}
          onMouseEnter={() => {
            setActive(work.slug)
            const src = getWorkPreview(work.slug)
            if (src) {
              const image = new window.Image()
              image.src = src
            }
          }}
          className="group -mx-gutter grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] items-center border-b border-border px-gutter py-3 transition-colors duration-200 hover:bg-foreground md:grid-cols-3"
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="font-heading truncate text-sm font-normal group-hover:text-background md:text-base">
              {work.name}
            </span>
            {work.version ? (
              <span className="shrink-0 rounded-[4px] border border-border px-1.5 font-mono text-[10px] leading-5 text-muted-foreground group-hover:border-background group-hover:text-background">
                {work.version}
              </span>
            ) : null}
          </span>
          <span className="font-mono text-xs uppercase text-muted-foreground group-hover:text-background/65">
            {work.status}
          </span>
          <span className="flex items-center justify-between font-mono text-xs uppercase text-muted-foreground group-hover:text-background/65">
            {work.year}
            <ArrowUpRight
              className="size-2.5 shrink-0 text-foreground group-hover:text-background"
              strokeWidth={1.5}
            />
          </span>
        </Link>
      ))}

      {enabled ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-40 hidden overflow-hidden md:block"
          style={{
            x,
            y,
            width: previewSize.width,
            height: previewSize.height,
          }}
          animate={{
            opacity: showPreview ? 1 : 0,
            scale: showPreview ? 1 : 0.92,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence>
            {preview ? (
              <motion.img
                key={preview}
                src={preview}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 size-full object-cover"
              />
            ) : null}
          </AnimatePresence>
          <FrameMarks markClassName="text-white" />
        </motion.div>
      ) : null}
    </div>
  )
}
