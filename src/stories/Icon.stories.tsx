import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon, IconProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    controls: {
      exclude: ["onClick"],
    },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

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
