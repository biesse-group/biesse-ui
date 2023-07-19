import { AnimatePresence, motion, wrap } from "framer-motion";
import { type FC, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { mqUntil } from "~styles";

import CarouselControls from "./CarouselControls";
import { TextContainer } from "./TextContainer";
import { titleVariants } from "./variants";

export interface HeroCarouselSlide {
  renderImage: () => React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export interface HeroCarouselProps extends BaseProps {
  /**
   * List of displayed slides
   */
  slides: HeroCarouselSlide[];
  /**
   * Change slide automatically every provided seconds number
   */
  autoSlide?: number;
  /**
   * Called whenever active slide changes
   */
  onChangeSlide?: (index: number) => void;
}

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  overflow: hidden;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mqUntil(
    "sm",
    css`
      height: 600px;
    `
  )}
`;

const StyledSlide = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Mask = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeroCarousel: FC<HeroCarouselProps> = ({
  slides,
  onChangeSlide,
  autoSlide,
  ...props
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  /**
   * Handle slide change
   */
  const handleSlide = useCallback(
    (direction: "prev" | "next") => {
      const slideAmount = direction === "prev" ? -1 : 1;
      const slideIndex = wrap(0, slides.length, activeSlide + slideAmount);
      setActiveSlide(slideIndex);
      if (onChangeSlide) {
        onChangeSlide(slideIndex);
      }
    },
    [activeSlide, onChangeSlide, slides.length]
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
    <CarouselContainer {...props}>
      <ImageContainer>
        <Mask />
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
      </ImageContainer>

      <AnimatePresence initial={false} custom={true}>
        <TextContainer>
          <motion.div
            key={`title-${activeSlide}`}
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Title variant="h2" color="light" uppercase>
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
            {typeof description === "string" ? (
              <Text color="light" size="lg">
                {description}
              </Text>
            ) : (
              description
            )}
          </motion.div>
          <CarouselControls onPrev={() => handleSlide("prev")} onNext={() => handleSlide("next")} />
        </TextContainer>
      </AnimatePresence>
    </CarouselContainer>
  );
};
