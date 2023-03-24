import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Textarea } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator
        maxWidth={500}
        background={args.shadow === "light" ? "light" : "primary"}
      >
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  placeholder: "Type something...",
};

export const LightBackground = Template.bind({});
LightBackground.args = {
  placeholder: "Type something...",
  shadow: "light",
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: "Type something...",
  testId: "textarea",
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("textarea"), "In ut quam vitae odio", { delay: 50 });
};
