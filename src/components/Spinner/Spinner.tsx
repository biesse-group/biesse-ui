import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export interface SpinnerProps {
  width?: string;
  height?: string;
  thickness?: string;
  color?: string;
  duration?: number;
}

const SpinnerBody = styled.div<SpinnerProps>`
  height: ${({ height }) => height ?? "4rem"};
  width: ${({ width }) => width ?? "4rem"};
  border: ${({ thickness }) => thickness ?? "4px"} solid #d1d5db;
  border-top-color: ${({ theme, color }) => color ?? theme.color.primary};
  border-radius: 50%;
  animation: ${spinAnimation} ${({ duration }) => (duration ? `${duration}ms` : "800ms")} linear
    infinite;
`;

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerBody {...props} />;
};
