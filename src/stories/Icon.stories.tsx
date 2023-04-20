import { Meta, StoryObj } from "@storybook/react";

import { Icon, IconProps } from "../components";

export default {
  title: "Icons/Icon",
  component: Icon,
  tags: ["autodocs"],
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const defaultArgs: IconProps = {
  name: "careers",
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: "sm",
  },
};

export const ExtraSmall: Story = {
  args: {
    ...defaultArgs,
    size: "xs",
  },
};
