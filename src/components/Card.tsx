import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Text } from "./Text";
import { Title } from "./Title";

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    .img-wrapper {
      > * {
        transform: scale(1.25);
        transition: transform 0.5s ease-out;
      }
    }
  }
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

const CardImgWrapper = styled.div`
  overflow: hidden;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  position: relative;
  display: flex;

  > * {
    width: 100%;
  }
`;

const CardBody = styled.div`
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
   * The card image source
   */
  imageSrc?: string;
  /**
   * Tag, overlaid on image
   */
  tag?: React.ReactElement;
  /**
   * The card image alt text
   */
  imageAlt?: string;
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
  imageSrc,
  imageAlt = "",
  action,
  image,
  tag,
}) => {
  return (
    <CardWrapper className={className} data-testid={testId}>
      {tag && (
        <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: "1" }}>{tag}</div>
      )}
      {image ? (
        <CardImgWrapper className="img-wrapper">{image}</CardImgWrapper>
      ) : (
        imageSrc && (
          <CardImgWrapper className="img-wrapper">
            <img src={imageSrc} alt={imageAlt} />
          </CardImgWrapper>
        )
      )}
      <CardBody>
        {preTitle && <CardPreTitle size="sm">{preTitle}</CardPreTitle>}
        <CardTitle variant="H4" color="primary" preTitle={preTitle}>
          {title}
        </CardTitle>
        <div style={{ marginTop: "20px" }}>{children}</div>
        {action && <div style={{ marginTop: "20px" }}>{action}</div>}
      </CardBody>
    </CardWrapper>
  );
};
