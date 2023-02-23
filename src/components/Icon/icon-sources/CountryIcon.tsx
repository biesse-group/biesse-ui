import React, { FC } from "react";

export const CountryIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-globe"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12L22 12"></path>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
    </svg>
  );
};
