import { type FC } from "react";
import styled from "styled-components";

import { inputStyles } from "~styles/input-styles";

export interface TextareaProps {
  /**
   * Input placeholder shown when has no value
   */
  placeholder?: string;
  /**
   * Input current value
   */
  value?: string;
  /**
   * Max character lenght
   */
  maxLength?: number;
  /**
   * Input value change callback
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
  className?: string;
  testId?: string;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  ${(props) => inputStyles(props.shadow)};
  padding-top: 17px;
  padding-bottom: 17px;
  resize: none;
  height: 90px;
`;

export const Textarea: FC<TextareaProps> = ({ testId, ...props }) => {
  return <StyledTextarea data-testid={testId} {...props} />;
};
