import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentDirs = [
  path.join(__dirname, "src", "features", "blog", "content"),
  path.join(__dirname, "src", "config"),
  path.join(__dirname, "src", "features", "portfolio", "data"),
  path.join(__dirname, "src", "registry"),
]

contentDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) return
  const files = fs
    .readdirSync(dir)
    .filter(
      (f) => f.endsWith(".mdx") || f.endsWith(".ts") || f.endsWith(".tsx")
    )

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    let content = fs.readFileSync(filePath, "utf8")

    const original = content
    // Standardize to root ramana.dev
    content = content.replace(
      /https:\/\/www\.ramana\.dev/g,
      "https://ramana.dev"
    )
    content = content.replace(
      /https:\/\/ramana\.dev/g,
      "https://ramana-dev.vercel.app"
    )

    if (content !== original) {
      fs.writeFileSync(filePath, content)
      console.log(`Updated ${file} in ${dir}`)
    }
  })
})
