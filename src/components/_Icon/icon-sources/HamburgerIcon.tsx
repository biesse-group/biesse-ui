import React, { FC } from "react";

export const HamburgerIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 20"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g strokeWidth="2" transform="translate(-1245 -1237)">
          <g transform="translate(1246 1238)">
            <path d="M0.429 0.429L21.857 0.429"></path>
            <path d="M0.429 9L21.857 9"></path>
            <path d="M0.429 17.571L21.857 17.571"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
