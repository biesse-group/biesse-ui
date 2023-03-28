import { FC } from "react";
import styled, { css } from "styled-components";

import { mqFrom, mqUntil } from "../styles";
import { Title } from "./Title";

export type StripThreeColsProps = {
  /**
   * Strip title
   */
  title: string;
  /**
   * Strip items. Main will be shown larger on large screens.
   */
  items: [JSX.Element, JSX.Element?, JSX.Element?];
  /**
   * Determine whether wrap items or scroll horizontally on mobile devices
   */
  mobileBehavior?: "wrap" | "scroll";
};

const stripPaddingStyle = css`
  ${mqFrom(
    "sm",
    css`
      padding: 0 25px;
    `
  )}

  ${mqFrom(
    "lg",
    css`
      padding: 0 90px;
    `
  )}
`;

const StripRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StripInner = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
  margin: 0 auto;
`;

const ItemsGrid = styled.div<Pick<StripThreeColsProps, "mobileBehavior">>`
  display: grid;
  grid-template: "main secondary1 secondary2" / 2fr 1fr 1fr;
  gap: 20px;

  ${stripPaddingStyle}

  ${mqUntil(
    "md",
    css`
      grid-template:
        "main main"
        "secondary1 secondary2" / 1fr 1fr;
    `
  )}

  ${(props) =>
    mqUntil(
      "sm",
      props.mobileBehavior === "wrap"
        ? css`
            row-gap: 40px;
            padding: 0 15px;
            grid-template-columns: auto;
            grid-template-areas:
              "main"
              "secondary1"
              "secondary2";
          `
        : css`
            grid-template-columns: 0 repeat(3, 80%) 0;
            grid-template-areas: ". main secondary1 secondary2 .";
            overflow-x: auto;
          `
    )}
`;

const StripTitle = styled(Title)`
  margin-bottom: 30px;
  padding: 0 15px;

  ${stripPaddingStyle}
`;

const MainItem = styled.div`
  grid-area: main;
`;

export const StripThreeCols: FC<StripThreeColsProps> = ({
  title,
  mobileBehavior = "wrap",
  items: [main, secondary1, secondary2],
}) => {
  return (
    <StripRoot>
      <StripInner>
        <StripTitle variant="H3" color="primary">
          {title}
        </StripTitle>
        <ItemsGrid mobileBehavior={mobileBehavior}>
          <MainItem>{main}</MainItem>
          <div style={{ gridArea: "secondary1" }}>{secondary1}</div>
          <div style={{ gridArea: "secondary2" }}>{secondary2}</div>
        </ItemsGrid>
      </StripInner>
    </StripRoot>
  );
};
