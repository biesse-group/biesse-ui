import { type FC, useState } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { inputStyles } from "~styles/input-styles";

export interface InputDecorationProps {
  value: string;
  focus: boolean;
}

type HTMLInputProps = Pick<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onFocus" | "onBlur" | "onChange" | "defaultValue" | "type" | "placeholder"
>;

export interface InputProps extends BaseProps, HTMLInputProps {
  /**
   * Input default value
   */
  defaultValue?: string;
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

const StyledInput = styled.input<Pick<InputProps, "shadow"> & HTMLInputProps>`
  ${(props) => inputStyles(props.shadow)}

  height: 100%;

  &:active,
  &:focus {
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
  height: 45px;
  transition: box-shadow 0.2s ease-out;
  border: ${(props) =>
    props.border ? `1px solid ${props.theme.input.borderColor}` : "2px solid transparent"};

  ${(props) =>
    props.error &&
    css`
      border: ${props.border ? "1px" : "2px"} solid ${props.theme.color.error};

      > ${StyledInput} {
        color: ${props.theme.color.error};
      }
    `}
  ${(props) =>
    props.hasFocus &&
    css`
      box-shadow: 0 0 10px
        ${props.error
          ? props.theme.color.error
          : props.shadow === "dark"
          ? props.theme.input.boxShadow.dark
          : props.theme.input.boxShadow.light};
    `};
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
        onFocus={(e) => {
          setFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          onChange?.(e);
        }}
        data-testid={testId}
      />
      {typeof endDecoration === "function" ? endDecoration(decorationsProps) : endDecoration}
    </InputContainer>
  );
};
