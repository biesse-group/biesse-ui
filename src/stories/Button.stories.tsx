import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "../components/Button";
import { BackgroundDecorator } from "./decorators";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator
        maxWidth="100%"
        background={
          args.variant === "outline-inverted" || args.variant === "primary-inverted"
            ? "primary"
            : "light"
        }
      >
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    testId: "primary-button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    disabled: true,
  },
};

export const PrimaryInverted: Story = {
  args: {
    variant: "primary-inverted",
    children: "Primary inverted",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const OutlineInverted: Story = {
  args: {
    variant: "outline-inverted",
    children: "Outline inverted",
  },
};

export const Small: Story = {
  args: {
    variant: "outline",
    size: "small",
    children: "Small",
  },
};

export const Block: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    children: "Block",
    isBlock: true,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "outline",
    children: "Download catalog",
    rightIcon: "download",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "outline",
    children: "Download catalog",
    leftIcon: "download",
  },
};

export const PrimaryNaked: Story = {
  args: {
    variant: "primary-naked",
    children: "Naked",
    leftIcon: "chevron-left",
  },
};

export const Clicked: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("primary-button"));
  },
};
