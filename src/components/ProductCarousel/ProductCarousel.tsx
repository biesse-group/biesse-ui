import { AnimatePresence, HTMLMotionProps, motion, wrap } from "framer-motion";
import { useMemo } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { getKeys } from "../../utils/getKeys";
import { Title } from "../Title";
import { BackgroundStrip } from "./BackgroundStrip";
import { ControlButton } from "./ControlButton";
import { ItemImage } from "./ItemImage";
import { ItemPosition, ItemProps } from "./itemProps";
import { ItemsStrip } from "./ItemsStrip";
import { ItemTitle } from "./ItemTitle";
import { detailVariants, imageVariants, mobileVariants, titleVariants } from "./variants";

const CarouselTitle = styled(Title)`
  font-size: ${(props) => props.theme.font.regular.headings.xxl};
  margin: 0;

  ${mqUntil(
    "sm",
    css`
      font-size: ${(props) => props.theme.font.regular.headings.sm};
      text-align: center;
    `
  )}
`;

const ItemDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemDetail = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  position: absolute;

  ${mqUntil(
    "sm",
    css`
      padding: 0 30px;
    `
  )}
`;

export type ProductCarouselProps<T extends object> = {
  /**
   * Strip title
   */
  title: string;
  /**
   * List of items to show, generic type
   */
  items: T[];
  /**
   * Height in pixel of item description content
   */
  contentHeight?: number;
  /**
   * Render item title
   * @param item the nth item
   * @returns the item title
   */
  renderTitle: (item: T) => string;
  /**
   * Render item image
   * @param item the nth item
   * @returns a JSX element representing the item image
   */
  renderImage: (item: T) => JSX.Element;
  /**
   * Render item detail
   * @param item the nth item
   * @returns a JSX element representing the item detail
   */
  renderDetail: (item: T) => JSX.Element;
};

export const ProductCarousel = <T extends object>({
  title,
  items,
  contentHeight = 0,
  renderTitle,
  renderDetail,
  renderImage,
}: ProductCarouselProps<T>) => {
  const adaptedItems = useMemo(() => [...items, ...items, ...items], [items]);
  const [[page, direction], setPage] = useState([items.length, 0]);
  const [locks, setLocks] = useState(0);

  const currIndex = wrap(0, adaptedItems.length, page);
  const prevIndex = wrap(0, adaptedItems.length, page - 1);
  const nextIndex = wrap(0, adaptedItems.length, page + 1);

  const shownIndex = {
    left: prevIndex,
    center: currIndex,
    right: nextIndex,
  };

  const handleChange = (newDirection: number) => {
    if (!locks) {
      setPage([page + newDirection, newDirection]);
    }
  };

  const lock = () => {
    setLocks(locks + 1);
  };

  const unlock = () => {
    if (locks > 0) {
      setLocks(locks - 1);
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

  return (
    <div style={{ position: "relative", height: 500 + contentHeight }}>
      <BackgroundStrip>
        <CarouselTitle variant="H2" color="light">
          {title}
        </CarouselTitle>

        {/* DESKTOP CAROUSEL */}
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownIndex).map((pos) => (
              <ItemTitle variants={titleVariants[pos]} {...getItemMotionProps(pos)}>
                {renderTitle(adaptedItems[shownIndex[pos]])}
              </ItemTitle>
            ))}
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownIndex).map((pos) => (
              <ItemImage variants={imageVariants[pos]} {...getItemMotionProps(pos)}>
                {renderImage(adaptedItems[shownIndex[pos]])}
              </ItemImage>
            ))}
          </AnimatePresence>
        </ItemsStrip>

        {/* MOBILE CAROUSEL */}
        <ItemsStrip isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemTitle variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderTitle(adaptedItems[currIndex])}
            </ItemTitle>
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemImage variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderImage(adaptedItems[currIndex])}
            </ItemImage>
          </AnimatePresence>
        </ItemsStrip>
        <ControlButton direction="prev" onClick={() => handleChange(-1)} />
        <ControlButton direction="next" onClick={() => handleChange(1)} />
      </BackgroundStrip>
      <ItemDetailWrapper>
        <AnimatePresence initial={false}>
          <ItemDetail
            variants={detailVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={page}
          >
            {renderDetail(adaptedItems[currIndex])}
          </ItemDetail>
        </AnimatePresence>
      </ItemDetailWrapper>
    </div>
  );
};
