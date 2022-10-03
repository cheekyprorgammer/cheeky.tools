import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M245 216.1c-6.7 1.3-16.3 6.4-21.3 11.3-6.1 5.9-9.5 12.1-11.3 20.7-5 23.7 10.6 44.4 36.3 48.1 30.8 4.5 55.9-18.2 51.3-46.4-3.8-24.2-28-39-55-33.7z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent