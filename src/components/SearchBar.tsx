import { FC } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";

type SearchBarProps = {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  debounce?: number;
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
  top: 10px;
`;

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  defaultValue,
  onChange,
  debounce,
}) => {
  return (
    <InputRoot>
      <InputElement
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(event: { target: { value: string } }) => {
          onChange && onChange(event.target.value);
        }}
      />
      <InputIcon size="sm" name="search" />
    </InputRoot>
  );
};
