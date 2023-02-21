import { FC } from "react";

import getIconSize from "./get-icon-size";
import IconProps from "./IconProps";

const ArrowLeft: FC<IconProps> = ({ size, ...props }) => {
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
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
};

export default ArrowLeft;
