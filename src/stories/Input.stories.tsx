import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Input } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  placeholder: "Name",
  shadow: "dark",
};

export const LightBackground = Template.bind({});
LightBackground.args = {
  placeholder: "Name",
  shadow: "light",
  border: true,
};

export const WithButton = Template.bind({});
WithButton.args = {
  placeholder: "Name",
  withButton: {
    label: "Send",
  },
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: "Name",
  shadow: "dark",
  testId: "input",
  withButton: {
    label: "Send",
    testId: "submit",
  },
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("input"), "John Doe", { delay: 100 });
  await userEvent.click(canvas.getByTestId("submit"));
};
