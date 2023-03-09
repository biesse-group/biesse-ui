import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles";
import { Title } from "./Title";

export type StripThreeColsProps = {
  title: string;
  items: {
    main: JSX.Element;
    secondary1?: JSX.Element;
    secondary2?: JSX.Element;
  };
  mobileBehavior?: "wrap" | "scroll";
};

const StripRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StripInner = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl}px;
  padding: 0 40px;
  margin: 0 auto;

  ${mqUntil(
    "md",
    css`
      padding: 0 25px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding: 0 15px;
    `
  )}
`;

const StripScroll = styled.div`
  overflow-x: auto;
`;

const ItemsGrid = styled.div<Pick<StripThreeColsProps, "mobileBehavior">>`
  display: grid;
  grid-template: "main secondary1 secondary2" / 2fr 1fr 1fr;
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
            grid-template-columns: auto;
            grid-template-areas:
              "main"
              "secondary1"
              "secondary2";
          `
        : css`
            grid-template-columns: repeat(3, 80%);
            grid-template-areas: "main secondary1 secondary2";
          `
    )}
`;

const StripTitle = styled(Title)`
  margin-bottom: 30px;
`;

const MainItem = styled.div`
  grid-area: main;
`;

export const StripThreeCols: FC<StripThreeColsProps> = ({
  title,
  mobileBehavior = "wrap",
  items: { main, secondary1, secondary2 },
}) => {
  const grid = (
    <ItemsGrid mobileBehavior={mobileBehavior}>
      <MainItem>{main}</MainItem>
      <div style={{ gridArea: "secondary1" }}>{secondary1}</div>
      <div style={{ gridArea: "secondary2" }}>{secondary2}</div>
    </ItemsGrid>
  );
  return (
    <StripRoot>
      <StripInner>
        <StripTitle variant="H3">{title}</StripTitle>
        {mobileBehavior === "scroll" ? <StripScroll>{grid}</StripScroll> : grid}
      </StripInner>
    </StripRoot>
  );
};
