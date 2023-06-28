import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "~stories/decorators";

import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Typography/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    children: "The quick brown fox jumped over the lazy dog",
    color: "primary",
  },
};

export const Light: Story = {
  args: {
    ...Primary.args,
    color: "light",
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BackgroundDecorator background="primary" maxWidth="100%">
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export const Uppercase: Story = {
  args: {
    ...Primary.args,
    uppercase: true,
  },
};

// TODO: Add more Title stories...
