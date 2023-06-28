import { type FC, useState } from "react";
import styled, { css } from "styled-components";

import { Icon } from "~components/Icon";
import { inputStyles } from "~styles/input-styles";

export interface SelectProps {
  /**
   * Shows a disabled option as placeholder
   */
  placeholder?: string;
  /**
   * Currently selected value
   */
  value?: string;
  /**
   * Select change callback
   * @param newValue the newly selected value
   */
  onChange?: (newValue: string) => void;
  /**
   * Whether the select has been disabled
   */
  disabled?: boolean;
  /**
   * Select options, can have any type
   */
  options: SelectOption[];
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
  /**
   * Label for accessibility
   */
  "aria-label": string;
  testId?: string;
}

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  color: ${(props) => props.theme.color.primary};
`;

const StyledSelect = styled.select<
  Pick<SelectProps, "shadow" | "disabled"> & { selected?: boolean }
>`
  ${(props) => inputStyles(props.shadow)};
  appearance: none;
  padding-right: 48px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  ${(props) =>
    !props.selected &&
    css`
      font-style: italic;
    `}
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 14px;
  top: 12px;
  pointer-events: none;
  transform: rotate(90deg);
`;

export interface SelectOption {
  label: string;
  value: string;
}

export const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  testId,
  ...props
}) => {
  const [selected, setSelected] = useState(!!value);

  const handleChange = (value: string) => {
    setSelected(!!value);
    onChange?.(value);
  };

  return (
    <SelectContainer>
      <StyledSelect
        selected={selected}
        onChange={(e) => {
          handleChange(e.currentTarget.value);
        }}
        defaultValue={value ?? ""}
        data-testid={testId}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <SelectIcon name="chevron-right" size="20px" />
    </SelectContainer>
  );
};
