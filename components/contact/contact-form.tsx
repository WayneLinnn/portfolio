"use client"

import { useState, type FormEvent } from "react"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="font-heading text-[18px] leading-[29.7px]">
        Thanks — I'll get back to you soon.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase text-[#9d9d9f]">
          Name
        </span>
        <input
          required
          name="name"
          placeholder="John Keycap"
          className="h-10 rounded-[12px] bg-foreground/10 px-3 font-heading text-base outline-none placeholder:text-muted-foreground"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase text-[#9d9d9f]">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          placeholder="yourself@mail.com"
          className="h-10 rounded-[12px] bg-foreground/10 px-3 font-heading text-base outline-none placeholder:text-muted-foreground"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase text-[#9d9d9f]">
          Message
        </span>
        <textarea
          required
          name="message"
          placeholder="Your message"
          rows={4}
          className="min-h-[100px] resize-none rounded-[12px] bg-foreground/10 px-3 py-3 font-heading text-base outline-none placeholder:text-muted-foreground"
        />
      </label>
      <button
        type="submit"
        className="flex h-10 items-center justify-center rounded-[12px] bg-foreground font-heading text-xs font-bold text-background"
      >
        Submit
      </button>
    </form>
  )
}
