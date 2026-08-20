export type WorkStatus = "Completed" | "Currently available" | "Interest Check"

export type Work = {
  slug: string
  name: string
  version?: number
  year: number
  type: string
  status: WorkStatus
  cover?: string
  featured?: boolean
}

const featuredCovers: Record<string, string> = {
  "pbt-raw": "/works/pbt-raw.jpg",
  "pbtfans-no-signal": "/works/pbtfans-no-signal.jpg",
  "pbt-industrial-keys": "/works/pbt-industrial-keys.jpg",
  "pbtfans-twist-2": "/works/pbtfans-twist-2.jpg",
  "gmk-dots-2": "/works/gmk-dots-2.jpg",
  "gmk-awaken": "/works/gmk-awaken.jpg",
}

const featuredTypes: Record<string, string> = {
  "pbt-raw": "PBT Dye sub keycaps",
  "pbtfans-no-signal": "PBT Dye sub keycaps",
  "pbt-industrial-keys": "PBT Dye sub keycaps",
  "pbtfans-twist-2": "PBT Double shot keycaps",
  "gmk-dots-2": "ABS Double shot keycaps",
  "gmk-awaken": "ABS Double shot keycaps",
}

function inferType(name: string) {
  if (name.startsWith("GMK") || name.startsWith("KAT") || name.startsWith("KAM")) {
    return "ABS Double shot keycaps"
  }
  if (
    name.startsWith("PBTfans") ||
    name.startsWith("PBT ") ||
    name.startsWith("PC ") ||
    name.startsWith("EPBT") ||
    name.startsWith("EC ") ||
    name.startsWith("kc_") ||
    name.startsWith("DSA")
  ) {
    return "PBT Dye sub keycaps"
  }
  if (name.startsWith("MT3")) return "PBT keycaps"
  if (name.startsWith("boop") || name.startsWith("WRK")) return "Keyboard"
  return "Keycaps"
}

const catalog: Array<{
  slug: string
  name: string
  version?: number
  year: number
  status: WorkStatus
}> = [
  { slug: "pbtfans-absolute", name: "PBTfans Absolute", year: 2026, status: "Currently available" },
  { slug: "pbtfans-spark-3", name: "PBTfans Spark", version: 3, year: 2026, status: "Currently available" },
  { slug: "kc-orange", name: "kc_orange", year: 2026, status: "Currently available" },
  { slug: "pbtfans-twist", name: "PBTfans Twist", version: 3, year: 2026, status: "Interest Check" },
  { slug: "pbtfans-spark-light-2", name: "PBTfans Spark Light", version: 2, year: 2026, status: "Interest Check" },
  { slug: "pbtfans-virtuoso", name: "PBTfans Virtuoso", year: 2025, status: "Currently available" },
  { slug: "pbtfans-confettis", name: "PBTfans Confettis", year: 2025, status: "Currently available" },
  { slug: "pbtfans-no-signal", name: "PBTfans No Signal", version: 2, year: 2025, status: "Currently available" },
  { slug: "pbtfans-nano", name: "PBTfans Nano", year: 2025, status: "Currently available" },
  { slug: "pc-neon-lights", name: "PC Neon Lights", year: 2024, status: "Completed" },
  { slug: "pbtfans-twist-2", name: "PBTfans Twist", version: 2, year: 2024, status: "Currently available" },
  { slug: "gmk-extended-2048", name: "GMK Extended 2048", year: 2024, status: "Completed" },
  { slug: "kat-operator", name: "KAT Operator", year: 2024, status: "Currently available" },
  { slug: "kam-playground", name: "KAM Playground", year: 2024, status: "Currently available" },
  { slug: "pbtfans-doppelganger", name: "PBTfans Doppelganger", year: 2024, status: "Currently available" },
  { slug: "kat-white-on-black", name: "KAT White on Black", year: 2024, status: "Currently available" },
  { slug: "boop65-redux", name: "boop65 redux", year: 2024, status: "Completed" },
  { slug: "pbtfans-spark-2", name: "PBTfans Spark", version: 2, year: 2023, status: "Completed" },
  { slug: "pbtfans-ryokan", name: "PBTfans Ryokan", year: 2023, status: "Completed" },
  { slug: "gmk-nightlife", name: "GMK Nightlife", year: 2023, status: "Completed" },
  { slug: "pbtfans-spark-light", name: "PBTfans Spark Light", version: 1, year: 2023, status: "Completed" },
  { slug: "mt3-operator", name: "MT3 Operator", year: 2023, status: "Currently available" },
  { slug: "kat-milkshake-double-shot", name: "KAT Milkshake Double shot", version: 2, year: 2023, status: "Completed" },
  { slug: "mt3-extended-2048-dark", name: "MT3 Extended 2048 Dark", year: 2023, status: "Currently available" },
  { slug: "gmk-trackday", name: "GMK Trackday", year: 2022, status: "Completed" },
  { slug: "pbtfans-twist-1", name: "PBTfans Twist", version: 1, year: 2022, status: "Completed" },
  { slug: "pbtfans-spark", name: "PBTfans Spark", version: 1, year: 2022, status: "Completed" },
  { slug: "pbt-industrial-keys", name: "PBT Industrial Keys", year: 2022, status: "Completed" },
  { slug: "pbt-raw", name: "PBT RAW", year: 2022, status: "Completed" },
  { slug: "pc-clear-2048", name: "PC Clear 2048", year: 2022, status: "Completed" },
  { slug: "wrk-cartridge", name: "WRK Cartridge", year: 2022, status: "Completed" },
  { slug: "gmk-parcel", name: "GMK Parcel", year: 2021, status: "Completed" },
  { slug: "pbt-notion", name: "PBT Notion", year: 2021, status: "Completed" },
  { slug: "gmk-dots-2", name: "GMK Dots", version: 2, year: 2021, status: "Completed" },
  { slug: "epbt-cool-kids-2", name: "EPBT Cool Kids", version: 2, year: 2021, status: "Completed" },
  { slug: "gmk-awaken", name: "GMK Awaken", year: 2021, status: "Completed" },
  { slug: "dsa-milkshake-2", name: "DSA Milkshake", version: 2, year: 2021, status: "Completed" },
  { slug: "ec-extended-2048", name: "EC Extended 2048", year: 2020, status: "Completed" },
  { slug: "gmk-honor", name: "GMK Honor", year: 2020, status: "Completed" },
  { slug: "mt3-extended-2048", name: "MT3 Extended 2048", year: 2020, status: "Currently available" },
  { slug: "gmk-bento-2", name: "GMK Bento", version: 2, year: 2020, status: "Completed" },
  { slug: "kam-wraith", name: "KAM Wraith", year: 2020, status: "Completed" },
  { slug: "epbt-cool-kids", name: "EPBT Cool Kids", year: 2020, status: "Completed" },
  { slug: "gmk-bushido", name: "GMK Bushido", year: 2020, status: "Completed" },
  { slug: "gmk-dots", name: "GMK Dots", year: 2019, status: "Completed" },
  { slug: "gmk-bento", name: "GMK Bento", year: 2019, status: "Completed" },
  { slug: "kat-milkshake", name: "KAT Milkshake", version: 1, year: 2019, status: "Completed" },
  { slug: "epbt-extended-2048", name: "EPBT Extended 2048", year: 2019, status: "Completed" },
  { slug: "dsa-milkshake", name: "DSA Milkshake", version: 1, year: 2018, status: "Completed" },
]

export const works: Work[] = catalog.map((item) => ({
  ...item,
  type: featuredTypes[item.slug] ?? inferType(item.name),
  cover: featuredCovers[item.slug],
  featured: Boolean(featuredCovers[item.slug]),
}))

export function getFeaturedWorks() {
  return works.filter((work) => work.featured)
}

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug)
}
