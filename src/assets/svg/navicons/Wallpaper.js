import * as React from "react"

const SvgWallpaper = (props) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgWallpaper
