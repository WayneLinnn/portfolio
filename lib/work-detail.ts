import cms from "@/lib/work-cms.json"
import type { Work } from "@/lib/works"
import { works } from "@/lib/works"

type CmsEntry = {
  description: string
  image: string
  moreInfo?: string
}

const entries = cms as Record<string, CmsEntry>

const extraGalleries: Record<string, string[]> = {
  "pbtfans-absolute": [
    "https://framerusercontent.com/images/MrZ4t5cTFeIXNItXcD46Zwfzzpo.jpg",
    "https://framerusercontent.com/images/ZSnGBuMhgTmTgoKJHXI7dFwe0.jpg",
    "https://framerusercontent.com/images/MvYT1kKTc9gNdAMXAY7HKdOqo.jpg",
    "https://framerusercontent.com/images/unoQAXDIXys0B9PO5fWtTiz08l8.jpg",
  ],
  "pbtfans-no-signal": [
    "https://framerusercontent.com/images/EIqB3XWPzC8qFKNk84oQNDyL4.jpg",
    "https://framerusercontent.com/images/PBl9UH87BEx8tZmViT3SFHI7H3o.jpg",
    "https://framerusercontent.com/images/gw4WsTPcuupObUvOxDzwmihQg.jpg",
    "https://framerusercontent.com/images/70ghxbMrCDi1nL70Q1wi2wwaq8.jpg",
    "https://framerusercontent.com/images/byZPxIvd8TelUSbvud0GBFfeE.jpg",
    "https://framerusercontent.com/images/4OcBHZyyebHhWMyQUg0W2bjf0.jpg",
    "https://framerusercontent.com/images/BZUHH3aFW98yeVmrnhuUsmIQ.jpg",
    "https://framerusercontent.com/images/FWgR7RlbIDiqcqeN8xHO5mk6zZs.jpg",
  ],
  "pbt-raw": [
    "https://framerusercontent.com/images/thnpXJuAX5kYEx6yhcO0LwzNSNU.jpg",
    "https://framerusercontent.com/images/a4TQVTNXSS5aAzuJSsVbvNWWmc.jpg",
    "https://framerusercontent.com/images/furatFVsjWMPUIk1tOmuScjpxgY.jpg",
    "https://framerusercontent.com/images/ZSBr6VOWcnzzokIajrvaIsxqm5c.jpg",
  ],
}

export type WorkSpec = {
  label: string
  value: string
}

export type WorkDetail = Work & {
  headline: string
  body: string[]
  hero?: string
  gallery: string[]
  specs: WorkSpec[]
  moreInfo?: string
}

function stripCmsSuffix(description: string) {
  return description
    .replace(
      /\s+—\s+[A-Za-z0-9][\s\S]*?(Dye sub|Injection|UV Print|Double shot)[\s\S]*$/i,
      ""
    )
    .trim()
}

function parseCopy(description: string) {
  const text = stripCmsSuffix(description)
  const chunks = text
    .split(/\s{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)

  if (chunks.length >= 2) {
    return { headline: chunks[0], body: chunks.slice(1) }
  }

  const dot = text.indexOf(". ")
  if (dot > 24 && dot < 240) {
    return {
      headline: text.slice(0, dot + 1),
      body: [text.slice(dot + 2).trim()].filter(Boolean),
    }
  }

  return { headline: text, body: [] as string[] }
}

function inferProfile(work: Work) {
  if (work.name.startsWith("MT3")) return "MT3"
  if (work.name.startsWith("DSA")) return "DSA"
  if (work.name.startsWith("KAT")) return "KAT"
  if (work.name.startsWith("KAM")) return "KAM"
  return "Cherry"
}

function inferLayout(work: Work) {
  if (work.name.startsWith("PBTfans") && work.status !== "Completed") {
    return "QWERTY, AZERTY"
  }
  return "QWERTY"
}

function inferManufacturer(work: Work) {
  if (work.name.startsWith("PBTfans") || work.name.startsWith("PBT ")) {
    return "PBTfans"
  }
  if (work.name.startsWith("GMK")) return "GMK electronic design"
  if (
    work.name.startsWith("KAT") ||
    work.name.startsWith("KAM") ||
    work.name.startsWith("kc_")
  ) {
    return "Keyreative"
  }
  if (work.name.startsWith("EPBT")) return "EPBT"
  return undefined
}

export function getWorkDetail(slug: string): WorkDetail | undefined {
  const work = works.find((item) => item.slug === slug)
  if (!work) return undefined

  const entry = entries[slug]
  const copy = entry?.description
    ? parseCopy(entry.description)
    : {
        headline: `${work.name} is a ${work.type} project from ${work.year}.`,
        body: [] as string[],
      }

  const specs: WorkSpec[] = [
    { label: "Status", value: work.status },
    { label: "Profile", value: inferProfile(work) },
  ]

  const manufacturer = inferManufacturer(work)
  if (manufacturer && (entry?.moreInfo || work.status !== "Completed")) {
    specs.push({ label: "Manufacturer", value: manufacturer })
  }

  specs.push({ label: "Layout", value: inferLayout(work) })

  const hero = entry?.image || work.cover
  const gallery = extraGalleries[slug] ?? []

  return {
    ...work,
    headline: copy.headline,
    body: copy.body,
    hero,
    gallery,
    specs,
    moreInfo: entry?.moreInfo,
  }
}

export function getWorkPreview(slug: string) {
  const work = works.find((item) => item.slug === slug)
  return work?.cover || entries[slug]?.image
}

export function getAdjacentWorks(slug: string) {
  const index = works.findIndex((item) => item.slug === slug)
  return {
    prev: index > 0 ? works[index - 1] : undefined,
    next: index >= 0 ? works[index + 1] : undefined,
  }
}
