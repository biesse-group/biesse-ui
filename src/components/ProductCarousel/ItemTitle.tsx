import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { mqUntil } from "~styles";

import { type ItemProps } from "./types";

export const ItemTitle = styled(motion.div)<ItemProps>`
  color: ${(props) => props.theme.color.white};
  font-size: 220px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  position: absolute;
  text-align: center;
  width: 800px;
  user-select: none;

  ${mqUntil(
    "xl",
    css`
      font-size: 150px;
      width: 600px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      font-size: 220px;
      top: -80px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      font-size: 110px;
      top: -80px;
    `
  )}
`;
