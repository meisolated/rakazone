import * as React from "react"

const SvgEmailContact = (props) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#A51D20" />
    <path
      d="M22.857 30c-5.714 0-5.714 2.557-5.714 5.714v1.429c0 3.943 0 7.143 7.143 7.143h11.428c5.715 0 7.143-3.2 7.143-7.143v-1.429c0-3.157 0-5.714-5.714-5.714-1.429 0-1.829.3-2.572.857L33.114 32.4c-1.685 1.8-4.543 1.8-6.243 0l-1.442-1.543C24.686 30.3 24.285 30 22.857 30ZM40 30v-8.571c0-3.158 0-5.715-5.714-5.715h-8.572C20 15.714 20 18.271 20 21.43V30"
      stroke="#fff"
      strokeWidth={2.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.929 26.043h4.757M26.743 21.757h7.143"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgEmailContact
