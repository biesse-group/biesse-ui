import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { ItemProps } from "./itemProps";

export const ItemImage = styled(motion.div)<ItemProps>`
  position: absolute;
  text-align: center;
  width: 450px;
  height: 450px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mqUntil(
    "xl",
    css`
      width: 300px;
      height: 300px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      width: 450px;
      height: 450px;
    `
  )}

${mqUntil(
    "sm",
    css`
      width: 280px;
      height: 280px;
    `
  )}
`;
