import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Select, SelectOption } from "../components";
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

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

const options: SelectOption[] = [
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
];

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  placeholder: "Select something",
  options,
  shadow: "dark",
  "aria-label": "Example select",
};

export const LightBackground = Template.bind({});
LightBackground.args = {
  placeholder: "Select something",
  options,
  shadow: "light",
  "aria-label": "Example select",
};

export const Selected = Template.bind({});
Selected.args = {
  placeholder: "Select something",
  options,
  shadow: "dark",
  "aria-label": "Example select",
  testId: "select",
};
Selected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByTestId("select");

  await sleep(1000);
  await userEvent.selectOptions(select, ["Option 1"]);

  await sleep(1000);
  await userEvent.selectOptions(select, ["Option 2"]);

  await sleep(1000);
  await userEvent.selectOptions(select, ["Option 3"]);
};
