import { type FC, useState } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { inputStyles } from "~styles/input-styles";

export interface InputDecorationProps {
  value: string;
  focus: boolean;
}

export interface InputProps extends BaseProps {
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
   * Input type
   */
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  /**
   * Optional decoration element at the start of the input
   */
  startDecoration?: JSX.Element | ((props: InputDecorationProps) => JSX.Element);
  /**
   * Optional decoration element at the end of the input
   */
  endDecoration?: JSX.Element | ((props: InputDecorationProps) => JSX.Element);
  /**
   * Whether the input has an error. It can be a `boolean` or a `string` with the error message.
   */
  error?: boolean | string;
}

const StyledInput = styled.input<Pick<InputProps, "shadow">>`
  ${(props) => inputStyles(props.shadow)}

  &:active, &:focus {
    box-shadow: none;
  }

  border: none;
`;

type InputContainerProps = Pick<InputProps, "shadow" | "border" | "error"> & { hasFocus: boolean };

const InputContainer = styled.div<InputContainerProps>`
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
    props.error &&
    css`
      border: 1px solid #ff0000;

      > ${StyledInput} {
        color: #ff0000;
      }
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

export const Input: FC<InputProps> = ({
  testId,
  defaultValue = "",
  onChange,
  className,
  style,
  startDecoration,
  endDecoration,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
    onChange?.(e);
  };

  const decorationsProps: InputDecorationProps = {
    value,
    focus,
  };

  return (
    <InputContainer hasFocus={focus} {...{ className, style }} {...props}>
      {typeof startDecoration === "function" ? startDecoration(decorationsProps) : startDecoration}
      <StyledInput
        {...props}
        defaultValue={defaultValue}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        data-testid={testId}
      />
      {typeof endDecoration === "function" ? endDecoration(decorationsProps) : endDecoration}
    </InputContainer>
  );
};
