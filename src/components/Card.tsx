import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles/media-queries";
import { Text } from "./Text";
import { Title } from "./Title";

const CardImgWrapper = styled.div`
  overflow: hidden;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  position: relative;
  height: 450px;
  ${mqUntil(
    "sm",
    css`
      height: 400px;
    `
  )}
`;

const CardImageInner = styled.div`
  display: flex;

  justify-content: center;
  transform: scale(1);
  transition: transform 0.5s ease-out;
  width: 100%;
  height: 100%;
`;

const CardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-out;

  :hover {
    ${CardImageInner} {
      transform: scale(1.25);
    }
  }
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

const CardTitle = styled(Title)<Pick<CardProps, "preTitle">>`
  margin-top: ${(props) => (props.preTitle ? "14px" : "29px")};
  margin-bottom: 0px;
`;

const CardPreTitle = styled(Text)`
  font-style: italic;
  font-weight: bold;
  margin-top: 33px;
`;

const CardBody = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardUpperBody = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export interface CardProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Tag, overlaid on image
   */
  tag?: React.ReactElement;
  /**
   * Custom image render function
   */
  image?: React.ReactElement;
  /**
   * The card title
   */
  title?: string;
  /**
   * Smaller text to be inserted above the title
   */
  preTitle?: string;
  /**
   * Button on the bottom on the card
   */
  action?: React.ReactElement;
  testId?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  className,
  testId,
  title,
  preTitle,
  children,
  action,
  image,
  tag,
}) => {
  return (
    <CardRoot className={className} data-testid={testId}>
      {tag && <TagWrapper>{tag}</TagWrapper>}
      {image && (
        <CardImgWrapper>
          <CardImageInner>{image}</CardImageInner>
        </CardImgWrapper>
      )}
      <CardBody>
        <CardUpperBody>
          {preTitle && <CardPreTitle size="sm">{preTitle}</CardPreTitle>}
          <CardTitle variant="H4" color="primary" preTitle={preTitle}>
            {title}
          </CardTitle>
          <div style={{ marginTop: "20px" }}>{children}</div>
        </CardUpperBody>
        {action && <div style={{ marginTop: "20px" }}>{action}</div>}
      </CardBody>
    </CardRoot>
  );
};
