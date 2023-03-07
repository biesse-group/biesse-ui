import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Title } from "../Title";
import { StaticLocator } from "./StaticLocator";

export interface LocatorBoxProps {
  /**
   * Title to be shown on top of locator
   */
  title: string;
  /**
   * Locator component,
   * Default one is a Biesse image
   */
  locator?: JSX.Element;
}

const LocatorBoxRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const LocatorTitle = styled(Title)`
  margin-bottom: 20px;
  ${mqUntil(
    "md",
    css`
      margin-left: 20px;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      margin-left: 51px;
    `
  )}
`;

const LocatorBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const LocatorBox: FC<LocatorBoxProps> = ({ title, locator, ...props }) => {
  return (
    <LocatorBoxRoot {...props}>
      <LocatorTitle variant="H6" color="light">
        {title}
      </LocatorTitle>
      {locator ? (
        <LocatorBodyWrapper>{locator}</LocatorBodyWrapper>
      ) : (
        <LocatorBodyWrapper>
          <StaticLocator />
        </LocatorBodyWrapper>
      )}
    </LocatorBoxRoot>
  );
};
