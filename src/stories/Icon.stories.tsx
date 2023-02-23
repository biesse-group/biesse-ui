import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon, IconProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const defaultArgs: IconProps = {
  name: "place-holder",
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "small",
};
