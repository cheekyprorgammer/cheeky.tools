import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M242.6 2.1c-1.9 1.5-21.6 39.8-67.2 131C140 204 111 262.9 111 264c0 3.2 2.1 6.7 4.7 7.9 1.6.8 16.4 1.1 47 1.1 35.2 0 44.4.3 44 1.2-.2.7-21.9 52.2-48.1 114.4-26.2 62.2-47.6 114.1-47.6 115.3 0 3 5.2 8.1 8.2 8.1 1.3 0 3.4-.7 4.6-1.6 2.1-1.4 271.4-320.5 275.5-326.4 2.4-3.5 2.1-7.6-.8-10.5l-2.4-2.5h-52.2c-41.3 0-52-.3-51.6-1.3.2-.6 22.3-35.6 48.9-77.7 26.7-42.1 49-77.5 49.6-78.7 2-3.6 1.4-8.2-1.3-10.8L387.1 0h-70.9c-70.8 0-70.9 0-73.6 2.1z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent