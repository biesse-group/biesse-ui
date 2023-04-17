import { Meta, StoryFn } from "@storybook/react";

import { Logo, LogoProps } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.color === "white" ? "primary" : "light"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

const defaultArgs: LogoProps = {
  name: "HSD",
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  color: "primary",
};

export const White = Template.bind({});
White.args = {
  ...defaultArgs,
  color: "white",
};
