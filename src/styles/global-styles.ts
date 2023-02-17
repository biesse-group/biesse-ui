import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${(props) => props.theme.font.family};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
