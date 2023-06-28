import { type Meta, type StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumped over the lazy dog",
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    weight: "bold",
  },
};

export const Italic: Story = {
  args: {
    ...Default.args,
    italic: true,
  },
};

// TODO: Add more Text stories...
