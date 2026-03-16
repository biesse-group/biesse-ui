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
      <BackgroundDecorator background={args.variant === "white" ? "primary" : "light"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Gradient: Story = {
  args: {
    variant: "gradient",
    width: "250px",
    title: "HSD Mechatronics - Gradient Logo",
  },
};

export const Flat: Story = {
  args: {
    variant: "flat",
    width: "250px",
    title: "HSD Mechatronics - Flat Blue Logo",
  },
};

export const Black: Story = {
  args: {
    variant: "black",
    width: "250px",
    title: "HSD Mechatronics - Black Logo",
  },
};

export const White: Story = {
  args: {
    variant: "white",
    width: "250px",
    title: "HSD Mechatronics - White Logo",
  },
};
