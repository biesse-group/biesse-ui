import { Meta, StoryObj } from "@storybook/react";

import { VideoPlayer } from "../components";

export default {
  title: "Video/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof VideoPlayer>;

type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  args: {
    testId: "video-player",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
};

export const AutoPlay: Story = {
  args: {
    ...Default.args,
    autoPlay: true,
  },
};
