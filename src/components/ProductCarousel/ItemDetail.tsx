import { motion } from "framer-motion";
import React, { type FC, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { type BaseProps } from "~components/baseProps";
import { mqUntil } from "~styles";

import { detailVariants } from "./variants";

const ItemDetailInner = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  position: absolute;

  ${mqUntil(
    "sm",
    css`
      padding: 0 30px;
    `
  )}
`;

export interface ItemDetailProps extends BaseProps {
  uniqueId: React.Key;
}

export const ItemDetail: FC<PropsWithChildren<ItemDetailProps>> = ({
  uniqueId,
  children,
  ...props
}) => {
  return (
    <ItemDetailInner
      variants={detailVariants}
      initial="enter"
      animate="center"
      exit="exit"
      key={uniqueId}
      {...props}
    >
      {children}
    </ItemDetailInner>
  );
};
