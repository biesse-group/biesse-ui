import { type Meta, type StoryObj } from "@storybook/react";

import { Icon, type IconProps } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icons/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

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
