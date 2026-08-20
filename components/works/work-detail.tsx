import Image from "next/image"
import Link from "next/link"
import { LayoutGrid } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import { FrameMarks } from "@/components/plus-mark"
import { WorkAdjacentLink } from "@/components/works/work-adjacent-link"
import {
  getAdjacentWorks,
  getWorkDetail,
} from "@/lib/work-detail"

function RichText({ text }: { text: string }) {
  const parts = text.split(/(_[^_]+_)/g)

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("_") && part.endsWith("_") && part.length > 2 ? (
          <em key={index}>{part.slice(1, -1)}</em>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  )
}

export function WorkDetail({ slug }: { slug: string }) {
  const work = getWorkDetail(slug)

  if (!work) return null

  const { prev, next } = getAdjacentWorks(slug)

  return (
    <article className="relative pb-24">
      <FrameMarks />
      <div className="flex items-end justify-between gap-6 pt-8">
        <h1 className="flex min-w-0 flex-wrap items-center gap-3 font-heading text-[clamp(2.25rem,10vw,4rem)] leading-[1.2] font-normal md:leading-[1.4]">
          {work.name}
          {work.version ? (
            <span className="border border-border px-1.5 font-mono text-[10px] leading-5">
              {work.version}
            </span>
          ) : null}
        </h1>
        <Link
          href="/works"
          className="mb-5 flex shrink-0 items-center gap-2 font-heading text-xs font-bold"
        >
          <LayoutGrid className="size-4" strokeWidth={1.5} />
          Back to works
        </Link>
      </div>

      {work.hero ? (
        <div className="relative mt-10 aspect-[1873/516] w-full overflow-hidden bg-secondary">
          <Image
            src={work.hero}
            alt={work.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-1 gap-8 py-2 md:grid-cols-[1fr_2fr] md:gap-x-16 lg:gap-x-[216px]">
        <p className="font-mono text-xs text-[#8a8a8c] uppercase">
          {work.year} /
        </p>
        <p className="font-mono text-xs uppercase">{work.type}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-x-16 lg:gap-x-[216px]">
        <aside>
          <p className="font-mono text-[10px] uppercase text-[#9d9d9f]">
            Technical characteristics
          </p>
          <div className="mt-4">
            {work.specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 py-1.5 font-mono text-xs uppercase"
              >
                <span>{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
          {work.moreInfo ? (
            <CtaLink href={work.moreInfo} className="mt-8">
              More info
            </CtaLink>
          ) : null}
        </aside>

        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-[28px] leading-[42px] font-normal">
            {work.headline}
          </h2>
          {work.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="font-heading text-[18px] leading-[29.7px] font-normal"
            >
              <RichText text={paragraph} />
            </p>
          ))}

          {work.gallery.length ? (
            <div className="mt-4 flex flex-col gap-4">
              {work.gallery.map((src) => (
                <div key={src} className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex gap-3">
            {prev ? (
              <WorkAdjacentLink
                href={`/works/${prev.slug}`}
                side="prev"
                className="flex-1"
              >
                {prev.name}
              </WorkAdjacentLink>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <WorkAdjacentLink
                href={`/works/${next.slug}`}
                side="next"
                className="flex-1"
              >
                {next.name}
              </WorkAdjacentLink>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
