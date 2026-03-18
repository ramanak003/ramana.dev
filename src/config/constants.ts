/**
 * The base URL for assets like images, icons, etc.
 */
// Fallback to /ramana.dev for GitHub Pages subpath if NEXT_PUBLIC_BASE_PATH is not set
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/ramana.dev' : '')
export const ASSETS_URL = BASE_PATH
