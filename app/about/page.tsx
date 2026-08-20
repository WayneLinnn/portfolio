import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { CtaLink } from "@/components/cta-link"
import { Reveal } from "@/components/motion/reveal"
import { PageShell } from "@/components/page-shell"
import { Separator } from "@/components/ui/separator"

const expertise = [
  "Art Direction",
  "Visual Identity",
  "UI/UX",
  "Product Design",
  "Editorial Design",
  "Manufacturer",
  "Custom Typeface",
]

function BioLink({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const className = "underline decoration-foreground/35 underline-offset-[3px]"

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <PageShell title="About">
      <Separator className="mt-4" />
      <div className="relative mt-10 aspect-[1873/516] min-h-[180px] w-full overflow-hidden bg-secondary md:min-h-0">
        <Image
          src="/about/portrait.png"
          alt="Louis at the studio, reviewing color swatches"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Reveal>
      <div className="mt-12 grid grid-cols-1 gap-12 pb-24 md:grid-cols-[1fr_1.4fr] md:gap-x-16 lg:gap-x-[174px]">
        <aside>
          <p className="font-mono text-[10px] uppercase text-[#9d9d9f]">
            Expertise
          </p>
          <div className="mt-4">
            {expertise.map((item) => (
              <p
                key={item}
                className="border-t border-border py-1.5 font-mono text-xs uppercase first:border-t-0"
              >
                {item}
              </p>
            ))}
          </div>
        </aside>
        <div className="flex flex-col gap-5">
          <h2 className="font-heading pb-1 text-[clamp(1.35rem,4vw,1.75rem)] leading-[1.5] font-normal">
            Based in Strasbourg, I am a digital designer with over 10 years of
            experience in visual communication with a fervent passion for visual
            arts and keycap design.
          </h2>
          <p className="font-heading text-[18px] leading-[29.7px] font-normal">
            Ever since I was a child, I spent countless hours playing with Lego,
            inventing fictional scenes and building imaginary worlds. This early
            interest in creative play led me to visual arts and eventually to
            study applied arts, specializing in visual communication with a
            focus on typography and graphic design. Right after my studies, I
            had the opportunity in 2013 to work in a communication agency as a
            graphic designer, where I then honed my skills in editorial design,
            webdesign and visual identity to finally reach the position of Art
            Director.
          </p>
          <p className="font-heading text-[18px] leading-[29.7px] font-normal">
            In 2017, I discovered mechanical keyboards and keycaps. I was
            fascinated by the idea of customizing something I use every day. Out
            of curiosity, I entered a community keycap design contest organized
            by{" "}
            <BioLink href="https://drop.com/home" external>
              Drop
            </BioLink>
            . At that time, I had absolutely no technical knowledge about
            creating keycap sets, but I thought, “why not?”. I designed a set
            inspired by the Apple Extended II Keyboard, whose distinctive and
            timeless aesthetic (imo) I admired, that will later become{" "}
            <BioLink href="/works/epbt-extended-2048">
              EPBT Extended 2048
            </BioLink>
            . I didn’t win the contest, but that's how I end up down the rabbit
            hole. Soon after, I decided to create another set, this time
            featuring a custom typeface I had designed myself. When I shared my
            early design intentions on Slack, someone named{" "}
            <BioLink href="https://oblotzky.industries/" external>
              Oblotzky
            </BioLink>{" "}
            reached out, offering to help with 3D renders and production. That
            collaboration led to the creation of{" "}
            <BioLink href="/works/dsa-milkshake">DSA Milkshake</BioLink>, my
            very first produced keycap set.
          </p>
          <p className="font-heading text-[18px] leading-[29.7px] font-normal">
            In 2023, after a decade in the communication field, I decided to
            devote myself full time to designing keycap sets (in addition to my
            digital design services) from color scheme to custom font and icons
            design. The creation of keycaps has a particular meaning for me
            since they are a main component of the keyboard, object that we have
            in our hands every day and that deserves to be taken care of. By
            customizing the look of keycaps, giving them a singular style, and
            making them unique, I have the opportunity to create something that
            has a positive impact on the daily user experience. Later that same
            year, I've co-founded{" "}
            <BioLink href="https://www.cxl.studio/" external>
              CXL Studio
            </BioLink>{" "}
            with Cyrille Brun, a two-person organization dedicated to providing
            creative web solutions.
          </p>
          <p className="font-heading text-[18px] leading-[29.7px] font-normal">
            The following year, I embarked on an ambitious project:{" "}
            <BioLink href="https://keycapsule.shop/" external>
              Keycapsule
            </BioLink>
            . The concept: a limited edition of 200 keycap sets on a given
            theme, available for sale only once. It's also a playground that
            allows me to try new things and offer people keycaps with bold and
            divisive designs.
          </p>
          <p className="font-heading text-[18px] leading-[29.7px] font-normal">
            Since then, I've been fortunate enough to design over 50 keycap
            sets.
          </p>
          <CtaLink href="/works" className="mt-3">
            Explore works
          </CtaLink>
        </div>
      </div>
      </Reveal>
    </PageShell>
  )
}
