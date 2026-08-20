import { ArrowUpRight } from "lucide-react"

import { ContactForm } from "@/components/contact/contact-form"
import { StoryMarquee } from "@/components/contact/story-marquee"
import { Reveal } from "@/components/motion/reveal"
import { PageShell } from "@/components/page-shell"
import { Separator } from "@/components/ui/separator"
import { contactSocial } from "@/lib/site"

export const metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <Separator className="mt-4" />
      <Reveal>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-x-16 lg:gap-x-[174px]">
        <aside>
          <p className="font-mono text-[10px] uppercase text-[#9d9d9f]">
            Find me
          </p>
          <div className="mt-4 flex flex-col gap-1.5">
            {contactSocial.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs font-bold"
              >
                {item.label}
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </aside>
        <div className="flex flex-col gap-8">
          <h2 className="font-heading text-[clamp(1.35rem,4vw,1.75rem)] leading-[1.5] font-normal">
            Have a project in mind? Whether it's a commission or collaboration,
            I'd love to be part of making it happen.
          </h2>
          <ContactForm />
        </div>
      </div>
      </Reveal>
      <StoryMarquee />
    </PageShell>
  )
}
