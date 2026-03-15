import { motion } from "motion/react"
import Image from "next/image"

import { USER } from "@/features/portfolio/data/user"
import { FlipSentences } from "@/registry/flip-sentences/flip-sentences"

import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex grow items-end pb-1 pl-4">
        <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
          {"text-3xl "}
          <span className="inline dark:hidden">text-zinc-950</span>
          <span className="hidden dark:inline">text-zinc-50</span>
          {" font-medium"}
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="flex items-center gap-4 pl-4 py-4">
          <div className="relative size-32 shrink-0 overflow-hidden rounded-full border border-edge">
            <Image
              src={USER.avatar}
              alt={USER.displayName}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold tracking-tight">
                {USER.displayName}
              </h1>

              <VerifiedIcon
                className="size-4.5 text-info select-none"
                aria-label="Verified"
              />

              {USER.namePronunciationUrl && (
                <PronounceMyName
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              )}
            </div>

            <FlipSentences
              as={motion.p}
              className="font-mono text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1"
              interval={3}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  )
}
