import { AnimatePresence, motion, Variants } from "framer-motion";
import { wrap } from "popmotion";
import React, { FC, useState } from "react";
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

const slideVariants: Variants = {
  enter: (direction: number) => {
    return {
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

export const HeroCarousel: FC<HeroCarouselProps> = ({ slides }) => {
  const [[page, direction], setActiveSlide] = useState([0, 0]);

  const handleSlide = (newDirection: number) => {
    setActiveSlide([page + newDirection, newDirection]);
  };

  const slideIndex = wrap(0, slides.length, page);

  const { title, description, renderImage } = slides[slideIndex];

  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{ display: "flex", position: "absolute", width: "100%" }}
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 },
          }}
        >
          {renderImage()}
        </motion.div>
      </AnimatePresence>
      <TextContainer>
        <Title variant="H1" color="light">
          {title}
        </Title>
        <Text color="light" size="lg">
          {description}
        </Text>
        <CarouselControls>
          <CarouselButton type="prev" onClick={() => handleSlide(-1)} />
          <CarouselButton type="next" onClick={() => handleSlide(1)} />
        </CarouselControls>
      </TextContainer>
    </CarouselContainer>
  );
};
