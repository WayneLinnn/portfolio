import Image from "next/image"
import Link from "next/link"

import { FrameMarks } from "@/components/plus-mark"
import type { Work } from "@/lib/works"

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-t border-border py-1.5 font-mono text-[12px] uppercase last:border-b">
      <span>{label}</span>
      <span className="text-right">{value}</span>
    </div>
  )
}

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.slug}`} className="group flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
        <h3 className="font-heading text-xl font-normal">{work.name}</h3>
        {work.version ? (
          <span className="border border-border px-1.5 font-mono text-[10px] leading-5">
            {work.version}
          </span>
        ) : null}
      </div>
      {work.cover ? (
        <div className="relative aspect-[928/623] overflow-hidden">
          <Image
            src={work.cover}
            alt={work.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <FrameMarks />
        </div>
      ) : null}
      <div>
        <SpecRow label="Year" value={String(work.year)} />
        <SpecRow label="Type" value={work.type} />
        <SpecRow label="Status" value={work.status} />
      </div>
    </Link>
  )
}
