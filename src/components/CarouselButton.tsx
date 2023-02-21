import { FC } from "react";
import styled from "styled-components";

export type CarouselButtonProps = {
  /**
   * Shows left or right arrow
   */
  type: "next" | "prev";
  /**
   * Shows light or primary buttons
   */
  variant: "light" | "primary";
  onClick?: () => void;
  className?: string;
};

const StyledButton = styled.button<Omit<CarouselButtonProps, "type">>`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 1px solid
    ${(props) =>
      props.variant === "primary" ? props.theme.color.primary : props.theme.color.white};
  color: ${(props) =>
    props.variant === "primary" ? props.theme.color.primary : props.theme.color.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.primary};
    transition: all 0.2s ease-out;
  }
`;

export const CarouselButton: FC<CarouselButtonProps> = ({ type, ...props }) => {
  return <StyledButton {...props}>{type}</StyledButton>;
};
