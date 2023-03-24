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

const TagsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin-bottom: 10px;

    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const CardTitle = styled(Title)<Pick<CardProps, "preTitle" | "titleSize">>`
  margin-top: ${(props) => (props.preTitle ? "14px" : "29px")};
  font-size: ${(props) => (props.titleSize === "default" ? "32px" : "26px")};
  text-transform: none;
  margin-bottom: 0px;
`;

const CardPreTitle = styled(Text)`
  font-style: italic;
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
  tags?: React.ReactElement[];
  /**
   * Custom image render function
   */
  image?: React.ReactElement;
  /**
   * The card title
   */
  title?: string;
  /**
   * Card title size
   */
  titleSize?: "default" | "small";
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
  titleSize = "default",
  preTitle,
  children,
  action,
  image,
  tags,
}) => {
  return (
    <CardRoot className={className} data-testid={testId}>
      {tags && <TagsWrapper>{tags}</TagsWrapper>}
      {image && (
        <CardImgWrapper>
          <CardImageInner>{image}</CardImageInner>
        </CardImgWrapper>
      )}
      <CardBody>
        <CardUpperBody>
          {preTitle && (
            <CardPreTitle weight="book" size="sm">
              {preTitle}
            </CardPreTitle>
          )}
          <CardTitle variant="H4" color="primary" {...{ titleSize, preTitle }}>
            {title}
          </CardTitle>
          <div style={{ marginTop: "20px" }}>{children}</div>
        </CardUpperBody>
        {action && <div style={{ marginTop: "20px" }}>{action}</div>}
      </CardBody>
    </CardRoot>
  );
};
