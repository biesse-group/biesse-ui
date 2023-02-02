/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, { FC, PropsWithChildren } from "react";

const cardStyle = (theme: Theme) => css`
  border: 1px solid #eaeaea;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${theme.font.family};
`;

const cardBodyStyle = css`
  padding: 0 16px 24px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const cardTitleStyle = css`
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

const Card: FC<PropsWithChildren<CardProps>> = ({
  title,
  children,
  imageSrc,
  imageAlt = "",
  renderImage,
}) => {
  return (
    <div css={cardStyle}>
      {renderImage?.() || (imageSrc && <img src={imageSrc} alt={imageAlt} />)}
      <div css={cardBodyStyle}>
        <h3 css={cardTitleStyle}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
