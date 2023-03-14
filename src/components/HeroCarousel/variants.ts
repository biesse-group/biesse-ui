import { Variants } from "framer-motion";

export const titleVariants: Variants = {
  enter: {
    x: -100,
    opacity: 0,
  },
  center: (delayed?: boolean) => ({
    x: 0,
    zIndex: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 0.4, ease: "easeOut" },
      x: { type: "spring", stiffness: 70, bounce: 0, damping: 16 },
      delay: delayed ? 0.35 : 0,
    },
  }),
  exit: {
    opacity: 0,
    position: "absolute",
    transition: {
      duration: 0,
    },
  },
};
