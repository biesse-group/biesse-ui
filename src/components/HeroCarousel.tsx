import { AnimatePresence, motion, Variants, wrap } from "framer-motion";
import { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { IconButton, Text, Title } from ".";

export interface HeroCarouselSlide {
  renderImage: () => JSX.Element;
  title: string;
  description: string;
}

export type HeroCarouselProps = {
  /**
   * List of displayed slides
   */
  slides: HeroCarouselSlide[];
  /**
   * Change slide automatically every provided seconds number
   */
  autoSlide?: number;
};

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
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
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
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

const StyledSlide = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
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

export const HeroCarousel: FC<HeroCarouselProps> = ({ slides, autoSlide }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  /**
   * Handle slide change
   */
  const handleSlide = useCallback(
    (direction: "prev" | "next") => {
      const slideAmount = direction === "prev" ? -1 : 1;
      const slideIndex = wrap(0, slides.length, activeSlide + slideAmount);
      setActiveSlide(slideIndex);
    },
    [activeSlide, slides.length]
  );

  // Auto slide effect
  useEffect(() => {
    let autoSlideInterval: NodeJS.Timer;

    if (autoSlide) {
      autoSlideInterval = setInterval(() => {
        handleSlide("next");
      }, autoSlide * 1000);
    }

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [autoSlide, handleSlide]);

  const { title, description, renderImage } = slides[activeSlide];

  return (
    <CarouselContainer>
      <AnimatePresence initial={false}>
        <StyledSlide
          key={`slide-${activeSlide}`}
          initial={{ opacity: 0 }}
          animate={{ zIndex: 1, opacity: 1 }}
          exit={{ zIndex: 0, opacity: 0 }}
          transition={{ opacity: { duration: 1 } }}
        >
          {renderImage()}
        </StyledSlide>
      </AnimatePresence>

      <TextContainer>
        <motion.div
          key={`title-${activeSlide}`}
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
          key={`text-${activeSlide}`}
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
        <CarouselControls>
          <IconButton
            variant="primary-inverted"
            icon="arrow-left"
            aria-label="Prev"
            onClick={() => handleSlide("prev")}
            testId="prev"
          />
          <IconButton
            variant="primary-inverted"
            icon="arrow-right"
            aria-label="Next"
            onClick={() => handleSlide("next")}
            testId="next"
          />
        </CarouselControls>
      </TextContainer>
    </CarouselContainer>
  );
};
