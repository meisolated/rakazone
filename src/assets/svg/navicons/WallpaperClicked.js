import * as React from "react";

const SvgWallpaperClicked = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 13c-1 0-2.5 1.5-6 4 0 2.333 1 3 2 4s1.79.749 3 1c2.103.436 5.5 0 5.5 0h5s2.436-.84 3.5-2c1.996-2.178 1-6.833 1-7.5-2.5-5.5-7.4 2-11 2-1.5 0-2-1.5-3-1.5Z"
      fill="#A51D20"
      stroke="#fff"
      strokeLinejoin="round"
    />
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#A51D20"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgWallpaperClicked;
