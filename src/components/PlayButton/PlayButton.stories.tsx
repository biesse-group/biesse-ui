import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { BackgroundDecorator } from "~stories/decorators";

import { PlayButton } from "./PlayButton";

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

type Story = StoryObj<typeof PlayButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    testId: "primary-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("primary-button"));
  },
};

export const Inverted: Story = {
  args: {
    variant: "inverted",
  },
  parameters: {
    layout: "fullscreen",
  },
};
