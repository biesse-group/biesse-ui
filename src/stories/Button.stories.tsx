import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "../components/Button";
import { BackgroundDecorator } from "./decorators";

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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

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

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: "outline",
  children: "Download catalog",
  leftIcon: "download",
};

export const WithLeftIconNaked = Template.bind({});
WithLeftIconNaked.args = {
  variant: "primary-naked",
  children: "Naked",
  leftIcon: "chevron-left",
};
