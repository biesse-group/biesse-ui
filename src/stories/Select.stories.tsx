import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Select } from "../components";
import { BackgroundDecorator } from "./decorators";
import { sleep } from "./utils/sleep";

export default {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.shadow === "dark" ? "primary" : "light"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const DarkBackground: Story = {
  args: {
    placeholder: "Select something",
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
    shadow: "dark",
    "aria-label": "Example select",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select something",
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
    shadow: "dark",
    "aria-label": "Example select",
    disabled: true,
  },
};

export const LightBackground: Story = {
  args: {
    ...DarkBackground.args,
    shadow: "light",
  },
};

export const Selected: Story = {
  args: {
    ...DarkBackground.args,
    testId: "select",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByTestId("select");

    await sleep(1000);
    await userEvent.selectOptions(select, ["Option 1"]);

    await sleep(1000);
    await userEvent.selectOptions(select, ["Option 2"]);

    await sleep(1000);
    await userEvent.selectOptions(select, ["Option 3"]);
  },
};
