import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { Button, ModalVideoPlayer } from "../components";

export default {
  title: "Video/ModalVideoPlayer",
  component: ModalVideoPlayer,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ModalVideoPlayer>;

const Template: ComponentStory<typeof ModalVideoPlayer> = (args) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsShown(true)} variant="primary">
        SHOW VIDEO
      </Button>
      <ModalVideoPlayer {...{ ...args, isShown, onCloseAction: () => setIsShown(false) }} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
};
