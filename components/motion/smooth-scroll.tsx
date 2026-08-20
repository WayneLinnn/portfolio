"use client"

import type { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        lerp: 0.09,
        duration: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  )
}
