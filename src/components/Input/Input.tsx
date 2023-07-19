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
   * Optional decoration elements
   */
  startDecoration?: JSX.Element | ((props: InputDecorationProps) => JSX.Element);
  endDecoration?: JSX.Element | ((props: InputDecorationProps) => JSX.Element);
}

const StyledInput = styled.input<Pick<InputProps, "shadow">>`
  ${(props) => inputStyles(props.shadow)}

  &:active, &:focus {
    box-shadow: none;
  }

  border: none;
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

  const { shadow, border } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
    onChange?.(e);
  };

  const decorationsProps: InputDecorationProps = {
    value,
    focus,
  };

  return (
    <InputContainer hasFocus={focus} {...{ shadow, border, className, style }}>
      {typeof startDecoration === "function" ? startDecoration(decorationsProps) : startDecoration}
      <StyledInput
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        data-testid={testId}
      />
      {typeof endDecoration === "function" ? endDecoration(decorationsProps) : endDecoration}
    </InputContainer>
  );
};
