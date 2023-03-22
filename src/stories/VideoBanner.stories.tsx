import { ComponentMeta, ComponentStory } from "@storybook/react";

// import { userEvent, within } from "@storybook/testing-library";
import { VideoBanner } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Video/VideoBanner",
  component: VideoBanner,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof VideoBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoBanner> = (args) => <VideoBanner {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "La Produzione",
  subTitle: "Efficienza e competenza",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  video: {
    testId: "video-player",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    viewBox: {
      height: "500px",
      width: "100%",
    },
  },
};

// Chrome policies breaks the component, TODO
// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId("video-player"));
//   await userEvent.click(canvas.getByTestId("video-player-play-button"));
//   await new Promise((f) => setTimeout(f, 2000));
//   await userEvent.click(canvas.getByTestId("video-player-pause"));
// };
