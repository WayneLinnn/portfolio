import { CtaLink } from "@/components/cta-link"
import { Reveal } from "@/components/motion/reveal"

const introCopy = `Hi, I'm Louis, more commonly known as biip, French art director based in Strasbourg, with a fervent passion for visual arts and keycap & keyboard design, with over 10 years of experience in the design field. Since 2018, I have been fortunate enough to design 50+ keycap sets, working with several partners all over the world, always seeking artistic or technical innovation.`

export function Intro() {
  return (
    <Reveal>
      <section
        id="intro"
        className="grid scroll-mt-[82px] grid-cols-1 gap-gutter py-16 md:grid-cols-12 md:py-32"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase md:col-span-3">
          About me
        </p>
        <div className="flex flex-col items-start gap-8 md:col-span-9">
          <p className="font-heading text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.5] font-normal">
            {introCopy}
          </p>
          <CtaLink href="/about">More insights</CtaLink>
        </div>
      </section>
    </Reveal>
  )
}
