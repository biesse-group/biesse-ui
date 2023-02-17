import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.font.family};
`;

const CardBody = styled.div`
  padding: 0 16px 24px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const CardTitle = styled.h3`
  font-weight: normal;
  font-size: 20px;
`;

export interface CardProps {
  /**
   * The card image source
   */
  imageSrc?: string;
  /**
   * The card image alt text
   */
  imageAlt?: string;
  /**
   * Custom image render function
   */
  renderImage?: () => JSX.Element;
  /**
   * The card title
   */
  title?: string | React.ReactElement;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  title,
  children,
  imageSrc,
  imageAlt = "",
  renderImage,
}) => {
  return (
    <CardWrapper>
      {renderImage?.() || (imageSrc && <img src={imageSrc} alt={imageAlt} />)}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {children}
      </CardBody>
    </CardWrapper>
  );
};
