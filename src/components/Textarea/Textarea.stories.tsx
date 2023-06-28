import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { BackgroundDecorator } from "~stories/decorators";

import { Textarea } from "./Textarea";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onChange: {
      control: false,
    },
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator
        maxWidth={500}
        background={args.shadow === "light" ? "light" : "primary"}
      >
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const DarkBackground: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const MaxLenght100: Story = {
  args: {
    placeholder: "Type something...",
    maxLength: 100,
  },
};

export const LightBackground: Story = {
  args: {
    ...DarkBackground.args,
    shadow: "light",
  },
};

export const Filled: Story = {
  args: {
    ...DarkBackground.args,
    testId: "textarea",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("textarea"), "In ut quam vitae odio", { delay: 50 });
  },
};
