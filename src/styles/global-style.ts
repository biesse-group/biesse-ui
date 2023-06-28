import { fontFaces } from "@biesse-group/fonts";
import { createGlobalStyle } from "styled-components";

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
