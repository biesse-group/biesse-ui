import { SVGProps } from "react";

export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M0 0h48v48H0z" />
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <path
        d="M46.236 48c-.472 0-.916-.184-1.25-.518L24 26.495 3.012 47.485c-.316.316-.731.497-1.175.515h-.073a1.767 1.767 0 0 1-1.248-3.013l20.988-20.988L.516 3.012a1.767 1.767 0 0 1 0-2.496A1.754 1.754 0 0 1 1.764 0c.471 0 .915.184 1.248.516L24 21.503 44.986.516A1.754 1.754 0 0 1 46.234 0c.472 0 .915.184 1.248.516a1.767 1.767 0 0 1 0 2.496L26.496 23.999l20.989 20.988A1.767 1.767 0 0 1 46.236 48"
        fill="currentColor"
      />
    </g>
  </svg>
);
