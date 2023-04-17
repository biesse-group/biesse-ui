import { Meta, StoryFn } from "@storybook/react";

import { VideoBanner } from "../components";

export default {
  title: "Video/VideoBanner",
  component: VideoBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof VideoBanner>;

const Template: StoryFn<typeof VideoBanner> = (args) => <VideoBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "La Produzione",
  subTitle: "Efficienza e competenza",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  video: {
    testId: "video-player",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
};

// TODO Chrome policies breaks the component
// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId("video-player"));
//   await userEvent.click(canvas.getByTestId("video-player-play-button"));
//   await new Promise((f) => setTimeout(f, 2000));
//   await userEvent.click(canvas.getByTestId("video-player-pause"));
// };
