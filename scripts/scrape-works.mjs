const slugs = [
  "pbtfans-absolute",
  "pbtfans-spark-3",
  "kc-orange",
  "pbtfans-twist",
  "pbtfans-spark-light-2",
  "pbtfans-virtuoso",
  "pbtfans-confettis",
  "pbtfans-no-signal",
  "pbtfans-nano",
  "pc-neon-lights",
  "pbtfans-twist-2",
  "gmk-extended-2048",
  "kat-operator",
  "kam-playground",
  "pbtfans-doppelganger",
  "kat-white-on-black",
  "boop65-redux",
  "pbtfans-spark-2",
  "pbtfans-ryokan",
  "gmk-nightlife",
  "pbtfans-spark-light",
  "mt3-operator",
  "kat-milkshake-double-shot",
  "mt3-extended-2048-dark",
  "gmk-trackday",
  "pbtfans-twist-1",
  "pbtfans-spark",
  "pbt-industrial-keys",
  "pbt-raw",
  "pc-clear-2048",
  "wrk-cartridge",
  "gmk-parcel",
  "pbt-notion",
  "gmk-dots-2",
  "epbt-cool-kids-2",
  "gmk-awaken",
  "dsa-milkshake-2",
  "ec-extended-2048",
  "gmk-honor",
  "mt3-extended-2048",
  "gmk-bento-2",
  "kam-wraith",
  "epbt-cool-kids",
  "gmk-bushido",
  "gmk-dots",
  "gmk-bento",
  "kat-milkshake",
  "epbt-extended-2048",
  "dsa-milkshake",
]

function attr(html, property) {
  const re = new RegExp(
    `property="${property}" content="([^"]*)"`,
    "i"
  )
  const match = html.match(re)
  return match ? decode(match[1]) : ""
}

function decode(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
}

function moreInfo(html) {
  const match = html.match(
    /href="(https:\/\/(?:kbdfans\.com|geekhack\.org|novelkeys\.com|drop\.com)[^"]+)"/i
  )
  return match ? decode(match[1]) : undefined
}

const results = {}

for (const slug of slugs) {
  const res = await fetch(`https://biipmk.com/works/${slug}`)
  const html = await res.text()
  const description = attr(html, "og:description")
  const image = attr(html, "og:image").split("?")[0]
  results[slug] = {
    description,
    image,
    moreInfo: moreInfo(html),
  }
  console.error(slug, description ? description.slice(0, 40) : "NO DESC", image ? "img" : "NO IMG")
}

const { writeFileSync } = await import("node:fs")
writeFileSync(
  new URL("../lib/work-cms.json", import.meta.url),
  JSON.stringify(results, null, 2)
)
console.error("wrote", Object.keys(results).length)
