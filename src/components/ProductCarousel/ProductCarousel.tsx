import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Title } from "~components/Title";
import { mqUntil } from "~styles/media-queries";
import { getKeys } from "~utils/getKeys";

import { BackgroundStrip } from "./BackgroundStrip";
import { ControlButton } from "./ControlButton";
import { ItemDetail } from "./ItemDetail";
import { ItemImage } from "./ItemImage";
import { ItemsStrip } from "./ItemsStrip";
import { ItemTitle } from "./ItemTitle";
import { useProductCarousel } from "./useProductCarousel";
import { imageVariants, mobileVariants, titleVariants } from "./variants";

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

export interface ProductCarouselProps<T extends object> extends BaseProps {
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
  /**
   * Called whenever active page changes
   */
  onChangePage?: (page: number) => void;
}

const Root = styled.div<{ $height: number }>`
  position: relative;
  overflow-x: hidden;
  height: ${(props) => 500 + props.$height}px;
`;

export const ProductCarousel = <T extends object>({
  title,
  items,
  contentHeight = 0,
  renderTitle,
  renderDetail,
  renderImage,
  onChangePage,
  ...props
}: ProductCarouselProps<T>) => {
  const { direction, page, nextPage, prevPage, getItemMotionProps, shownItems } =
    useProductCarousel(items);

  useEffect(() => {
    if (onChangePage) onChangePage(page % items.length);
  }, [page]);

  return (
    <Root $height={contentHeight} {...props}>
      <BackgroundStrip>
        <CarouselTitle variant="h2" color="light" uppercase>
          {title}
        </CarouselTitle>

        {/* Desktop carousel */}
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownItems).map((pos) => (
              // eslint-disable-next-line react/jsx-key
              <ItemTitle variants={titleVariants[pos]} {...getItemMotionProps(pos)}>
                {renderTitle(shownItems[pos])}
              </ItemTitle>
            ))}
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownItems).map((pos) => (
              // eslint-disable-next-line react/jsx-key
              <ItemImage variants={imageVariants[pos]} {...getItemMotionProps(pos)}>
                {renderImage(shownItems[pos])}
              </ItemImage>
            ))}
          </AnimatePresence>
        </ItemsStrip>

        {/* Mobile carousel */}
        <ItemsStrip $isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemTitle variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderTitle(shownItems.center)}
            </ItemTitle>
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip $isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemImage variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderImage(shownItems.center)}
            </ItemImage>
          </AnimatePresence>
        </ItemsStrip>

        {/* Control buttons */}
        <ControlButton direction="prev" onClick={prevPage} />
        <ControlButton direction="next" onClick={nextPage} />
      </BackgroundStrip>
      <ItemDetailWrapper>
        <AnimatePresence initial={false}>
          <ItemDetail uniqueId={page}>{renderDetail(shownItems.center)}</ItemDetail>
        </AnimatePresence>
      </ItemDetailWrapper>
    </Root>
  );
};
