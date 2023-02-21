import styled from "styled-components";

import ChevronDown from "../icons/ChevronDown";
import { inputStyles } from "../styles/input-styles";

export type SelectProps<T> = {
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
  onChange?: (newValue: T) => void;
  /**
   * Select options, can have any type
   */
  options: SelectOption<T>[];
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

const StyledSelect = styled.select<Pick<SelectProps<unknown>, "shadow">>`
  ${(props) => inputStyles(props.shadow)};
  appearance: none;
  padding-right: 63px;
  cursor: pointer;
`;

const SelectIcon = styled(ChevronDown)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 28px;
  pointer-events: none;
`;

export type SelectOption<T> = {
  label: string;
  value: T;
};

export const Select = <T extends unknown>({
  value,
  onChange,
  options,
  placeholder,
  shadow,
}: SelectProps<T>) => {
  return (
    <SelectContainer>
      <StyledSelect shadow={shadow} defaultValue={value || ""}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} onClick={() => onChange?.(option.value)}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <SelectIcon />
    </SelectContainer>
  );
};
