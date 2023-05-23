import styled, { css } from "styled-components";

type Props = {
  selected?: boolean;
};

export const IconTab = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 1px solid ${(props) => props.theme.color.primary};
  background-color: transparent;
  color: ${(props) => props.theme.color.primary};
  width: 70px;
  height: 70px;
  border-radius: 70px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${props.theme.color.primary};
      color: ${props.theme.color.white};
    `}
`;
