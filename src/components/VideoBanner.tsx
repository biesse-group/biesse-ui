import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles/media-queries";
import { Text, Title, VideoPlayer, VideoPlayerProps } from "./";

export interface VideoBannerProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Title located on top of the video player
   */
  title?: string;
  /**
   * Subtitle located under the title
   */
  subTitle?: string;
  /**
   * Longer, smaller text located under the subtitle
   */
  description?: string | JSX.Element;
  /**
   * Inner VideoPlayer
   */
  video: VideoPlayerProps;
  testId?: string;
}

const VideoBannerRoot = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 47px;
  overflow: hidden;

  ${mqUntil(
    "md",
    css`
      padding-top: 30px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding-top: 46px;
    `
  )}

  background-color: ${(props) => props.theme.color.primary};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
`;

const TitleWrapper = styled.div`
  text-transform: uppercase;
  margin-bottom: 7px;
  > h1 {
    margin-bottom: 0px;
  }
`;

const SubTitleWrapper = styled.div`
  margin-bottom: 40px;
  text-transform: uppercase;
  > h5 {
    margin-bottom: 0px;
  }

  ${mqUntil(
    "md",
    css`
      margin-bottom: 18px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      margin-bottom: 28px;
    `
  )}
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 40px;
  padding: 0px 20%;
  text-align: center;

  ${mqUntil(
    "md",
    css`
      padding: 0px 5%;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding: 0px 25px;
    `
  )}
`;

const VideoPlayerWrapper = styled.div`
  width: 100%;
`;

export const VideoBanner: FC<PropsWithChildren<VideoBannerProps>> = ({
  testId,
  title,
  subTitle,
  description,
  video,
  ...props
}) => {
  return (
    <VideoBannerRoot data-testid={testId} {...props}>
      {title && (
        <TitleWrapper>
          <Title variant="H1" color="light">
            {title}
          </Title>
        </TitleWrapper>
      )}
      {subTitle && (
        <SubTitleWrapper>
          <Title variant="H5" color="light">
            {subTitle}
          </Title>
        </SubTitleWrapper>
      )}

      {description && typeof description === "string" ? (
        <DescriptionWrapper>
          <Text size="md" color="light">
            {description}
          </Text>
        </DescriptionWrapper>
      ) : (
        <DescriptionWrapper>{description}</DescriptionWrapper>
      )}
      <VideoPlayerWrapper>
        <VideoPlayer {...video} />
      </VideoPlayerWrapper>
    </VideoBannerRoot>
  );
};
