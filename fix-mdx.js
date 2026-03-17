import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentDir = path.join(__dirname, "src", "features", "blog", "content")

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

files.forEach((file) => {
  const filePath = path.join(contentDir, file)
  let content = fs.readFileSync(filePath, "utf8")

  // Fix typo and standardize in one go
  const original = content
  content = content.replace(
    /https:\/\/ramana\.devr\//g,
    "https://www.ramana.dev/r/"
  )
  content = content.replace(/https:\/\/ramana\.dev/g, "https://www.ramana.dev")

  if (content !== original) {
    fs.writeFileSync(filePath, content)
    console.log(`Updated ${file}`)
  }
})
