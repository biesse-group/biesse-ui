import styled from "styled-components";

export const PageButton = styled.button<{ selected?: boolean }>`
  width: 30px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.font.regular.body.sm};
  color: ${(props) => props.theme.color[props.selected ? "primary" : "black"]};
  font-weight: ${(props) => props.theme.font.weight[props.selected ? "bold" : "book"]};
  border: ${(props) => (props.selected ? `1px solid ${props.theme.color.primary}` : "none")};
  cursor: pointer;
`;
