import { FC } from "react";

export const ArrowRightIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
};
