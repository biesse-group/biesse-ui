import { FC } from "react";
import styled from "styled-components";

export type IconButtonProps = {
  /**
   * Shows left or right arrow
   */
  icon: JSX.Element;
  /**
   * Shows light or primary buttons
   */
  variant: "light" | "primary";
  onClick?: () => void;
  className?: string;
};

const StyledButton = styled.button<Omit<IconButtonProps, "type" | "icon">>`
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
    background-color: ${(props) =>
      props.variant === "primary" ? props.theme.color.primary : props.theme.color.white};
    color: ${(props) =>
      props.variant === "primary" ? props.theme.color.white : props.theme.color.primary};
    transition: all 0.2s ease-out;
  }
`;

export const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return <StyledButton {...props}>{icon}</StyledButton>;
};
