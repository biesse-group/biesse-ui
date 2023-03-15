import { SVGProps } from "react";

export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M0 0h47.956v48H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)">
        <path
          d="M20.579 3.389A17.278 17.278 0 1 1 3.3 20.668 17.3 17.3 0 0 1 20.58 3.389Zm0 37.901a20.42 20.42 0 0 0 13.377-4.927l11.148 11.148a1.672 1.672 0 0 0 2.363-2.363L36.319 34a20.425 20.425 0 0 0 4.927-13.377 20.624 20.624 0 1 0-20.623 20.623l-.044.044Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M17.39 34.101a1.174 1.174 0 0 0 0-2.348 5.103 5.103 0 0 1-5.089-5.088 1.174 1.174 0 0 0-2.348 0 7.436 7.436 0 0 0 7.437 7.436"
        fill="currentColor"
      />
    </g>
  </svg>
);
