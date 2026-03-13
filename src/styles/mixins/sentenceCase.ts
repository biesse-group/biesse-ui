import { css } from "styled-components";

/**
 * Mixin per simulare la trasformazione sentence-case via CSS.
 * Forza tutto in minuscolo e mette in maiuscolo solo la prima lettera dell'elemento.
 */
export const sentenceCase = css`
  text-transform: lowercase;
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`;
