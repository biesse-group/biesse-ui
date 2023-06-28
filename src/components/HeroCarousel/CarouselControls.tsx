import React, { type FC } from "react";
import styled from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { IconButton } from "~components/IconButton";

export interface CarouselControlsProps extends BaseProps {
  onPrev?: () => void;
  onNext?: () => void;
}

const ControlsRoot = styled.div`
  margin-top: 42px;

  > *:nth-child(2) {
    margin-left: -1px;
  }
`;

const CarouselControls: FC<CarouselControlsProps> = ({ onPrev, onNext, ...props }) => {
  return (
    <ControlsRoot {...props}>
      <IconButton
        variant="primary-inverted"
        icon="arrow-left"
        aria-label="Prev"
        onClick={onPrev}
        testId="prev"
      />
      <IconButton
        variant="primary-inverted"
        icon="arrow-right"
        aria-label="Next"
        onClick={onNext}
        testId="next"
      />
    </ControlsRoot>
  );
};

export default CarouselControls;
