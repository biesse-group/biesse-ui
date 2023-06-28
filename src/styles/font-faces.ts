import {
  NBIP_Bold_Italic_ttf,
  NBIP_Bold_Italic_woff,
  NBIP_Bold_Italic_woff2,
  NBIP_Bold_ttf,
  NBIP_Bold_woff,
  NBIP_Bold_woff2,
  NBIP_Book_Italic_ttf,
  NBIP_Book_Italic_woff,
  NBIP_Book_Italic_woff2,
  NBIP_Book_ttf,
  NBIP_Book_woff,
  NBIP_Book_woff2,
  NBIP_Italic_ttf,
  NBIP_Italic_woff,
  NBIP_Italic_woff2,
  NBIP_Medium_Italic_ttf,
  NBIP_Medium_Italic_woff,
  NBIP_Medium_Italic_woff2,
  NBIP_Medium_ttf,
  NBIP_Medium_woff,
  NBIP_Medium_woff2,
  NBIP_Mono_ttf,
  NBIP_Mono_woff,
  NBIP_Mono_woff2,
  NBIP_Regular_ttf,
  NBIP_Regular_woff,
  NBIP_Regular_woff2,
} from "@Biesse-Group/fonts";
import { css } from "styled-components";

export const fontFaces = css`
  /* Book 300 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_woff2}) format("woff2"), url(${NBIP_Book_woff}) format("woff"),
      url(${NBIP_Book_ttf}) format("ttf");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_Italic_woff2}) format("woff2"),
      url(${NBIP_Book_Italic_woff}) format("woff"), url(${NBIP_Book_Italic_ttf}) format("ttf");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  /* Regular 400 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Regular_woff2}) format("woff2"), url(${NBIP_Regular_woff}) format("woff"),
      url(${NBIP_Regular_ttf}) format("ttf");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Italic_woff2}) format("woff2"), url(${NBIP_Italic_woff}) format("woff"),
      url(${NBIP_Italic_ttf}) format("ttf");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* Medium 500 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_woff2}) format("woff2"), url(${NBIP_Medium_woff}) format("woff"),
      url(${NBIP_Medium_ttf}) format("ttf");
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_Italic_woff2}) format("woff2"),
      url(${NBIP_Medium_Italic_woff}) format("woff"), url(${NBIP_Medium_Italic_ttf}) format("ttf");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* Bold 700 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_woff2}) format("woff2"), url(${NBIP_Bold_woff}) format("woff"),
      url(${NBIP_Bold_ttf}) format("ttf");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_Italic_woff2}) format("woff2"),
      url(${NBIP_Bold_Italic_woff}) format("woff"), url(${NBIP_Bold_Italic_ttf}) format("ttf");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  /* Monospace */
  @font-face {
    font-family: "NB International Pro Mono";
    src: url(${NBIP_Mono_woff2}) format("woff2"), url(${NBIP_Mono_woff}) format("woff"),
      url(${NBIP_Mono_ttf}) format("ttf");
  }
`;
