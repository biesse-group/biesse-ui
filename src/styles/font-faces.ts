import Fonts from "@Biesse-Group/fonts";
import { css } from "styled-components";

export const fontFaces = css`
  /* Book 300 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Book_woff2}) format("woff2"), url(${Fonts.NBIP_Book_woff}) format("woff"),
      url(${Fonts.NBIP_Book_ttf}) format("ttf");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Book_Italic_woff2}) format("woff2"),
      url(${Fonts.NBIP_Book_Italic_woff}) format("woff"),
      url(${Fonts.NBIP_Book_Italic_ttf}) format("ttf");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  /* Regular 400 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Regular_woff2}) format("woff2"),
      url(${Fonts.NBIP_Regular_woff}) format("woff"), url(${Fonts.NBIP_Regular_ttf}) format("ttf");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Italic_woff2}) format("woff2"),
      url(${Fonts.NBIP_Italic_woff}) format("woff"), url(${Fonts.NBIP_Italic_ttf}) format("ttf");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* Medium 500 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Medium_woff2}) format("woff2"),
      url(${Fonts.NBIP_Medium_woff}) format("woff"), url(${Fonts.NBIP_Medium_ttf}) format("ttf");
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Medium_Italic_woff2}) format("woff2"),
      url(${Fonts.NBIP_Medium_Italic_woff}) format("woff"),
      url(${Fonts.NBIP_Medium_Italic_ttf}) format("ttf");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* Bold 700 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Bold_woff2}) format("woff2"), url(${Fonts.NBIP_Bold_woff}) format("woff"),
      url(${Fonts.NBIP_Bold_ttf}) format("ttf");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${Fonts.NBIP_Bold_Italic_woff2}) format("woff2"),
      url(${Fonts.NBIP_Bold_Italic_woff}) format("woff"),
      url(${Fonts.NBIP_Bold_Italic_ttf}) format("ttf");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  /* Monospace */
  @font-face {
    font-family: "NB International Pro Mono";
    src: url(${Fonts.NBIP_Mono_woff2}) format("woff2"), url(${Fonts.NBIP_Mono_woff}) format("woff"),
      url(${Fonts.NBIP_Mono_ttf}) format("ttf");
  }
`;
