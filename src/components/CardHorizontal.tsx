import { FC } from "react";
import styled, { useTheme } from "styled-components";

import { Icon, IconName } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";

const CardContent = styled.div`
  padding: 45px 25px;
  flex: 1 1 auto;
`;

const CardTitle = styled(Title)`
  margin-bottom: 29px;
`;

const CardIcon = styled(Icon)`
  margin-bottom: 36px;
`;

const CardActions = styled.div`
  margin-top: 30px;
`;

const CardImage = styled.div`
  flex: 0 0 300px;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const CardImageInner = styled.div`
  transform: scale(1);
  transition: transform 0.5s ease-out;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.card.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.card.borderRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.lightGray};
  display: inline-flex;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};

    ${CardImageInner} {
      transform: scale(1.25);
    }
  }
`;

type CardHorizontalProps = {
  title: string;
  icon?: IconName;
  description?: string | JSX.Element;
  actions?: JSX.Element;
  image?: JSX.Element;
  testId?: string;
};

export const CardHorizontal: FC<CardHorizontalProps> = ({
  icon,
  title,
  description,
  actions,
  image,
  testId,
}) => {
  const theme = useTheme();
  return (
    <CardContainer data-testid={testId}>
      <CardContent>
        {icon && <CardIcon name={icon} color={theme.color.primary} />}
        <CardTitle variant="H5">{title}</CardTitle>
        {typeof description === "string" ? <Text>{description}</Text> : description}
        <CardActions>{actions}</CardActions>
      </CardContent>
      {image && (
        <CardImage>
          <CardImageInner>{image}</CardImageInner>
        </CardImage>
      )}
    </CardContainer>
  );
};
