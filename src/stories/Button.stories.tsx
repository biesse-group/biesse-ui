import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "../components/Button";
import { BackgroundDecorator } from "./decorators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Button",
  component: Button,
  decorators: [
    (Story, { args }) =>
      args.variant === "primary-inverted" ? (
        <BackgroundDecorator background="primary">{Story()}</BackgroundDecorator>
      ) : (
        Story()
      ),
  ],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
  testId: "primary-button",
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("primary-button"));
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  variant: "primary-inverted",
  children: "Primary inverted",
};
PrimaryInverted.parameters = {
  layout: "fullscreen",
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

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: "outline",
  children: "Download catalog",
  rightIcon: "download",
};
