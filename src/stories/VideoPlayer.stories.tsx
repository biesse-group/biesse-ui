import { ComponentMeta, ComponentStory } from "@storybook/react";

// import { userEvent, within } from "@storybook/testing-library";
import { VideoPlayer } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
};

export const Crop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Crop.args = {
  testId: "video-player",
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  viewBox: { height: "200px", width: "100%" },
};
