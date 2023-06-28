import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { BackgroundDecorator } from "~stories/decorators";

import { Input } from "./Input";

export default {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  argTypes: {
    onChange: {
      control: false,
    },
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.shadow === "light" ? "light" : "primary"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const DarkBackground: Story = {
  args: {
    placeholder: "Name",
    shadow: "dark",
  },
};

export const LightBackground: Story = {
  args: {
    ...DarkBackground.args,
    shadow: "light",
    border: true,
  },
};

export const WithButton: Story = {
  args: {
    ...DarkBackground.args,
    withButton: {
      label: "Send",
    },
  },
};

export const Filled: Story = {
  args: {
    ...DarkBackground.args,
    testId: "input",
    withButton: {
      label: "Send",
      testId: "submit",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("input"), "John Doe", { delay: 100 });
    await userEvent.click(canvas.getByTestId("submit"));
  },
};
