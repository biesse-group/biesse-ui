import { SVGProps } from "react";

export const CheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
    {...props}
  >
    <title>{"ico_spuntaLingua"}</title>
    <defs>
      <path id="a" d="M0 0h48v32.936H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        d="M18.04 32.936c-.52 0-1.02-.202-1.393-.563L.608 16.829a2.001 2.001 0 0 1 2.784-2.873l14.6 14.15L44.562.61a2 2 0 1 1 2.876 2.779l-27.96 28.936a2.005 2.005 0 0 1-1.406.61h-.033Z"
        mask="url(#b)"
      />
    </g>
  </svg>
);
