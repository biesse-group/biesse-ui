import { FC } from "react";
import styled from "styled-components";

import { inputStyles } from "../styles/input-styles";

export type InputProps = {
  /**
   * Input placeholder shown when has no value
   */
  placeholder?: string;
  /**
   * Input current value
   */
  value?: string;
  /**
   * Input value change callback
   */
  onChange?: () => void;
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
};

const StyledInput = styled.input<InputProps>`
  ${(props) => inputStyles(props.shadow)}
`;

export const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
