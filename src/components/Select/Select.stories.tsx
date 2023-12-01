import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { type FC, useState } from "react";

import { BackgroundDecorator } from "~stories/decorators";
import { sleep } from "~stories/utils/sleep";

import { Select, type SelectProps } from "./Select";

const SelectWrapper: FC<SelectProps> = ({ value: defaultValue, ...props }) => {
  const [selected, setSelected] = useState<string>(defaultValue ?? "");

  return <Select {...props} value={selected} onChange={setSelected} />;
};

const meta: Meta<typeof Select> = {
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
};

export default meta;

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

export const Error: Story = {
  args: {
    ...DarkBackground.args,
    error: "Something bad happened",
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
