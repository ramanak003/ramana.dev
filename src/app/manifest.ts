import type { MetadataRoute } from "next"

export const dynamic = "force-static"

import { SITE_INFO } from "@/config/site"
import { withBasePath } from "@/lib/utils"

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: withBasePath("/favicon.ico"),
        sizes: "any",
        purpose: "any",
      },
    ],
    id: withBasePath("/?utm_source=pwa"),
    start_url: withBasePath("/?utm_source=pwa"),
    display: "standalone",
    scope: "/",
    screenshots: [],
  }
}
