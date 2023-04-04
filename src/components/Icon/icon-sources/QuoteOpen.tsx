import React, { SVGProps } from "react";

export const QuoteOpen = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      {...props}
    >
      <defs>
        <path d="M0 0H50V50H0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <g fill="currentColor" fillRule="nonzero" mask="url(#mask-2)">
            <path
              d="M11.895 0l7.246 4.922c-4.239 5.788-6.426 12.031-6.563 18.73v9.297H0v-7.93c0-4.648 1.105-9.25 3.315-13.808C5.525 6.654 8.385 2.917 11.895 0zm21.533 0l7.246 4.922c-4.238 5.788-6.426 12.031-6.563 18.73v9.297H21.533v-7.93c0-4.648 1.105-9.25 3.316-13.808 2.21-4.557 5.07-8.294 8.579-11.211z"
              transform="translate(7.11 8.701)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
