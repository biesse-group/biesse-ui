import React, { FC } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

export type CarouselButtonProps = {
  type: "next" | "prev";
  className?: string;
};

const StyledButton = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.white};
`;

export const CarouselButton: FC<CarouselButtonProps> = ({ type }) => {
  const swiper = useSwiper();

  const handleSlide = () => {
    if (type === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return <StyledButton onClick={handleSlide}>{type}</StyledButton>;
};
