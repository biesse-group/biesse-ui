import { type FC } from "react";
import styled from "styled-components";

import { borderRadius, multilineEllipsis, singleLineEllipsis } from "~/styles";
import { type BaseProps } from "~components/baseProps";
import { Button } from "~components/Button";
import { Text } from "~components/Text";
import { Title, type TitleProps } from "~components/Title";

export interface CardListItemProps extends BaseProps {
  /**
   * Text shown above the title
   */
  preTitle?: string;
  /**
   * Card title
   */
  title: React.ReactNode;
  /**
   * Title heading tag, default is `h4`
   */
  titleTag?: TitleProps["variant"];
  /**
   * Card image element
   */
  image: React.ReactNode;
  /**
   * Label of the card action button
   */
  buttonLabel?: string;
  onClick?: () => void;
}

const CardImage = styled.div`
  grid-area: image;
  height: 110px;
  ${borderRadius("15px")}

  > * {
    transition: transform 0.5s ease-out;
  }
`;

const CardRoot = styled.div`
  display: grid;
  height: 110px;
  grid-template-areas:
    "image preTitle"
    "image title"
    "image action";
  grid-template-columns: 110px 1fr;
  column-gap: 20px;

  :hover {
    ${CardImage} > * {
      transform: scale(1.25);
    }
  }
`;

const CardPreTitle = styled(Text)`
  grid-area: preTitle;
  margin-bottom: 15px;
  line-height: 1;
  ${singleLineEllipsis}
`;

const CardTitle = styled(Title)`
  grid-area: title;
  margin: 0;
  font-size: 24px;
  ${multilineEllipsis(2)};
`;

const CardAction = styled.div`
  grid-area: action;
  align-self: self-end;
`;

export const CardListItem: FC<CardListItemProps> = ({
  preTitle,
  title,
  titleTag = "h4",
  image,
  buttonLabel,
  onClick,
  ...props
}) => {
  return (
    <CardRoot {...props}>
      <CardImage>{image}</CardImage>
      <CardPreTitle italic size="sm">
        {preTitle}
      </CardPreTitle>
      <CardTitle variant={titleTag} color="primary" uppercase>
        {title}
      </CardTitle>
      <CardAction>
        {buttonLabel && (
          <Button variant="primary-naked" size="small" rightIcon="chevron-right" onClick={onClick}>
            {buttonLabel}
          </Button>
        )}
      </CardAction>
    </CardRoot>
  );
};
