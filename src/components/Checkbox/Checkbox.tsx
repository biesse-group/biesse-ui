import { type FC, useCallback, useState } from "react";
import styled from "styled-components";

import { Text } from "~components/Text";

export interface CheckboxProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Label on the right of the checkbox
   */
  label?: string | JSX.Element;
  /**
   * Whether the checkbox is checked or not
   */
  value?: boolean;
  /**
   * Triggers at checkbox click
   */
  onChange?: (value: boolean) => void;
  inputId: string;
  testId?: string;
}

const Root = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  position: relative;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: ${({ checked, theme }) => (checked ? theme.color.white : "transparent")};
  background-color: ${({ theme }) => theme.input.checkbox.backgroundColor};
  border: 1px solid ${({ theme }) => theme.color.white};
  font-size: 25px;
  user-select: none;
  flex: none;
`;

const HiddenInput = styled.input`
  display: none;
`;

export const Checkbox: FC<CheckboxProps> = ({
  testId,
  value = false,
  onChange,
  label,
  inputId,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(value);

  const onInputChange = useCallback(
    (event: boolean) => {
      setIsChecked(event);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <Root {...props}>
      <HiddenInput
        id={inputId}
        type="checkbox"
        onChange={(e) => {
          onInputChange(e.target.checked);
        }}
        checked={isChecked}
      />
      <StyledCheckbox checked={isChecked}>
        <label htmlFor={inputId} data-testid={testId} style={{ cursor: "pointer" }}>
          ✓
        </label>
      </StyledCheckbox>
      <label htmlFor={inputId}>
        {typeof label === "string" ? <Text color="light">{label}</Text> : label}
      </label>
    </Root>
  );
};
