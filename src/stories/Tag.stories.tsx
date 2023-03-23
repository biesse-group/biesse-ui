import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary tag",
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  color: "primary",
  children: "Tag with border",
  border: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  color: "primary",
  children: "Tag with icon",
  icon: "download",
};

export const Stone = Template.bind({});
Stone.args = {
  color: "stone",
  children: "Stone",
  icon: "material-stone",
};

export const Metal = Template.bind({});
Metal.args = {
  color: "metal",
  children: "Metal",
  icon: "material-metal",
};

export const Composite = Template.bind({});
Composite.args = {
  color: "composite",
  children: "Composite",
  icon: "material-composite",
};

export const Wood = Template.bind({});
Wood.args = {
  color: "wood",
  children: "Wood",
  icon: "material-wood",
};

export const Glass = Template.bind({});
Glass.args = {
  color: "glass",
  children: "Glass",
  icon: "material-glass",
};
