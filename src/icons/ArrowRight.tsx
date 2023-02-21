import { FC } from "react";

import getIconSize from "./get-icon-size";
import IconProps from "./IconProps";

const ArrowRight: FC<IconProps> = ({ size, ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      {...getIconSize(size)}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
};

export default ArrowRight;
