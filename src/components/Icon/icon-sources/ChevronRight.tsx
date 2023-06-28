import { type SVGProps } from "react";

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M0 0h25.722v48H0z" />
    </defs>
    <g transform="translate(12 1)" fill="none" fillRule="evenodd">
      <path
        d="M1.768 48c-.26 0-.521-.043-.752-.16-1.134-.578-1.323-1.964-.543-2.807l21.408-20.659L.471 2.965A1.758 1.758 0 0 1 .522.518 1.756 1.756 0 0 1 1.77 0c.446 0 .872.167 1.2.47l22.21 22.56c.729.74.72 1.93-.02 2.657L2.97 47.53c-.324.302-.752.47-1.2.47h-.002Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
