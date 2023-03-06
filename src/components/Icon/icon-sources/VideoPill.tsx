import * as React from "react";
import { SVGProps } from "react";

export const VideoPill = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor" stroke="currentColor" strokeWidth={0.5} fillRule="evenodd">
      <path d="M48.775 5.721A18.17 18.17 0 0 0 36.622 1c-5.756 0-10.124 3.079-11.624 4.256A18.339 18.339 0 0 0 13.374 1C6.411 1 1.45 5.5 1.24 5.699a.75.75 0 0 0-.24.55v31.5a.75.75 0 0 0 1.249.558 18.377 18.377 0 0 1 4.308-2.733.75.75 0 0 0-.626-1.362A21.182 21.182 0 0 0 2.5 36.2V6.594C3.539 5.736 7.829 2.5 13.375 2.5A17.078 17.078 0 0 1 24.25 6.58v7.17a.75.75 0 0 0 1.5 0V6.593C26.789 5.736 31.078 2.5 36.625 2.5A17.078 17.078 0 0 1 47.5 6.58v29.567a19.09 19.09 0 0 0-3.454-2.025.754.754 0 1 0-.618 1.377 15.976 15.976 0 0 1 4.293 2.79.75.75 0 0 0 1.279-.54v-31.5a.75.75 0 0 0-.221-.528h-.004Z" />
      <path d="M24.997 17.5a14.998 14.998 0 0 0-10.605 25.605 14.998 14.998 0 1 0 10.605-25.606Zm0 31.498a16.5 16.5 0 1 1 16.5-16.5 16.518 16.518 0 0 1-16.499 16.5Z" />
      <path d="M19.691 25.325v14.347l12.3-7.173-12.3-7.174Zm-.75 16.406a.749.749 0 0 1-.75-.75V24.017a.75.75 0 0 1 1.125-.645l14.538 8.478a.75.75 0 0 1 0 1.298l-14.538 8.478a.751.751 0 0 1-.375.105Z" />
    </g>
  </svg>
);
