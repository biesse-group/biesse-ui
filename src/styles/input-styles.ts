import { css } from "styled-components";

export const inputStyles = (shadow: "dark" | "light" = "dark") => css`
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.font.regular.body.sm};
  font-weight: ${(props) => props.theme.font.weight.book};
  font-family: ${(props) => props.theme.font.family};
  border-radius: ${(props) => props.theme.input.borderRadius};
  padding: 0 20px;
  height: 45px;
  border: none;
  outline: none;
  transition: all 0.2s ease-out;
  width: 100%;

  ${shadow === "light" &&
  css`
    border: 1px solid ${(props) => props.theme.input.borderColor};
  `}

  &:focus,
  &:active {
    box-shadow: 0 0 10px
      ${({ theme }) =>
        shadow === "dark" ? theme.input.boxShadow.dark : theme.input.boxShadow.light};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.black};
    font-style: italic;
  }
`;
