import { FC, useState } from "react";
import styled, { css } from "styled-components";

import ChevronDown from "../icons/ChevronDown";
import { inputStyles } from "../styles/input-styles";

export type SelectProps = {
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
   * Select options, can have any type
   */
  options: SelectOption[];
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
};

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  color: ${(props) => props.theme.color.primary};
`;

const StyledSelect = styled.select<Pick<SelectProps, "shadow"> & { selected?: boolean }>`
  ${(props) => inputStyles(props.shadow)};
  appearance: none;
  padding-right: 63px;
  cursor: pointer;
  ${(props) =>
    !props.selected &&
    css`
      font-style: italic;
    `}
`;

const SelectIcon = styled(ChevronDown)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 28px;
  pointer-events: none;
`;

export type SelectOption = {
  label: string;
  value: string;
};

export const Select: FC<SelectProps> = ({ value, onChange, options, placeholder, shadow }) => {
  const [selected, setSelected] = useState(!!value);

  const handleChange = (value: string) => {
    setSelected(!!value);
    onChange?.(value);
  };

  return (
    <SelectContainer>
      <StyledSelect
        shadow={shadow}
        selected={selected}
        onChange={(e) => handleChange(e.currentTarget.value)}
        defaultValue={value || ""}
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
      <SelectIcon />
    </SelectContainer>
  );
};
