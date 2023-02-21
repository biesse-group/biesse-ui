import { FC, useState } from "react";
import styled, { css } from "styled-components";

import { inputStyles } from "../styles/input-styles";
import { Button } from "./Button";

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
  /**
   * Shows a submit button with the provided label
   */
  submitLabel?: string;
  /**
   * Called when submit button has been clicked
   */
  onSubmit?: (value: string) => void;
};

const StyledInput = styled.input<Omit<InputProps, "onSubmit">>`
  ${(props) => inputStyles(props.shadow)}

  &:active, &:focus {
    box-shadow: none;
  }

  ${(props) =>
    props.submitLabel &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

const InputContainer = styled.div<Pick<InputProps, "shadow"> & { hasFocus: boolean }>`
  position: relative;
  width: 100%;
  border-radius: ${(props) => props.theme.input.borderRadius};
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  padding-right: 4px;
  transition: box-shadow 0.2s ease-out;

  ${(props) =>
    props.hasFocus &&
    css`
      box-shadow: 0 0 10px
        ${props.shadow === "dark"
          ? props.theme.input.boxShadow.dark
          : props.theme.input.boxShadow.light};
    `}
`;

const StyledButton = styled(Button)`
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Input: FC<InputProps> = ({ submitLabel, onSubmit, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputContainer shadow={props.shadow} hasFocus={focus}>
      <StyledInput {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
      {submitLabel && (
        <StyledButton variant="primary" size="small">
          {submitLabel}
        </StyledButton>
      )}
    </InputContainer>
  );
};
