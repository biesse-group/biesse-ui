/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { FC } from "react";

import { SearchIcon } from "../icons/SearchIcon";

type SearchBarProps = {
  defaultValue: string;
  onChange?: (value: string) => void;
};

const inputRootStyle = (theme: Theme) => css`
  font-weight: 400;
  border-radius: 12px;
  color: grey;
  background: white;
  border: 1px solid ${theme?.color?.secondary || "grey"};
  box-shadow: 0px 2px 2px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;

  &:focus-within {
    border-color: ${theme?.color?.primary};
    outline: 3px solid ${theme?.color?.primary};
  }

  &:hover {
    border-color: ${theme?.color?.primary};
  }
`;

const inputElementStyle = (theme: Theme) => css`
  font-size: ${theme?.font?.size?.medium || "14px"};
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

const inputAdornmentStyle = css`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBar: FC<SearchBarProps> = ({ defaultValue, onChange }) => {
  return (
    <div css={inputRootStyle}>
      <input
        css={inputElementStyle}
        id="search-input"
        type="text"
        defaultValue={defaultValue}
        onChange={(event: { target: { value: string } }) => {
          onChange && onChange(event.target.value);
        }}
      />
      <div css={inputAdornmentStyle}>
        <SearchIcon size="small" />
      </div>
    </div>
  );
};
