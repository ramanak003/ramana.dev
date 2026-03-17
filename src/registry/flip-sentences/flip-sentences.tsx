"use client"

import type { Transition, Variants } from "motion/react"
import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

import { cn } from "@/lib/utils"

const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
}

type MotionElement = "p" | "span" | "code" | typeof motion.p

type Props = {
  as?: MotionElement
  className?: string
  children: React.ReactNode[]

  interval?: number
  transition?: Transition
  variants?: Variants

  onIndexChange?: (index: number) => void
}

export function FlipSentences({
  as = "p",
  className,
  children,

  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,

  onIndexChange,
}: Props) {
  const [isClient, setIsClient] = React.useState(false)
  React.useEffect(() => setIsClient(true), [])

  const [currentIndex, setCurrentIndex] = React.useState(0)

  const items = React.Children.toArray(children)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange])

  const Component = isClient
    ? typeof as === "string"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? (motion as any)[as]
      : as
    : typeof as === "string"
      ? as
      : "p"

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component
        key={currentIndex}
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  )
}
