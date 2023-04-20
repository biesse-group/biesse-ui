import styled, { css } from "styled-components";

type Props = {
  selected?: boolean;
  onClick?: () => void;
};

export const Tab = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  outline: 0;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => props.theme.button.borderRadius};
  padding: 0 25px;
  background-color: ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.book};
  font-size: 16px;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.white};
    `}
`;
