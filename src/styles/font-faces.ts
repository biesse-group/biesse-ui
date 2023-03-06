import { css } from "styled-components";

import NBIP_Bold_ttf from "../fonts/nbinternationalprobol-webfont.ttf";
import NBIP_Bold_woff from "../fonts/nbinternationalprobol-webfont.woff";
import NBIP_Bold_woff2 from "../fonts/nbinternationalprobol-webfont.woff2";
import NBIP_Bold_Italic_ttf from "../fonts/nbinternationalprobolita-webfont.ttf";
import NBIP_Bold_Italic_woff from "../fonts/nbinternationalprobolita-webfont.woff";
import NBIP_Bold_Italic_woff2 from "../fonts/nbinternationalprobolita-webfont.woff2";
import NBIP_Book_ttf from "../fonts/nbinternationalproboo-webfont.ttf";
import NBIP_Book_woff from "../fonts/nbinternationalproboo-webfont.woff";
import NBIP_Book_woff2 from "../fonts/nbinternationalproboo-webfont.woff2";
import NBIP_Book_Italic_ttf from "../fonts/nbinternationalprobooita-webfont.ttf";
import NBIP_Book_Italic_woff from "../fonts/nbinternationalprobooita-webfont.woff";
import NBIP_Book_Italic_woff2 from "../fonts/nbinternationalprobooita-webfont.woff2";
import NBIP_Italic_ttf from "../fonts/nbinternationalproita-webfont.ttf";
import NBIP_Italic_woff from "../fonts/nbinternationalproita-webfont.woff";
import NBIP_Italic_woff2 from "../fonts/nbinternationalproita-webfont.woff2";
import NBIP_Medium_ttf from "../fonts/nbinternationalpromed-webfont.ttf";
import NBIP_Medium_woff from "../fonts/nbinternationalpromed-webfont.woff";
import NBIP_Medium_woff2 from "../fonts/nbinternationalpromed-webfont.woff2";
import NBIP_Medium_Italic_ttf from "../fonts/nbinternationalpromedita-webfont.ttf";
import NBIP_Medium_Italic_woff from "../fonts/nbinternationalpromedita-webfont.woff";
import NBIP_Medium_Italic_woff2 from "../fonts/nbinternationalpromedita-webfont.woff2";
import NBIP_Mono_ttf from "../fonts/nbinternationalpromono-webfont.ttf";
import NBIP_Mono_woff from "../fonts/nbinternationalpromono-webfont.woff";
import NBIP_Mono_woff2 from "../fonts/nbinternationalpromono-webfont.woff2";
import NBIP_Regular_ttf from "../fonts/nbinternationalproreg-webfont.ttf";
import NBIP_Regular_woff from "../fonts/nbinternationalproreg-webfont.woff";
import NBIP_Regular_woff2 from "../fonts/nbinternationalproreg-webfont.woff2";

export const fontFaces = css`
  /* Book 300 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_woff2}) format("woff2"), url(${NBIP_Book_woff}) format("woff"),
      url(${NBIP_Book_ttf}) format("ttf");
    font-weight: 300;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Book_Italic_woff2}) format("woff2"),
      url(${NBIP_Book_Italic_woff}) format("woff"), url(${NBIP_Book_Italic_ttf}) format("ttf");
    font-weight: 300;
    font-style: italic;
  }

  /* Regular 400 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Regular_woff2}) format("woff2"), url(${NBIP_Regular_woff}) format("woff"),
      url(${NBIP_Regular_ttf}) format("ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Italic_woff2}) format("woff2"), url(${NBIP_Italic_woff}) format("woff"),
      url(${NBIP_Italic_ttf}) format("ttf");
    font-weight: 400;
    font-style: italic;
  }

  /* Medium 500 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_woff2}) format("woff2"), url(${NBIP_Medium_woff}) format("woff"),
      url(${NBIP_Medium_ttf}) format("ttf");
    font-weight: 500;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Medium_Italic_woff2}) format("woff2"),
      url(${NBIP_Medium_Italic_woff}) format("woff"), url(${NBIP_Medium_Italic_ttf}) format("ttf");
    font-weight: 500;
    font-style: italic;
  }

  /* Bold 700 */
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_woff2}) format("woff2"), url(${NBIP_Bold_woff}) format("woff"),
      url(${NBIP_Bold_ttf}) format("ttf");
    font-weight: 700;
  }
  @font-face {
    font-family: "NB International Pro";
    src: url(${NBIP_Bold_Italic_woff2}) format("woff2"),
      url(${NBIP_Bold_Italic_woff}) format("woff"), url(${NBIP_Bold_Italic_ttf}) format("ttf");
    font-weight: 700;
    font-style: italic;
  }

  /* Monospace */
  @font-face {
    font-family: "NB International Pro Mono";
    src: url(${NBIP_Mono_woff2}) format("woff2"), url(${NBIP_Mono_woff}) format("woff"),
      url(${NBIP_Mono_ttf}) format("ttf");
  }
`;
