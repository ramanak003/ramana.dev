import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
      )
      if (!res.ok) {
        throw new Error(`Failed to fetch contributions: ${res.statusText}`)
      }
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions
    } catch (error) {
      console.warn("Failed to fetch GitHub contributions:", error)
      return []
    }
  },
  [`github-contributions-${GITHUB_USERNAME}`],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
