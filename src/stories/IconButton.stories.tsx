import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconButton } from "../components";
import ArrowRight from "../icons/ArrowRight";
import { BackgroundDecorator } from "./decorators/BackgroundDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.variant === "primary" ? "light" : "primary"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: <ArrowRight />,
  variant: "primary",
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  icon: <ArrowRight />,
  variant: "light",
};
