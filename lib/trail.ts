import { tokens } from "@/lib/tokens"

export const trailImages = [
  "/trail/01.jpg",
  "/trail/02.jpg",
  "/trail/03.jpg",
  "/trail/04.jpg",
  "/trail/05.jpg",
  "/trail/06.jpg",
] as const

export const trailSpring = {
  type: "spring" as const,
  stiffness: 500,
  damping: 60,
  mass: 1,
}

export const trailSize = {
  width: tokens.trail.width,
  height: tokens.trail.height,
  gap: tokens.trail.gap,
  visibleFor: tokens.trail.visibleFor,
}
