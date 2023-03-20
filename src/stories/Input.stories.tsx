import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Input } from "../components";
import { BackgroundDecorator } from "./decorators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
    controls: {
      exclude: ["onChange", "type", "withButton"],
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DarkBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkBackground.args = {
  placeholder: "Name",
  shadow: "dark",
};

export const LightBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightBackground.args = {
  placeholder: "Name",
  shadow: "light",
  border: true,
};

export const WithButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButton.args = {
  placeholder: "Name",
  withButton: {
    label: "Send",
  },
};

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
