import { FC } from "react";
import styled from "styled-components";

import { borderRadius, multilineEllipsis, singleLineEllipsis } from "../../styles";
import { Button } from "../Button";
import { Text } from "../Text";
import { Title } from "../Title";

export type CardListItemProps = {
  preTitle?: string;
  title: string;
  image: JSX.Element;
  buttonLabel?: string;
  onClick?: () => void;
};

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
  ${multilineEllipsis(2)};
`;

const CardAction = styled.div`
  grid-area: action;
  align-self: self-end;
`;

export const CardListItem: FC<CardListItemProps> = ({
  preTitle,
  title,
  image,
  buttonLabel,
  onClick,
}) => {
  return (
    <CardRoot>
      <CardImage>{image}</CardImage>
      <CardPreTitle italic size="sm">
        {preTitle}
      </CardPreTitle>
      <CardTitle variant="H6" color="primary" uppercase>
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
