import { FC } from "react";

import getIconSize from "./get-icon-size";
import IconProps from "./IconProps";

const ChevronDown: FC<IconProps> = ({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      {...getIconSize(size)}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

export default ChevronDown;
