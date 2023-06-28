import { type Variants } from "framer-motion";

const X_AMOUNT = 500;

export const mobileVariants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? X_AMOUNT : -X_AMOUNT,
    opacity: 0,
    scale: 0.5,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -X_AMOUNT : X_AMOUNT,
    opacity: 0,
    scale: 0.5,
  }),
};
