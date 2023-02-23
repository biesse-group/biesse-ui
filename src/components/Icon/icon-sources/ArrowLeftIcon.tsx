import { FC } from "react";

export const ArrowLeftIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
};
