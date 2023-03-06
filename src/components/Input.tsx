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
  defaultValue?: string;
  /**
   * Input value change callback
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
  /**
   * Whether the input should have a border
   */
  border?: boolean;
  /**
   * Input Test ID
   */
  testId?: string;
  /**
   * Add trailing button for submit
   */
  withButton?: {
    /**
     * Shows a submit button with the provided label
     */
    label?: string;
    /**
     * Called when submit button has been clicked
     */
    onClick?: (value: string) => void;
    /**
     * Button test ID
     */
    testId?: string;
  };
};

const StyledInput = styled.input<Pick<InputProps, "shadow" | "withButton">>`
  ${(props) => inputStyles(props.shadow)}

  &:active, &:focus {
    box-shadow: none;
  }

  border: none;

  ${(props) =>
    props.withButton &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

const InputContainer = styled.div<Pick<InputProps, "shadow" | "border"> & { hasFocus: boolean }>`
  position: relative;
  width: 100%;
  border-radius: ${(props) => props.theme.input.borderRadius};
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  padding-right: 4px;
  transition: box-shadow 0.2s ease-out;
  ${(props) =>
    props.border &&
    css`
      border: 1px solid ${props.theme.input.borderColor};
    `}

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

export const Input: FC<InputProps> = ({ testId, defaultValue = "", onChange, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const { withButton } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
    onChange?.(e);
  };

  return (
    <InputContainer shadow={props.shadow} hasFocus={focus} border={props.border}>
      <StyledInput
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        data-testid={testId}
      />
      {withButton && (
        <StyledButton
          variant="primary"
          size="small"
          onClick={() => withButton.onClick?.(value)}
          data-testid={withButton.testId}
        >
          {withButton.label}
        </StyledButton>
      )}
    </InputContainer>
  );
};
