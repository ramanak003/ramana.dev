export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0h128v64H64z M64 64h64v192H64z M192 64h64v64h-64z M128 128h64v64h-64z M192 192h64v64h-64z M320 0h64v256h-64z M448 0h64v64h-64z M384 64h64v64h-64z M384 128h64v64h-64z M448 192h64v64h-64z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M32 0h64v32H32z M32 32h32v96H32z M96 32h32v32H96z M64 64h32v32H64z M96 96h32v32H96z M160 0h32v128h-32z M224 0h32v32h-32z M192 32h32v32h-32z M192 64h32v32h-32z M224 96h32v32h-32z"/></svg>`
}
