import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";

type SearchBarProps = {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Search default value
   */
  defaultValue?: string;
  /**
   * Called when input changes, debounced by `debounce` parameter ms amount.
   *
   * **NB:** It must be provided with `useCallback` hook!
   *
   * @param value The new search term
   */
  onChange?: (value: string) => void;
  /**
   * Amount of milliseconds to debounce search input changes
   */
  debounce?: number;
  testId?: string;
};

const InputRoot = styled.div`
  position: relative;
  color: ${(props) => props.theme.color.white};
  width: 100%;
`;

const InputElement = styled.input`
  font-size: ${(props) => props.theme.font.regular.body.md};
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.book};
  color: inherit;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.input.borderRadius};
  height: 50px;
  padding: 0 78px 0 22px;
  outline: none;
  width: 100%;

  ::placeholder {
    color: inherit;
    font-style: italic;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 12px;
`;

const DEFAULT_DEBOUNCE = 300;

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  defaultValue,
  onChange,
  debounce = DEFAULT_DEBOUNCE,
  testId,
}) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (newValue: string) => {
    setTimeout(() => {
      setValue(newValue);
    }, debounce);
  };

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  return (
    <InputRoot>
      <InputElement
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        onChange={(event) => handleChange(event.currentTarget.value)}
        data-testid={testId}
      />
      <InputIcon size="26px" name="search" />
    </InputRoot>
  );
};
