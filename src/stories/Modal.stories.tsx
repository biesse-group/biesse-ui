import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { Button, Modal, Text, VideoPlayer } from "../components";

export default {
  title: "Layout/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args, context) => {
  const [isShown, setIsShown] = useState(false);
  const onCloseAction = () => setIsShown(false);
  return (
    <div>
      <Button onClick={() => setIsShown(true)} variant="primary">
        {context.parameters.buttonLabel || "Open modal"}
      </Button>
      <Modal {...{ ...args, isShown, onCloseAction }} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  testId: "video-player",
  children: <Text color="light">I am the modal content</Text>,
};

export const WithVideo = Template.bind({});
WithVideo.args = {
  testId: "video-player",
  children: (
    <VideoPlayer
      variant="fit"
      autoPlay={true}
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    />
  ),
};
WithVideo.parameters = {
  buttonLabel: "Play video",
};
