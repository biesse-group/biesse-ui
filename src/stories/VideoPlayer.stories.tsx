import { Meta, StoryFn } from "@storybook/react";

import { VideoPlayer } from "../components";

export default {
  title: "Video/VideoPlayer",
  component: VideoPlayer,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof VideoPlayer>;

const Template: StoryFn<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  autoPlay: true,
};
