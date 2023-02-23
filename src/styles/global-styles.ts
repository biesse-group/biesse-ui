import { createGlobalStyle } from "styled-components";

import { fontFaces } from "./font-faces";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${(props) => props.theme.font.family};
  }

  * {
    box-sizing: border-box;
  }

  ${fontFaces}
`;

export default GlobalStyle;
