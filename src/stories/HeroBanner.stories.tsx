import { ComponentMeta, ComponentStory } from "@storybook/react";

import { HeroBanner } from "../components";

export default {
  title: "Slideshow/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: <img src="https://dummyimage.com/1920x1080/cccccc/ffffff.png" alt="" />,
  title: "Case History",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
};
