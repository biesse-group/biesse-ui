import React, { FC } from "react";
import styled from "styled-components";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselButton, Text, Title } from "../components";

export interface HeroCarouselSlide {
  renderImage: () => JSX.Element;
  title: string;
  description: string;
}

export type HeroCarouselProps = {
  slides: HeroCarouselSlide[];
};

const SlideContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.color.primary};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  z-index: 100;
  width: 603px;
  bottom: 0;
  padding: 62px 45px 37px 122px;
`;

const CarouselControls = styled.div`
  margin-top: 42px;

  > *:nth-child(2) {
    margin-left: -1px;
  }
`;

export const HeroCarousel: FC<HeroCarouselProps> = ({ slides }) => {
  return (
    <Swiper modules={[EffectFade]} effect="fade" loop>
      {slides.map(({ title, description, renderImage }, index) => (
        <SwiperSlide key={index}>
          <SlideContainer>
            <TextContainer>
              <Title variant="H1" color="light">
                {title}
              </Title>
              <Text color="light" size="lg">
                {description}
              </Text>
              <CarouselControls>
                <CarouselButton type="prev" />
                <CarouselButton type="next" />
              </CarouselControls>
            </TextContainer>
            {renderImage()}
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
