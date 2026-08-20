import { cn } from "@/lib/utils"

export function PlusMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      className={cn("size-2 text-foreground", className)}
    >
      <path
        d="M 3.5 0 L 4.5 0 L 4.5 3.5 L 8 3.5 L 8 4.5 L 4.5 4.5 L 4.5 8 L 3.5 8 L 3.5 4.5 L 0 4.5 L 0 3.5 L 3.5 3.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function FrameMarks({
  className,
  markClassName,
}: {
  className?: string
  markClassName?: string
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-3", className)}>
      <PlusMark className={cn("absolute top-0 left-0", markClassName)} />
      <PlusMark className={cn("absolute top-0 right-0", markClassName)} />
      <PlusMark className={cn("absolute bottom-0 left-0", markClassName)} />
      <PlusMark className={cn("absolute right-0 bottom-0", markClassName)} />
    </div>
  )
}
