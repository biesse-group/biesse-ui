import { SVGProps } from "react";

export const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <rect x={1} y={7} width={48} height={3} rx={1.5} />
      <rect x={1} y={23} width={48} height={3} rx={1.5} />
      <rect x={1} y={41} width={48} height={3} rx={1.5} />
    </g>
  </svg>
);
