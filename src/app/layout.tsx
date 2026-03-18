import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { WebSite, WithContext } from "schema-dts"

import { ConsentManager } from "@/components/consent-manager"
import { DuckFollower } from "@/components/duck-follower"
import { Providers } from "@/components/providers"
import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { fontMono, fontSans } from "@/lib/fonts"
import { withBasePath } from "@/lib/utils"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username, "Problem Solver", "ramanaportfolio"],
  }
}

function getPersonJsonLd(): WithContext<any> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: USER.displayName,
    url: SITE_INFO.url,
    jobTitle: USER.jobTitle,
    description: SITE_INFO.description,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  }
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    locale: "en_US",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${USER.username}`,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE", // Add code here from Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>
            <ConsentManager>
              {children}
              <DuckFollower />
            </ConsentManager>
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
