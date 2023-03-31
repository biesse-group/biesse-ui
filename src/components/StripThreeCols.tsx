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
  /**
   * Items size variant (for desktop devices only):
   * - `2-1-1` (default): First item is 50% while 2nd and 3rd are 25% of available space
   * - `1-2-2`: First item is 25% while 2nd and 3rd are 37.5% of available space
   * - `1-1-1`: Items are 33.33% of available space each
   */
  variant?: "2-1-1" | "1-2-2" | "1-1-1";
};

const StripRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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

const StripInner = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
  margin: 0 auto;
`;

const ItemsGrid = styled.div<Pick<StripThreeColsProps, "mobileBehavior" | "variant">>`
  display: grid;
  grid-template: "main secondary1 secondary2" / ${(props) => {
      switch (props.variant) {
        case "2-1-1":
          return "2fr 1fr 1fr";
        case "1-2-2":
          return "25% 1fr 1fr";
        case "1-1-1":
          return "1fr 1fr 1fr";
      }
    }};
  gap: 20px;

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

  ${mqFrom(
    "sm",
    css`
      padding: 0;
    `
  )}
`;

const MainItem = styled.div`
  grid-area: main;
`;

/**
 * Three columns with different sizes and vary layouts available.
 * On mobile devices it can either wrap or scroll horizontally.
 */
export const StripThreeCols: FC<StripThreeColsProps> = ({
  title,
  mobileBehavior = "wrap",
  variant = "2-1-1",
  items: [main, secondary1, secondary2],
}) => {
  return (
    <StripRoot>
      <StripInner>
        <StripTitle variant="H3" color="primary">
          {title}
        </StripTitle>
        <ItemsGrid {...{ mobileBehavior, variant }}>
          <MainItem>{main}</MainItem>
          <div style={{ gridArea: "secondary1" }}>{secondary1}</div>
          <div style={{ gridArea: "secondary2" }}>{secondary2}</div>
        </ItemsGrid>
      </StripInner>
    </StripRoot>
  );
};
