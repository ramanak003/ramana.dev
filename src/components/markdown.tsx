import { MarkdownAsync } from "react-markdown"
import rehypeExternalLinks from "rehype-external-links"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

import { ImageZoom } from "@/components/kibo-ui/image-zoom"
import { UTM_PARAMS } from "@/config/site"
import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params"

export function Markdown(props: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <MarkdownAsync
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeExternalLinks,
          { target: "_blank", rel: "nofollow noopener noreferrer" },
        ],
        [rehypeAddQueryParams, UTM_PARAMS],
      ]}
      components={{
        p: ({ children }) => <div className="mb-4 last:mb-0">{children}</div>,
        img: ({ src, alt }) => {
          if (!src) return null
          return (
            <ImageZoom>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="mx-auto block h-auto max-w-md rounded-lg border border-edge"
              />
            </ImageZoom>
          )
        },
      }}
      {...props}
    />
  )
}
