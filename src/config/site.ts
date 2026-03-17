import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: "ramana.dev",
  url: process.env.APP_URL || "https://ramanak003.github.io/ramana.dev/",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
]

export const GITHUB_USERNAME = "ramanak003"
export const SOURCE_CODE_GITHUB_REPO = "ramanak003/ramana.dev"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ramanak003/ramana.dev"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ramanak003"

export const UTM_PARAMS = {
  utm_source: "ramana.dev",
}
