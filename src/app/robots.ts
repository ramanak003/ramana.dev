import type { MetadataRoute } from "next"

export const dynamic = "force-static"

import { SITE_INFO } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  }
}
