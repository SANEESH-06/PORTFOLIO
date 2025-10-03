"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  from?: { opacity: number; y: number }
  to?: { opacity: number; y: number }
  splitType?: "chars" | "words"
  onLetterAnimationComplete?: () => void
}

export default function SplitText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  splitType = "chars",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".letter")
    if (elements) {
      gsap.fromTo(
        elements,
        from,
        {
          ...to,
          duration,
          delay,
          stagger: 0.05,
          ease,
          onComplete: () => {
            if (onLetterAnimationComplete) onLetterAnimationComplete()
          },
        }
      )
    }
  }, [delay, duration, ease, from, to, onLetterAnimationComplete])

  return (
    <div ref={containerRef} className={className}>
      {splitType === "words"
        ? text.split(" ").map((word, i) => (
            <span key={i} className="letter inline-block mr-1">
              {word}
            </span>
          ))
        : text.split("").map((char, i) => (
            <span
              key={i}
              className="letter inline-block"
              style={{ marginRight: char === " " ? ".8rem" : undefined }}
            >
              {char}
            </span>
          ))}
    </div>
  )
}
