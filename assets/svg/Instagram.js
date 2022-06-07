import * as React from "react";

const SvgInstagram = (props) => (
  <svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#instagram_svg__a)">
      <path fill="#fff" d="M0 0h29v29H0z" />
      <path fill="url(#instagram_svg__b)" d="M0 0h29v29H0z" />
      <path
        d="M14.505-3c-6.68 0-8.633.007-9.013.038-1.37.114-2.224.33-3.153.793A6.387 6.387 0 0 0 .5-.823C-.515.231-1.13 1.528-1.353 3.07c-.108.748-.14.9-.146 4.723-.002 1.274 0 2.951 0 5.2 0 6.677.007 8.63.04 9.008.11 1.334.32 2.174.762 3.092a6.74 6.74 0 0 0 4.369 3.57c.66.17 1.388.263 2.323.307.396.018 4.435.03 8.476.03 4.04 0 8.082-.005 8.468-.025 1.083-.05 1.712-.135 2.407-.315a6.7 6.7 0 0 0 4.368-3.577c.435-.896.655-1.767.755-3.032.021-.275.03-4.671.03-9.061 0-4.391-.01-8.78-.031-9.055-.101-1.285-.321-2.149-.77-3.062a6.345 6.345 0 0 0-1.37-1.877c-1.058-1.011-2.352-1.627-3.895-1.85-.747-.107-.896-.14-4.72-.146h-5.208Z"
        fill="url(#instagram_svg__c)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.474 14.5c0-3.207 0-4.81.764-5.964a4.601 4.601 0 0 1 1.298-1.298c1.155-.764 2.758-.764 5.964-.764 3.206 0 4.809 0 5.963.764a4.6 4.6 0 0 1 1.299 1.298c.764 1.154.764 2.758.764 5.963 0 3.207 0 4.81-.764 5.964a4.601 4.601 0 0 1-1.299 1.298c-1.154.764-2.757.764-5.963.764s-4.81 0-5.964-.764a4.602 4.602 0 0 1-1.298-1.298c-.764-1.155-.764-2.758-.764-5.964Zm12.177 0a4.155 4.155 0 1 1-8.31 0 4.155 4.155 0 0 1 8.31 0Zm-4.155 2.749a2.75 2.75 0 1 0 0-5.499 2.75 2.75 0 0 0 0 5.499Zm4.32-6.137a.976.976 0 1 0 0-1.953.976.976 0 0 0 0 1.953Z"
        fill="#fff"
      />
    </g>
    <defs>
      <radialGradient
        id="instagram_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1.877 28.364) scale(36.8186)"
      >
        <stop offset={0.09} stopColor="#FF881B" />
        <stop offset={0.78} stopColor="#EE2584" />
      </radialGradient>
      <radialGradient
        id="instagram_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(2.78247 13.90065 -57.29828 11.4693 -6.86 -.695)"
      >
        <stop stopColor="#3771C8" />
        <stop offset={0.128} stopColor="#3771C8" />
        <stop offset={1} stopColor="#60F" stopOpacity={0} />
      </radialGradient>
      <clipPath id="instagram_svg__a">
        <path fill="#fff" d="M0 0h29v29H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInstagram;
