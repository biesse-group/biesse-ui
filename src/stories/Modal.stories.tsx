import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { Button, Modal, VideoPlayer } from "../components";

export default {
  title: "Video/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isShown, setIsShown] = useState(false);
  const onCloseAction = () => setIsShown(false);
  return (
    <div>
      <Button onClick={() => setIsShown(true)} variant="primary">
        SHOW VIDEO
      </Button>
      <Modal {...{ ...args, isShown, onCloseAction }} />
    </div>
  );
};

const VideoChild = (
  <VideoPlayer
    variant="fit"
    autoPlay={true}
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  />
);

export const WithVideo = Template.bind({});
WithVideo.args = {
  testId: "video-player",
  children: VideoChild,
};
