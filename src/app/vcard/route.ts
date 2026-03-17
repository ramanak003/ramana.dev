import fs from "node:fs"
import path from "node:path"

import { NextResponse } from "next/server"
import sharp from "sharp"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"

export const dynamic = "force-static"

export async function GET() {
  const card = new VCard()

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumber))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.email))
    .addURL(USER.website)

  const photo = await getVCardPhoto(USER.avatar)
  if (photo) {
    card.addPhoto(photo.image, photo.mine)
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  })
}

async function getVCardPhoto(url: string) {
  try {
    let buffer: Buffer
    let contentType: string

    if (url.startsWith("/")) {
      // Handle local path
      const filePath = path.join(process.cwd(), "public", url)
      buffer = await fs.promises.readFile(filePath)
      const ext = path.extname(url).toLowerCase()
      contentType =
        ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".png"
            ? "image/png"
            : ext === ".webp"
              ? "image/webp"
              : ""
    } else {
      // Handle remote URL
      const res = await fetch(url)
      if (!res.ok) return null
      buffer = Buffer.from(await res.arrayBuffer())
      contentType = res.headers.get("Content-Type") || ""
    }

    if (buffer.length === 0 || !contentType.startsWith("image/")) {
      return null
    }

    const jpegBuffer = await convertImageToJpeg(buffer)
    const image = jpegBuffer.toString("base64")

    return {
      image,
      mine: "jpeg",
    }
  } catch (error) {
    console.error("Error loading vCard photo:", error)
    return null
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    console.error("Error converting image to JPEG:", error)
    throw error
  }
}
