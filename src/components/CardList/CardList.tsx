import { type FC, type PropsWithChildren } from "react";
import styled from "styled-components";

import { type BaseProps } from "~components/baseProps";
import { Title, type TitleProps } from "~components/Title";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 30px;
`;

export interface CardListProps extends BaseProps {
  /**
   * Title of the list
   */
  title?: string;
  titleTag?: TitleProps["variant"];
}

export const CardList: FC<PropsWithChildren<CardListProps>> = ({
  title,
  titleTag = "h5",
  children,
  ...props
}) => {
  return (
    <Grid {...props}>
      {title && (
        <Title variant={titleTag} color="primary" uppercase style={{ marginBottom: 0 }}>
          {title}
        </Title>
      )}
      {children}
    </Grid>
  );
};
