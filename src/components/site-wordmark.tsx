export function SiteWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0h128v64H64z M64 64h64v192H64z M192 64h64v64h-64z M128 128h64v64h-64z M192 192h64v64h-64z M320 0h128v64h-128z M320 64h64v192h-64z M448 64h64v192h-64z M384 128h64v64h-64z M576 0h64v256h-64z M640 64h64v64h-64z M704 0h64v256h-64z M832 0h128v64h-128z M832 64h64v192h-64z M960 64h64v192h-64z M896 128h64v64h-64z M1088 0h64v256h-64z M1152 64h64v64h-64z M1216 0h64v256h-64z M1344 0h128v64h-128z M1344 64h64v192h-64z M1472 64h64v192h-64z M1408 128h64v64h-64z M1600 0h64v256h-64z M1728 0h64v64h-64z M1664 64h64v64h-64z M1664 128h64v64h-64z M1728 192h64v64h-64z"
      />
    </svg>
  )
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><path fill="${color}" d="M64 0h128v64H64z M64 64h64v192H64z M192 64h64v64h-64z M128 128h64v64h-64z M192 192h64v64h-64z M320 0h128v64h-128z M320 64h64v192h-64z M448 64h64v192h-64z M384 128h64v64h-64z M576 0h64v256h-64z M640 64h64v64h-64z M704 0h64v256h-64z M832 0h128v64h-128z M832 64h64v192h-64z M960 64h64v192h-64z M896 128h64v64h-64z M1088 0h64v256h-64z M1152 64h64v64h-64z M1216 0h64v256h-64z M1344 0h128v64h-128z M1344 64h64v192h-64z M1472 64h64v192h-64z M1408 128h64v64h-64z M1600 0h64v256h-64z M1728 0h64v64h-64z M1664 64h64v64h-64z M1664 128h64v64h-64z M1728 192h64v64h-64z"/></svg>`
}
