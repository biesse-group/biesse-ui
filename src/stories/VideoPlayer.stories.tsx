import { ComponentMeta, ComponentStory } from "@storybook/react";

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
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
};
