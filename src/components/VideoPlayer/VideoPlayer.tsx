import { createRef, FC, PropsWithChildren, useState } from "react";
import styled, { css } from "styled-components";

import { PlayButton } from "./PlayButton";

export interface VideoPlayerProps {
  /**
   * Optional component class name
   */
  className?: string;
  url: string;
  /**
   * Video format,
   * if none is passed mp4 is assumed
   */
  mimeType?: string;
  loop?: boolean;
  testId?: string;
}

const VideoPlayerRoot = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
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

export const VideoPlayer: FC<PropsWithChildren<VideoPlayerProps>> = ({
  testId,
  url,
  mimeType,
  loop = true,
  ...props
}) => {
  const videoRef = createRef<HTMLVideoElement>();

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const handlePlayButton = () => {
    if (!isVideoPlaying) {
      videoRef.current?.play();
    }
  };
  const handlePause = () => {
    if (isVideoPlaying) {
      videoRef.current?.pause();
    }
  };

  return (
    <VideoPlayerRoot data-testid={testId} {...props}>
      <PauseAction
        isPlaying={isVideoPlaying}
        onClick={handlePause}
        data-testid={`${testId}-pause`}
      />
      <video
        width="100%"
        onPlaying={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        ref={videoRef}
        loop={loop}
      >
        <source src={url} type={mimeType || "video/mp4"} />
        Your browser does not support HTML video.
      </video>

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
