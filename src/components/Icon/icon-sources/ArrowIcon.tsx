import React, { FC } from "react";

export const ArrowIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 19 15"
      {...props}
    >
      <g fill="none" fillRule="evenodd" strokeWidth="1">
        <g strokeWidth="2" transform="translate(-1269 -606)">
          <g transform="translate(1270 606)">
            <path d="M6 3.5l7.72 8 7.28-8" transform="matrix(0 1 1 0 6 -6)"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M0.333 7.833L17 7.833"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
