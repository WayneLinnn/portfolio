import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkDetail } from "@/components/works/work-detail"
import { getWorkDetail } from "@/lib/work-detail"
import { works } from "@/lib/works"

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const work = getWorkDetail(slug)

  if (!work) return {}

  return {
    title: `${work.name} - biipmk`,
    description: work.headline,
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = getWorkDetail(slug)

  if (!work) {
    notFound()
  }

  return <WorkDetail slug={slug} />
}
