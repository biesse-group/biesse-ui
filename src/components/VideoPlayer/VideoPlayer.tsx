import { createRef, type FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { PlayButton } from "~components/PlayButton";
import { mqUntil } from "~styles";

export interface VideoPlayerProps extends BaseProps {
  url: string;
  /**
   * Video format, if none is passed mp4 is assumed
   */
  mimeType?: string;
  /**
   * Whether the video should be repeated in loop
   */
  loop?: boolean;
  /**
   * Whether the video should start playing automatically
   */
  autoPlay?: boolean;
  /**
   * Whether the small scaled video should be cut horizontally or resize
   */
  variant?: "cover" | "fit";
  testId?: string;
  onChangePlayStatus?: (isPlaying: boolean) => void;
  onPressPlay?: () => void;
  onPressPause?: () => void;
}

const VideoPlayerRoot = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PauseAction = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;

  ${(props) =>
    !props.isPlaying &&
    css`
      display: none;
    `}
`;

const StyledVideo = styled.video<Pick<VideoPlayerProps, "variant">>`
  width: 100%;

  ${({ variant }) =>
    variant === "cover" &&
    mqUntil(
      "sm",
      css`
        width: auto;
        height: 100%;
      `
    )}
`;

export const VideoPlayer: FC<VideoPlayerProps> = ({
  testId,
  url,
  mimeType,
  loop = true,
  variant = "cover",
  autoPlay = false,
  onPressPause,
  onPressPlay,
  onChangePlayStatus,
  ...props
}) => {
  const videoRef = createRef<HTMLVideoElement>();

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(autoPlay);

  useEffect(() => {
    if (onChangePlayStatus) onChangePlayStatus(isVideoPlaying);
  }, [onChangePlayStatus, isVideoPlaying]);

  const handlePlayButton = () => {
    if (!isVideoPlaying) {
      videoRef.current?.play();
      if (onPressPlay) onPressPlay();
    }
  };

  const handlePause = () => {
    if (isVideoPlaying) {
      videoRef.current?.pause();
      if (onPressPause) onPressPause();
    }
  };

  return (
    <VideoPlayerRoot data-testid={testId} {...props}>
      <PauseAction isPlaying={isVideoPlaying} onClick={handlePause} data-testid={`pause-action`} />
      <StyledVideo
        onPlaying={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        ref={videoRef}
        controls={false}
        playsInline
        loop={loop}
        variant={variant}
        autoPlay={autoPlay}
      >
        <source src={url} type={mimeType ?? "video/mp4"} />
        Your browser does not support HTML video.
      </StyledVideo>

      <PlayButtonWrapper>
        <PlayButton
          testId={testId ? `play-button` : undefined}
          isPlaying={isVideoPlaying}
          onClick={handlePlayButton}
        />
      </PlayButtonWrapper>
    </VideoPlayerRoot>
  );
};
