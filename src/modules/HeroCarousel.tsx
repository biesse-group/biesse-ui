import { AnimatePresence, motion, Variants } from "framer-motion";
import { wrap } from "popmotion";
import { FC, useState } from "react";
import styled from "styled-components";

import { CarouselButton, Text, Title } from "../components";

export interface HeroCarouselSlide {
  renderImage: () => JSX.Element;
  title: string;
  description: string;
}

export type HeroCarouselProps = {
  slides: HeroCarouselSlide[];
};

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.color.primary};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  z-index: 100;
  width: 603px;
  bottom: 0;
  left: 0;
  padding: 62px 45px 37px 122px;
`;

const CarouselControls = styled.div`
  margin-top: 42px;

  > *:nth-child(2) {
    margin-left: -1px;
  }
`;

const titleVariants: Variants = {
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

export const HeroCarousel: FC<HeroCarouselProps> = ({ slides }) => {
  const [page, setActiveSlide] = useState(0);

  const handleSlide = (newDirection: number) => {
    setActiveSlide(page + newDirection);
  };

  const slideIndex = wrap(0, slides.length, page);

  const { title, description, renderImage } = slides[slideIndex];

  return (
    <CarouselContainer>
      <AnimatePresence initial={false}>
        <motion.div
          style={{ display: "flex", position: "absolute", width: "100%" }}
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ zIndex: 1, opacity: 1 }}
          exit={{ zIndex: 0, opacity: 0 }}
          transition={{ opacity: { duration: 1 } }}
        >
          {renderImage()}
        </motion.div>
      </AnimatePresence>

      <TextContainer>
        <AnimatePresence initial={false}>
          <motion.div
            key={`title-${slideIndex}`}
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Title variant="H1" color="light">
              {title}
            </Title>
          </motion.div>
          <motion.div
            key={`text-${slideIndex}`}
            variants={titleVariants}
            custom={true}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Text color="light" size="lg">
              {description}
            </Text>
          </motion.div>
        </AnimatePresence>
        <CarouselControls>
          <CarouselButton variant="light" type="prev" onClick={() => handleSlide(-1)} />
          <CarouselButton variant="light" type="next" onClick={() => handleSlide(1)} />
        </CarouselControls>
      </TextContainer>
    </CarouselContainer>
  );
};
