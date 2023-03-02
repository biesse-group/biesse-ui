import { Variants } from "framer-motion";

export const detailVariants: Variants = {
  enter: {
    x: 100,
    opacity: 0,
  },
  center: {
    x: 0,
    zIndex: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 0.4, ease: "easeOut" },
      x: { type: "spring", stiffness: 70, bounce: 0, damping: 16 },
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    position: "absolute",
    transition: {
      duration: 0.2,
    },
  },
};
