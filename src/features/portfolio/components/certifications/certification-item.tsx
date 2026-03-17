import { format } from "date-fns"
import { ArrowUpRightIcon, CircleCheckBigIcon } from "lucide-react"
import Image from "next/image"

import { getIcon } from "@/components/icons"
import { Markdown } from "@/components/markdown"
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { ProseMono } from "@/components/ui/typography"
import { cn, withBasePath } from "@/lib/utils"

import type { Certification } from "../../types/certifications"

export function CertificationItem({
  className,
  certification,
}: {
  className?: string
  certification: Certification
}) {
  const canExpand = !!certification.description

  return (
    <CollapsibleWithContext defaultOpen={certification.isExpanded} asChild>
      <div className={cn("group", className)}>
        <div className="flex items-center hover:bg-accent-muted">
          {certification.issuerLogoURL ? (
            <Image
              src={withBasePath(certification.issuerLogoURL)}
              alt={certification.issuer}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none dark:grayscale"
              unoptimized
              aria-hidden
            />
          ) : (
            <div
              className={cn(
                "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
                "bg-muted text-muted-foreground [&_svg]:size-4"
              )}
              aria-hidden
            >
              {getIcon(certification.issuerIconName) ?? <CircleCheckBigIcon />}
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <div className="flex w-full items-center gap-2 pr-2">
              <CollapsibleTrigger
                className="flex flex-1 items-center gap-2 p-4 pr-2 text-left"
                disabled={!canExpand}
              >
                <div className="flex-1 space-y-1">
                  <h3
                    className={cn(
                      "leading-snug font-medium text-balance underline-offset-4",
                      !canExpand && "group-hover:underline"
                    )}
                  >
                    {certification.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    <dl>
                      <dt className="sr-only">Issued by</dt>
                      <dd>
                        <span aria-hidden>@</span>
                        <span className="ml-0.5">{certification.issuer}</span>
                      </dd>
                    </dl>

                    <Separator
                      className="data-[orientation=vertical]:h-4"
                      orientation="vertical"
                    />

                    <dl>
                      <dt className="sr-only">Issued on</dt>
                      <dd>
                        <time
                          dateTime={new Date(
                            certification.issueDate
                          ).toISOString()}
                        >
                          {format(
                            new Date(certification.issueDate),
                            "dd.MM.yyyy"
                          )}
                        </time>
                      </dd>
                    </dl>
                  </div>
                </div>

                {canExpand && (
                  <div
                    className="shrink-0 text-muted-foreground [&_svg]:size-4"
                    aria-hidden
                  >
                    <CollapsibleChevronsIcon />
                  </div>
                )}
              </CollapsibleTrigger>

              {certification.credentialURL && (
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noopener"
                >
                  <ArrowUpRightIcon
                    className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45"
                    aria-hidden
                  />
                  <span className="sr-only">Verify Credential</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="border-t border-edge shadow-inner">
              <ProseMono className="p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                <Markdown>{certification.description}</Markdown>
              </ProseMono>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </CollapsibleWithContext>
  )
}
