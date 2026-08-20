const phrase = "Every keyboard should have a story to tell."
const line = `${phrase} ${phrase} ${phrase} ${phrase} `

export function StoryMarquee() {
  return (
    <div className="mt-16 overflow-hidden select-none" aria-hidden="true">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] font-heading text-[48px] leading-[80px] text-foreground/15 motion-reduce:animate-none md:text-[96px] md:leading-[144px]">
        <span className="pr-8 whitespace-nowrap">{line}</span>
        <span className="pr-8 whitespace-nowrap">{line}</span>
      </div>
    </div>
  )
}
