import * as React from 'react'

const SvgPauseCircle = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10.72 14.53V9.47c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67ZM16 14.53V9.47c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67Z"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default SvgPauseCircle
