import { Meta, StoryFn } from "@storybook/react";

import { Icon, IconProps } from "../components";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

const defaultArgs: IconProps = {
  name: "careers",
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "sm",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  ...defaultArgs,
  size: "xs",
};
