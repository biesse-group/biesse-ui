import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Checkbox } from "../components";
import { BackgroundDecorator } from "./decorators";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator maxWidth="100%" background={"primary"}>
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    testId: "checkbox",
    label: "Checkbox",
    inputId: "checkbox-test",
  },
};

export const Clicked: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("checkbox"));
  },
};
