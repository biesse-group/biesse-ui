import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "~stories/decorators";

import { Logo } from "./Logo";

export default {
  title: "Display/Logo",
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

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    name: "HSD",
    color: "primary",
  },
};

export const White: Story = {
  args: {
    ...Primary.args,
    color: "white",
  },
};
