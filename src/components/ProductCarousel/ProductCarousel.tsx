import { AnimatePresence, motion, wrap } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import { getKeys } from "../../utils/get-keys";
import { IconButton } from "../IconButton";
import { Title } from "../Title";
import { itemVariants } from "./itemsVariants";

const Container = styled.div`
  padding-bottom: 20px;
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
`;

const CarouselTitle = styled(Title)`
  font-size: ${(props) => props.theme.font.headings.xxl};
  margin: 0;
`;

const ItemsStrip = styled.div`
  width: 100%;
  align-items: center;
  position: relative;
  flex: 1 1 auto;
`;

const ItemTitle = styled(motion.div)<{ position: "left" | "center" | "right" }>`
  color: ${(props) => props.theme.color.white};
  font-size: 220px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  position: absolute;
  text-align: center;
  width: 800px;
  user-select: none;
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

const ItemDetail = styled.div`
  flex: 0 1 600px;
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
  const [[page, direction], setPage] = useState([0, 0]);
  const [disabled, setDisabled] = useState(false);

  const currIndex = wrap(0, items.length, page);
  const prevIndex = wrap(0, items.length, page - 1);
  const nextIndex = wrap(0, items.length, page + 1);

  const shownIndex = {
    left: prevIndex,
    center: currIndex,
    right: nextIndex,
  };

  const handleChange = (newDirection: number) => {
    if (!disabled) {
      setPage([page + newDirection, newDirection]);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  };

  return (
    <Container>
      <BackgroundStrip>
        <CarouselTitle variant="H2" color="light">
          {title}
        </CarouselTitle>
        <ItemsStrip>
          <AnimatePresence initial={false} custom={direction}>
            {getKeys(shownIndex).map((key) => (
              <ItemTitle
                position={key}
                variants={itemVariants[key]}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                key={page + key}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.5,
                }}
              >
                {renderTitle(items[shownIndex[key]])}
              </ItemTitle>
              // <ItemContainer
              //   key={index}
              //   style={{
              //     top: index !== currentIndex ? 80 : undefined,
              //     left: index === prevIndex ? 120 : undefined,
              //     right: index === nextIndex ? 120 : undefined,
              //   }}
              // >
              //   <ItemTitle isActive={index === currentIndex}>{renderTitle(items[index])}</ItemTitle>
              //   <ItemImage isActive={index === currentIndex}>{renderImage(items[index])}</ItemImage>
              // </ItemContainer>
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
        <ItemDetail>{renderDetail(items[currIndex])}</ItemDetail>
      </ItemDetailWrapper>
    </Container>
  );
};
