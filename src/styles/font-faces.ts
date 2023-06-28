import NBIP_Bold_woff from "@biesse-ui/fonts/nbinternationalprobol-webfont.woff";
import NBIP_Bold_woff2 from "@biesse-ui/fonts/nbinternationalprobol-webfont.woff2";
import NBIP_Bold_Italic_woff from "@biesse-ui/fonts/nbinternationalprobolita-webfont.woff";
import NBIP_Bold_Italic_woff2 from "@biesse-ui/fonts/nbinternationalprobolita-webfont.woff2";
import NBIP_Book_woff from "@biesse-ui/fonts/nbinternationalproboo-webfont.woff";
import NBIP_Book_woff2 from "@biesse-ui/fonts/nbinternationalproboo-webfont.woff2";
import NBIP_Book_Italic_woff from "@biesse-ui/fonts/nbinternationalprobooita-webfont.woff";
import NBIP_Book_Italic_woff2 from "@biesse-ui/fonts/nbinternationalprobooita-webfont.woff2";
import NBIP_Italic_woff from "@biesse-ui/fonts/nbinternationalproita-webfont.woff";
import NBIP_Italic_woff2 from "@biesse-ui/fonts/nbinternationalproita-webfont.woff2";
import NBIP_Medium_woff from "@biesse-ui/fonts/nbinternationalpromed-webfont.woff";
import NBIP_Medium_woff2 from "@biesse-ui/fonts/nbinternationalpromed-webfont.woff2";
import NBIP_Medium_Italic_woff from "@biesse-ui/fonts/nbinternationalpromedita-webfont.woff";
import NBIP_Medium_Italic_woff2 from "@biesse-ui/fonts/nbinternationalpromedita-webfont.woff2";
import NBIP_Mono_woff from "@biesse-ui/fonts/nbinternationalpromono-webfont.woff";
import NBIP_Mono_woff2 from "@biesse-ui/fonts/nbinternationalpromono-webfont.woff2";
import NBIP_Regular_woff from "@biesse-ui/fonts/nbinternationalproreg-webfont.woff";
import NBIP_Regular_woff2 from "@biesse-ui/fonts/nbinternationalproreg-webfont.woff2";
import { css } from "styled-components";

export const fontFaces = css`
  /* Book 300 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_woff2}) format("woff2"), url(${NBIP_Book_woff}) format("woff");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_Italic_woff2}) format("woff2"),
      url(${NBIP_Book_Italic_woff}) format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  /* Regular 400 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Regular_woff2}) format("woff2"), url(${NBIP_Regular_woff}) format("woff");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Italic_woff2}) format("woff2"), url(${NBIP_Italic_woff}) format("woff");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* Medium 500 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_woff2}) format("woff2"), url(${NBIP_Medium_woff}) format("woff");
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_Italic_woff2}) format("woff2"),
      url(${NBIP_Medium_Italic_woff}) format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* Bold 700 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_woff2}) format("woff2"), url(${NBIP_Bold_woff}) format("woff");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_Italic_woff2}) format("woff2"),
      url(${NBIP_Bold_Italic_woff}) format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  /* Monospace */
  @font-face {
    font-family: "NB International Pro Mono";
    src: url(${NBIP_Mono_woff2}) format("woff2"), url(${NBIP_Mono_woff}) format("woff");
  }
`;
