import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Title } from "../Title";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 30px;
`;

export type CardListProps = {
  /**
   * Title of the list
   */
  title?: string;
};

export const CardList: FC<PropsWithChildren<CardListProps>> = ({ title, children, ...props }) => {
  return (
    <Grid {...props}>
      {title && (
        <Title variant="H5" color="primary" uppercase style={{ marginBottom: 0 }}>
          {title}
        </Title>
      )}
      {children}
    </Grid>
  );
};
