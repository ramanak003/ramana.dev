import Image from "next/image"
import Link from "next/link"

import { SOCIAL_LINKS } from "../data/social-links"
import { Panel, PanelContent } from "./panel"
import { withBasePath } from "@/lib/utils"

export function SocialLinks() {
    return (
        <Panel id="socials">
            <PanelContent>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {SOCIAL_LINKS.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-xl border border-border bg-background p-2 transition-colors hover:bg-muted"
                        >
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src={link.icon}
                                    alt={link.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="truncate text-sm font-medium text-foreground">
                                    {link.title}
                                </span>
                                <span className="truncate text-xs text-muted-foreground">
                                    {link.description}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </PanelContent>
        </Panel>
    )
}
