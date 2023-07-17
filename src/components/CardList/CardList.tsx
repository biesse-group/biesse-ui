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
  /**
   * Title heading tag, default is `h3`
   */
  titleTag?: TitleProps["variant"];
}

export const CardList: FC<PropsWithChildren<CardListProps>> = ({
  title,
  titleTag = "h3",
  children,
  ...props
}) => {
  return (
    <Grid {...props}>
      {title && (
        <Title variant={titleTag} size="sm" color="primary" uppercase style={{ marginBottom: 0 }}>
          {title}
        </Title>
      )}
      {children}
    </Grid>
  );
};
