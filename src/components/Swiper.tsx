import React, { FC, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";

type Props = {
  slides: JSX.Element[];
};

export const Swiper: FC<Props> = ({ slides }) => {
  const swiperElRef = useRef(null);

  return (
    <SwiperContainer
      modules={[Navigation, Pagination]}
      ref={swiperElRef}
      slides-per-view="3"
      navigation
      pagination
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </SwiperContainer>
  );
};
