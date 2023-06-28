import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "~components/Button";
import { Text } from "~components/Text";
import { VideoPlayer } from "~components/VideoPlayer";

import { Modal } from "./Modal";

export default {
  title: "Dialogs/Modal",
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    renderTrigger: (props) => (
      <Button variant="primary" {...props}>
        Open modal
      </Button>
    ),
    children: (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text color="light">I am the modal content</Text>
      </div>
    ),
  },
};

export const WithVideo: Story = {
  args: {
    renderTrigger: (props) => (
      <Button variant="primary" {...props}>
        Play video
      </Button>
    ),
    children: (
      <VideoPlayer
        variant="fit"
        autoPlay={true}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    ),
  },
};
