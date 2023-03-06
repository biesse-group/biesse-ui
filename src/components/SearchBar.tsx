import { FC } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";

type SearchBarProps = {
  defaultValue: string;
  onChange?: (value: string) => void;
};

const InputRoot = styled.div`
  font-weight: 400;
  border-radius: 12px;
  color: grey;
  background: white;
  border: 1px solid ${(props) => props.theme.color.secondary};
  box-shadow: 0px 2px 2px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;

  &:focus-within {
    border-color: ${(props) => props.theme.color.primary};
    outline: 3px solid ${(props) => props.theme.color.primary};
  }

  &:hover {
    border-color: ${(props) => props.theme.color.primary};
  }
`;

const InputElement = styled.input`
  font-size: ${(props) => props.theme.font.body.md};
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: grey;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
`;

const InputAdornment = styled.div`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBar: FC<SearchBarProps> = ({ defaultValue, onChange }) => {
  return (
    <InputRoot>
      <InputElement
        id="search-input"
        type="text"
        defaultValue={defaultValue}
        onChange={(event: { target: { value: string } }) => {
          onChange && onChange(event.target.value);
        }}
      />
      <InputAdornment>
        <Icon size="sm" name="search" />
      </InputAdornment>
    </InputRoot>
  );
};
