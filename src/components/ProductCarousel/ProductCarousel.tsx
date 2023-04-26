import { AnimatePresence } from "framer-motion";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { getKeys } from "../../utils/getKeys";
import { Title } from "../Title";
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
  ...props
}: ProductCarouselProps<T>) => {
  const { direction, page, nextPage, prevPage, getItemMotionProps, shownItems } =
    useProductCarousel(items);

  return (
    <div style={{ position: "relative", height: 500 + contentHeight }} {...props}>
      <BackgroundStrip>
        <CarouselTitle variant="H2" color="light" uppercase>
          {title}
        </CarouselTitle>

        {/* Desktop carousel */}
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownItems).map((pos) => (
              <ItemTitle variants={titleVariants[pos]} {...getItemMotionProps(pos)}>
                {renderTitle(shownItems[pos])}
              </ItemTitle>
            ))}
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownItems).map((pos) => (
              <ItemImage variants={imageVariants[pos]} {...getItemMotionProps(pos)}>
                {renderImage(shownItems[pos])}
              </ItemImage>
            ))}
          </AnimatePresence>
        </ItemsStrip>

        {/* Mobile carousel */}
        <ItemsStrip isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemTitle variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderTitle(shownItems["center"])}
            </ItemTitle>
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip isMobile>
          <AnimatePresence initial={false} custom={direction}>
            <ItemImage variants={mobileVariants} {...getItemMotionProps("center")}>
              {renderImage(shownItems["center"])}
            </ItemImage>
          </AnimatePresence>
        </ItemsStrip>

        {/* Control buttons */}
        <ControlButton direction="prev" onClick={nextPage} />
        <ControlButton direction="next" onClick={prevPage} />
      </BackgroundStrip>
      <ItemDetailWrapper>
        <AnimatePresence initial={false}>
          <ItemDetail uniqueId={page}>{renderDetail(shownItems["center"])}</ItemDetail>
        </AnimatePresence>
      </ItemDetailWrapper>
    </div>
  );
};
