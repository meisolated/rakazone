import * as React from "react"

const SvgPollClicked = (props) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      fill="#A51D20"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default SvgPollClicked
