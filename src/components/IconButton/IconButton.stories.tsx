import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { BackgroundDecorator } from "~stories/decorators";

import { IconButton } from "./IconButton";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator
        background={
          args.variant === "primary" || args.variant === "primary-naked"
            ? "light"
            : args.variant === "primary-inverted"
            ? "primary"
            : "dark"
        }
      >
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: "careers",
    variant: "primary",
    "aria-label": "Example button",
    testId: "primary-icon-button",
  },
};

export const PrimaryInverted: Story = {
  args: {
    icon: "arrow-right",
    variant: "primary-inverted",
    "aria-label": "Example button",
  },
};

export const Light: Story = {
  args: {
    icon: "arrow-right",
    variant: "light",
    "aria-label": "Example button",
  },
};

export const Naked: Story = {
  args: {
    icon: "arrow-right",
    variant: "primary-naked",
    "aria-label": "Example button",
  },
};

export const Clicked: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("primary-icon-button"));
  },
};
