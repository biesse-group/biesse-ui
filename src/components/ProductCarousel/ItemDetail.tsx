import { motion } from "framer-motion";
import React, { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles";
import { BaseProps } from "../baseProps";
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

interface Props extends BaseProps {
  uniqueId: React.Key;
}

export const ItemDetail: FC<PropsWithChildren<Props>> = ({ uniqueId, children, ...props }) => {
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
