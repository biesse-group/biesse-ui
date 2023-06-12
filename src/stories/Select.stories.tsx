import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { FC, useState } from "react";

import { Select, SelectProps } from "../components/Select";
import { BackgroundDecorator } from "./decorators";
import { sleep } from "./utils/sleep";

const SelectWrapper: FC<SelectProps> = ({ value: defaultValue, ...props }) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  return <Select {...props} value={selected} onChange={setSelected} />;
};

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
  render: (args) => <SelectWrapper {...args} />,
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
    userEvent.selectOptions(select, ["Option 1"]);

    await sleep(1000);
    userEvent.selectOptions(select, ["Option 2"]);

    await sleep(1000);
    userEvent.selectOptions(select, ["Option 3"]);
  },
};
