import React, { SVGProps } from "react";

export const QuoteClose = (props: SVGProps<SVGSVGElement>) => {
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
        <g fill="currentColor" fillRule="nonzero" mask="url(#mask-2)">
          <path
            d="M7.178 33.496L0 28.574c4.238-5.924 6.426-12.168 6.563-18.73V0h12.51v8.887c-.046 4.557-1.174 9.103-3.385 13.637-2.21 4.535-5.047 8.192-8.51 10.972zm20.986 0l-7.178-4.922c4.239-5.924 6.426-12.168 6.563-18.73V0h12.51v8.887c-.046 4.557-1.174 9.103-3.384 13.637-2.21 4.535-5.047 8.192-8.51 10.972z"
            transform="translate(4.102 9)"
          ></path>
        </g>
      </g>
    </svg>
  );
};
