"use client"

import * as React from "react"
import { motion } from "motion/react"

import { trailImages, trailSize, trailSpring } from "@/lib/trail"
import { cn } from "@/lib/utils"

type Stamp = {
  id: number
  x: number
  y: number
  src: string
  state: "in" | "out"
}

function canUseTrail() {
  if (typeof window === "undefined") {
    return false
  }

  return window.matchMedia("(pointer: fine) and (hover: hover)").matches
}

export function ImageTrail({ className }: { className?: string }) {
  const [stamps, setStamps] = React.useState<Stamp[]>([])
  const [enabled, setEnabled] = React.useState(false)
  const lastRef = React.useRef<{ x: number; y: number } | null>(null)
  const indexRef = React.useRef(0)
  const timeoutsRef = React.useRef<number[]>([])

  React.useEffect(() => {
    setEnabled(canUseTrail())
    trailImages.forEach((src) => {
      const image = new window.Image()
      image.src = src
    })

    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!enabled) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const last = lastRef.current
    const dist = last ? Math.hypot(x - last.x, y - last.y) : Number.POSITIVE_INFINITY

    if (dist <= trailSize.gap) {
      return
    }

    const id = Date.now() + Math.random()
    const src = trailImages[indexRef.current % trailImages.length]
    indexRef.current += 1
    lastRef.current = { x, y }

    setStamps((current) => {
      const next = [
        ...current,
        { id, x, y, src, state: "in" as const },
      ]
      return next.length > 16 ? next.slice(-16) : next
    })

    const hideId = window.setTimeout(() => {
      setStamps((current) =>
        current.map((stamp) =>
          stamp.id === id ? { ...stamp, state: "out" } : stamp
        )
      )
    }, trailSize.visibleFor * 1000)

    const removeId = window.setTimeout(() => {
      setStamps((current) => current.filter((stamp) => stamp.id !== id))
    }, trailSize.visibleFor * 1000 + 2000)

    timeoutsRef.current.push(hideId, removeId)
  }

  if (!enabled) {
    return null
  }

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseMove={onMouseMove}
    >
      {stamps.map((stamp) => (
        <motion.div
          key={stamp.id}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: stamp.x - trailSize.width / 2,
            y: stamp.y - trailSize.height / 2,
          }}
          animate={
            stamp.state === "in"
              ? {
                  opacity: 1,
                  scale: 1,
                  x: stamp.x - trailSize.width / 2,
                  y: stamp.y - trailSize.height / 2,
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  x: stamp.x - trailSize.width / 2,
                  y: stamp.y - trailSize.height / 2,
                }
          }
          transition={trailSpring}
          className="pointer-events-none absolute top-0 left-0 bg-cover bg-center"
          style={{
            width: trailSize.width,
            height: trailSize.height,
            backgroundImage: `url(${stamp.src})`,
          }}
        />
      ))}
    </div>
  )
}
