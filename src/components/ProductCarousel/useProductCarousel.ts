import { HTMLMotionProps, wrap } from "framer-motion";
import { useMemo, useState } from "react";

import { ItemPosition, ItemProps } from "./itemProps";

export function useProductCarousel<T extends object>(items: T[]) {
  const adaptedItems = useMemo(() => [...items, ...items, ...items], [items]);

  const [[page, direction], setPage] = useState([items.length, 0]);

  const [locks, setLocks] = useState(0);

  const lock = () => {
    setLocks(locks + 1);
  };

  const unlock = () => {
    if (locks > 0) {
      setLocks(locks - 1);
    }
  };

  const currIndex = wrap(0, adaptedItems.length, page);
  const prevIndex = wrap(0, adaptedItems.length, page - 1);
  const nextIndex = wrap(0, adaptedItems.length, page + 1);

  const shownIndex = {
    left: prevIndex,
    center: currIndex,
    right: nextIndex,
  };

  const shownItems: Record<keyof typeof shownIndex, T> = {
    left: adaptedItems[prevIndex],
    center: adaptedItems[currIndex],
    right: adaptedItems[nextIndex],
  };

  const handleChange = (newDirection: number) => {
    if (!locks) {
      setPage([page + newDirection, newDirection]);
    }
  };

  const getItemMotionProps = (
    pos: ItemPosition,
    { isMobile }: { isMobile?: boolean } = {}
  ): HTMLMotionProps<"div"> & ItemProps & { key: React.Key } => ({
    position: pos,
    key: isMobile ? `mobile-${currIndex}` : shownIndex[pos],
    initial: "initial",
    animate: "animate",
    exit: "exit",
    custom: direction,
    transition: {
      type: "tween",
      ease: [0.09, 0.28, 0.45, 0.95],
      duration: 0.5,
    },
    onAnimationStart: lock,
    onAnimationComplete: unlock,
  });

  return {
    shownItems,
    getItemMotionProps,
    page,
    direction,
    nextPage: () => handleChange(1),
    prevPage: () => handleChange(-1),
  };
}
