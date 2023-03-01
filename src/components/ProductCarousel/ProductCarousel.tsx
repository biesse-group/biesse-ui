import { AnimatePresence, motion, Transition, wrap } from "framer-motion";
import { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { getKeys } from "../../utils/get-keys";
import { IconButton } from "../IconButton";
import { Title } from "../Title";
import { detailVariants } from "./detailVariants";
import { imageVariants } from "./imageVariants";
import { titleVariants } from "./titleVariants";

const Container = styled.div<{ contentHeight: number }>`
  height: ${(props) => props.contentHeight + 750}px;
`;

const BackgroundStrip = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  padding: 42px 90px;
  height: 440px;
  margin-bottom: 124px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    height: 300px;
  }
`;

const CarouselTitle = styled(Title)`
  font-size: ${(props) => props.theme.font.headings.xxl};
  margin: 0;
`;

const ItemsStrip = styled.div`
  align-items: center;
  flex: 1 1 auto;
  position: absolute;
  left: 110px;
  right: 110px;
  bottom: 0;
  top: 100px;
`;

const ItemTitle = styled(motion.div)<{ position: "left" | "center" | "right" }>`
  color: ${(props) => props.theme.color.white};
  font-size: 220px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  position: absolute;
  text-align: center;
  width: 800px;
  user-select: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    font-size: 150px;
    width: 600px;
  }
`;

const ItemImage = styled(motion.div)<{ position: "left" | "center" | "right" }>`
  position: absolute;
  text-align: center;
  width: 450px;
  height: 450px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 300px;
    height: 300px;
  }
`;

const PrevButton = styled(IconButton)`
  position: absolute;
  left: 40px;
  bottom: 28px;
`;

const NextButton = styled(IconButton)`
  position: absolute;
  right: 40px;
  bottom: 20px;
`;

const ItemDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemDetail = styled(motion.div)`
  max-width: 600px;
  position: absolute;
`;

export type ProductCarouselProps<T extends object> = {
  title: string;
  items: T[];
  renderTitle: (item: T) => string;
  renderImage: (item: T) => JSX.Element;
  renderDetail: (item: T) => JSX.Element;
};

export const ProductCarousel = <T extends object>({
  title,
  items,
  renderTitle,
  renderDetail,
  renderImage,
}: ProductCarouselProps<T>) => {
  const adaptedItems = useMemo(() => [...items, ...items, ...items], [items]);
  const [[page, direction], setPage] = useState([items.length, 0]);
  const [disabled, setDisabled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    let resizeObserver: ResizeObserver;
    if (contentRef.current) {
      resizeObserver = new ResizeObserver(() => {
        console.log(contentRef.current?.clientHeight);
        setContentHeight(contentRef.current?.clientHeight || 0);
      });
      resizeObserver.observe(contentRef.current);
    }
    return () => resizeObserver?.disconnect();
  }, []);

  const currIndex = wrap(0, adaptedItems.length, page);
  const prevIndex = wrap(0, adaptedItems.length, page - 1);
  const nextIndex = wrap(0, adaptedItems.length, page + 1);

  const shownIndex = {
    left: prevIndex,
    center: currIndex,
    right: nextIndex,
  };

  const handleChange = (newDirection: number) => {
    if (!disabled) {
      setPage([page + newDirection, newDirection]);
    }
  };

  const transition: Transition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.7,
  };

  return (
    <Container contentHeight={contentHeight}>
      <BackgroundStrip>
        <CarouselTitle variant="H2" color="light">
          {title}
        </CarouselTitle>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownIndex).map((pos) => (
              <ItemTitle
                position={pos}
                variants={titleVariants[pos]}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                key={shownIndex[pos]}
                transition={transition}
                onAnimationStart={() => setDisabled(true)}
                onAnimationComplete={() => setDisabled(false)}
              >
                {renderTitle(adaptedItems[shownIndex[pos]])}
              </ItemTitle>
            ))}
          </AnimatePresence>
        </ItemsStrip>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownIndex).map((pos) => (
              <ItemImage
                position={pos}
                variants={imageVariants[pos]}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                key={shownIndex[pos]}
                transition={transition}
              >
                {renderImage(adaptedItems[shownIndex[pos]])}
              </ItemImage>
            ))}
          </AnimatePresence>
        </ItemsStrip>
        <PrevButton
          variant="primary"
          icon="arrow-left"
          aria-label="prev"
          onClick={() => handleChange(-1)}
        />
        <NextButton
          variant="primary"
          icon="arrow-right"
          aria-label="next"
          onClick={() => handleChange(1)}
        />
      </BackgroundStrip>
      <ItemDetailWrapper>
        <AnimatePresence initial={false}>
          <ItemDetail
            variants={detailVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={page}
            ref={contentRef}
          >
            {renderDetail(adaptedItems[currIndex])}
          </ItemDetail>
        </AnimatePresence>
      </ItemDetailWrapper>
    </Container>
  );
};
