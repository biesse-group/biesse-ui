import { FC } from "react";
import styled from "styled-components";

import { inputStyles } from "../styles/input-styles";

export type TextareaProps = {
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
  className?: string;
};

const StyledTextarea = styled.textarea<TextareaProps>`
  ${(props) => inputStyles(props.shadow)};
  resize: none;
  height: 90px;
`;

export const Textarea: FC<TextareaProps> = (props) => {
  return <StyledTextarea {...props} />;
};
