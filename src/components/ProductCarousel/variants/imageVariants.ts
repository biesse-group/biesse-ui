import { type Variant, type Variants } from "framer-motion";

const centerVariant: Variant = {
  top: "10%",
  left: "50%",
  right: "auto",
  x: "-50%",
  y: 0,
  scale: 1,
  opacity: 1,
};

const leftVariant: Variant = {
  top: "100%",
  left: "12.5%",
  right: "auto",
  x: "-50%",
  y: "-50%",
  scale: 0.5,
  opacity: 1,
};

const rightVariant: Variant = {
  top: "100%",
  right: "12.5%",
  left: "auto",
  x: "50%",
  y: "-50%",
  scale: 0.5,
  opacity: 1,
};

const hiddenVariant: Variant = {
  opacity: 0,
  scale: 0,
};

export const imageVariants: Record<"left" | "right" | "center", Variants> = {
  center: {
    initial: (direction: number) => (direction > 0 ? rightVariant : leftVariant),
    animate: centerVariant,
    exit: (direction: number) => (direction > 0 ? leftVariant : rightVariant),
  },
  left: {
    initial: (direction: number) =>
      direction > 0 ? centerVariant : { ...leftVariant, ...hiddenVariant },
    animate: leftVariant,
    exit: (direction: number) =>
      direction > 0 ? { ...leftVariant, ...hiddenVariant } : centerVariant,
  },
  right: {
    initial: (direction: number) =>
      direction > 0 ? { ...rightVariant, ...hiddenVariant } : centerVariant,
    animate: rightVariant,
    exit: (direction: number) =>
      direction > 0 ? centerVariant : { ...rightVariant, ...hiddenVariant },
  },
};
