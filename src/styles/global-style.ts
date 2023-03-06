import { createGlobalStyle } from "styled-components";

import { fontFaces } from "./font-faces";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${(props) => props.theme.font.family};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ${fontFaces}
`;
