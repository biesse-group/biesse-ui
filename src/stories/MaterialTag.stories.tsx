import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { MaterialTag } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/MaterialTag",
  component: MaterialTag,
} as ComponentMeta<typeof MaterialTag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MaterialTag> = (args) => <MaterialTag {...args} />;

export const Stone = Template.bind({});
Stone.args = {
  material: "stone",
  testId: "action-button",
};

Stone.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("action-button"));
};

export const Metal = Template.bind({});
Metal.args = {
  material: "metal",
};

export const Composite = Template.bind({});
Composite.args = {
  material: "composite",
};

export const Wood = Template.bind({});
Wood.args = {
  material: "wood",
};

export const Glass = Template.bind({});
Glass.args = {
  material: "glass",
};

export const Translated = Template.bind({});
Translated.args = {
  material: "stone",
  translateLanguage: () => {
    return "pietra";
  },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  material: "stone",
  border: true,
};
