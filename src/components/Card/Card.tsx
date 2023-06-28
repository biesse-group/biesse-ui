import { type FC, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { Text } from "~components/Text";
import { Title } from "~components/Title";

import { borderRadius, mqFrom, mqUntil, multilineEllipsis } from "../../styles";

const CardImageWrapper = styled.div<Pick<CardProps, "direction">>`
  ${(props) => borderRadius(props.theme.card.borderRadius)}
  position: relative;
  height: 450px;

  ${(props) =>
    props.direction === "horizontal" &&
    mqFrom(
      "md",
      css`
        flex: 1 1 calc(100% / 4 * 3);
      `
    )}

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

const CardRoot = styled.div<Pick<CardProps, "direction">>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-out;

  ${(props) =>
    props.direction === "horizontal"
      ? mqFrom(
          "md",
          css`
            flex-direction: row-reverse;
          `
        )
      : css`
          height: 100%;
        `}

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

const CardTitle = styled(Title)<Pick<CardProps, "preTitle" | "titleSize" | "titleLines">>`
  margin-top: ${(props) => (props.preTitle ? "14px" : "29px")};
  font-size: ${(props) => (props.titleSize === "default" ? "32px" : "26px")};
  text-transform: none;
  margin-bottom: 0px;

  ${(props) => props.titleLines && multilineEllipsis(props.titleLines)};
`;

const CardPreTitle = styled(Text)`
  font-style: italic;
  margin-top: 33px;
`;

const CardBodyContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div<Pick<CardProps, "direction">>`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) =>
    props.direction === "horizontal" &&
    mqFrom(
      "md",
      css`
        flex: 1 1 calc(100% / 4);
        justify-content: flex-end;
        margin-right: 20px;

        ${CardBodyContent} {
          flex: 0 0 auto;
        }
      `
    )}
`;

export interface CardProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Card direction
   */
  direction?: "vertical" | "horizontal";
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
   * Max lines of title before ellipsis
   * If undefined no Ellipsis will be applied
   */
  titleLines?: number;
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
  direction = "vertical",
  testId,
  title,
  titleSize = "default",
  titleLines,
  preTitle,
  children,
  action,
  image,
  tags,
  ...props
}) => {
  return (
    <CardRoot className={className} data-testid={testId} direction={direction} {...props}>
      <CardImageWrapper direction={direction}>
        {tags && <TagsWrapper>{tags}</TagsWrapper>}
        {image && <CardImageInner>{image}</CardImageInner>}
      </CardImageWrapper>
      <CardBody direction={direction}>
        <CardBodyContent>
          {preTitle && (
            <CardPreTitle weight="book" size="sm">
              {preTitle}
            </CardPreTitle>
          )}
          <CardTitle variant="H4" color="primary" {...{ titleSize, preTitle, titleLines }}>
            {title}
          </CardTitle>
          <div style={{ marginTop: "20px" }}>
            {typeof children === "string" ? <Text tag="p">{children}</Text> : children}
          </div>
        </CardBodyContent>
        {action && <div style={{ marginTop: "20px" }}>{action}</div>}
      </CardBody>
    </CardRoot>
  );
};
