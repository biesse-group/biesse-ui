import { FC } from "react";
import styled from "styled-components";

export type CarouselButtonProps = {
  type: "next" | "prev";
  onClick?: () => void;
  className?: string;
};

const StyledButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.primary};
    transition: all 0.2s ease-out;
  }
`;

export const CarouselButton: FC<CarouselButtonProps> = ({ type, onClick }) => {
  return <StyledButton onClick={onClick}>{type}</StyledButton>;
};
