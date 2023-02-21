import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline",
};

export const Small = Template.bind({});
Small.args = {
  variant: "outline",
  size: "small",
  children: "Small",
};

export const Block = Template.bind({});
Block.args = {
  variant: "primary",
  children: "Block",
  isBlock: true,
};
