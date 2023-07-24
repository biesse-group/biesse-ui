import {
  type ChangeEventHandler,
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  type KeyboardEventHandler,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";

import { useClickOutside } from "~hooks/useClickOutside";
import { inputStyles } from "~styles/input-styles";

export interface AutocompleteProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref" | "onChange"
  > {
  value?: string;
  onChange?: (value: string) => void;
  /**
   * Input placeholder shown when has no value
   */
  placeholder?: string;
  /**
   * Array of suggestion strings
   */
  suggestions: string[];
  /**
   * empty state
   */
  notFoundLabel?: ReactNode;
  /**
   * Whether to show a dark or light shadow on focus/active state (default is `dark`)
   */
  shadow?: "dark" | "light";
  /**
   * Whether the select has been disabled
   */
  disabled?: boolean;
  /**
   * customizable filter function for matching suggestions with user input
   */
  filterFn?: (suggestion: string, input: string) => boolean;
}

const AutocompleteContainer = styled.div`
  position: relative;
`;

const AutocompleteResults = styled.ul<Pick<AutocompleteProps, "shadow">>`
  position: absolute;
  margin: 2px auto;
  z-index: 100;
  background-color: white;
  width: 100%;
  padding: 2px;
  overflow: hidden;
  -webkit-box-shadow: 0px 3px 6px -1px ${(props) => props.theme.color.gray};
  box-shadow: 0px 3px 6px -1px ${(props) => props.theme.color.gray};

  li {
    list-style-type: none;
    margin: 1px 0;
    padding: 4px 0 4px 24px;
    cursor: pointer;
  }

  li:hover:not(.not-found),
  li.active:not(.not-found) {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }

  .not-found {
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input<
  Pick<AutocompleteProps, "shadow" | "disabled"> & { selected?: boolean }
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

const defaultFilterFn = (suggestion: string, input: string) =>
  suggestion.toLowerCase().includes(input.toLowerCase());

export const Autocomplete: FC<AutocompleteProps> = ({
  suggestions,
  notFoundLabel = "Not Found",
  filterFn = defaultFilterFn,
  onChange,
  value,
  defaultValue,
  ...rest
}) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState(defaultValue ?? value ?? "");

  const containerRef = useRef(null);
  useClickOutside(containerRef, () => setIsShow(false));

  const changeInput = useCallback(
    (v: string) => {
      setInput(v);
      onChange?.(v);
    },
    [setInput, onChange]
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const input = e.currentTarget.value;
      const newFilteredSuggestions = suggestions.filter((suggestion) =>
        filterFn(suggestion, input)
      );
      setActive(0);
      setFiltered(newFilteredSuggestions);
      setIsShow(true);
      changeInput(input);
    },
    [changeInput, setIsShow, setFiltered, setActive, suggestions, filterFn]
  );

  const onClickSuggestion = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      setActive(0);
      setFiltered([]);
      setIsShow(false);
      changeInput(e.currentTarget.innerText);
    },
    [changeInput, setIsShow, setActive, setFiltered]
  );

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const wrapActiveIndex = (i: number) => (i + filtered.length) % filtered.length;

      if (e.key === "Enter") {
        setActive(0);
        setIsShow(false);
        changeInput(filtered[active]);
      } else if (e.key === "ArrowUp") {
        return setActive(wrapActiveIndex(active - 1));
      } else if (e.key === "ArrowDown") {
        return setActive(wrapActiveIndex(active + 1));
      }
    },
    [setActive, setIsShow, onChange, active, filtered]
  );

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <AutocompleteResults>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClickSuggestion}>
                  {suggestion}
                </li>
              );
            })}
          </AutocompleteResults>
        );
      } else {
        return (
          <AutocompleteResults>
            <li className="not-found">{notFoundLabel}</li>
          </AutocompleteResults>
        );
      }
    }
    return null;
  };

  return (
    <AutocompleteContainer ref={containerRef}>
      <StyledInput
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDown}
        value={value ?? input}
        {...rest}
      />
      {renderAutocomplete()}
    </AutocompleteContainer>
  );
};

export default Autocomplete;
