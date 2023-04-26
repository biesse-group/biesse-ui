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

const DEFAULT_DEBOUNCE = 500;

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  defaultValue,
  onChange,
  debounce = DEFAULT_DEBOUNCE,
  testId,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || "");
  const [touched, setTouched] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setTouched(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (touched) {
        onChange?.(value);
      }
    }, debounce);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounce, touched]);

  return (
    <InputRoot {...props}>
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
