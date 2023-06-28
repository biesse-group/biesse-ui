import { type FC } from "react";
import styled, { css } from "styled-components";

import { Title } from "~components/Title";
import { mqFrom, mqUntil } from "~styles";

export interface StripThreeColsProps {
  /**
   * Strip title
   */
  title?: string;
  /**
   * Strip items. Main will be shown larger on large screens.
   */
  items: [JSX.Element, JSX.Element?, JSX.Element?];
  /**
   * Determine whether the items on tablet devices keeps their proportion
   * or wrap to show the first item as bigger
   */
  tabletBehavior?: "wrap" | "maintain-proportion";
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
}

const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const getAreas = (itemsCount: number, separator: string = " ") => {
  return ["main", "secondary1", "secondary2"].slice(0, itemsCount).join(separator);
};

const ItemsGrid = styled.div<
  Pick<StripThreeColsProps, "tabletBehavior" | "mobileBehavior" | "variant"> & {
    itemsCount: number;
  }
>`
  display: grid;
  grid-template-areas: ${(props) => `"${getAreas(props.itemsCount)}"`};
  grid-template-columns: ${(props) => {
    if (props.itemsCount === 1) {
      return "1fr";
    }
    if (props.itemsCount === 2) {
      return props.variant === "1-2-2" ? "25% 1fr" : "1fr 1fr";
    }
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

  ${(props) => {
    if (props.tabletBehavior === "wrap") {
      return mqUntil(
        "md",
        css`
          grid-template-areas:
            "main main"
            ${props.itemsCount > 1 && `"secondary1 secondary${props.itemsCount > 2 ? "2" : "1"}"`};
          grid-template-columns: 1fr 1fr;
        `
      );
    }
  }}

  ${(props) =>
    mqUntil(
      "sm",
      props.mobileBehavior === "wrap"
        ? css`
            row-gap: 40px;
            padding: 0 15px;
            grid-template-columns: auto;
            grid-template-areas: "${getAreas(props.itemsCount, `" "`)}";
          `
        : css`
            grid-template-columns:
              0 repeat(${props.itemsCount}, ${props.itemsCount > 1 ? "80%" : "1fr"})
              0;
            grid-template-areas: ". ${getAreas(props.itemsCount)} .";
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
  tabletBehavior = "wrap",
  mobileBehavior = "wrap",
  variant = "2-1-1",
  items,
  ...props
}) => {
  const [main, secondary1, secondary2] = items;

  return (
    <Root {...props}>
      {title && (
        <StripTitle variant="H3" color="primary" uppercase>
          {title}
        </StripTitle>
      )}
      <ItemsGrid
        itemsCount={Math.min(items.length, 3)}
        {...{ tabletBehavior, mobileBehavior, variant }}
      >
        <MainItem>{main}</MainItem>
        {secondary1 && <div style={{ gridArea: "secondary1" }}>{secondary1}</div>}
        {secondary2 && <div style={{ gridArea: "secondary2" }}>{secondary2}</div>}
      </ItemsGrid>
    </Root>
  );
};
