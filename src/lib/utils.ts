import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { BASE_PATH } from "@/config/constants"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  if (path.startsWith("http") || path.startsWith("//")) return path
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${cleanPath}`
}
