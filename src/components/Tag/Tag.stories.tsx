import { type Meta, type StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

export default {
  title: "Display/Tag",
  component: Tag,
  tags: ["autodocs"],
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary tag",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Secondary tag",
  },
};

export const WithBorder: Story = {
  args: {
    ...Primary.args,
    children: "Tag with border",
    border: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: "Tag with icon",
    icon: "download",
  },
};

export const Stone: Story = {
  args: {
    color: "stone",
    children: "Stone",
    icon: "material-stone",
  },
};

export const Metal: Story = {
  args: {
    color: "metal",
    children: "Metal",
    icon: "material-metal",
  },
};

export const Composite: Story = {
  args: {
    color: "composite",
    children: "Composite",
    icon: "material-composite",
  },
};

export const Wood: Story = {
  args: {
    color: "wood",
    children: "Wood",
    icon: "material-wood",
  },
};

export const Glass: Story = {
  args: {
    color: "glass",
    children: "Glass",
    icon: "material-glass",
  },
};
