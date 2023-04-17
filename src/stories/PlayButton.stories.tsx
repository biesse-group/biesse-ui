import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { PlayButton } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Buttons/PlayButton",
  component: PlayButton,
  tags: ["autodocs"],
  decorators: [
    (Story, { args }) =>
      args.variant === "inverted" ? (
        <BackgroundDecorator background="primary">{Story()}</BackgroundDecorator>
      ) : (
        Story()
      ),
  ],
} as Meta<typeof PlayButton>;

const Template: StoryFn<typeof PlayButton> = (args) => <PlayButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  testId: "primary-button",
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("primary-button"));
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: "inverted",
};
Inverted.parameters = {
  layout: "fullscreen",
};
