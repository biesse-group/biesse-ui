import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Textarea } from "../components";
import { BackgroundDecorator } from "./decorators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen",
    controls: {
      exclude: ["onChange"],
    },
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const DarkBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkBackground.args = {
  placeholder: "Type something...",
};

export const LightBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightBackground.args = {
  placeholder: "Type something...",
  shadow: "light",
};

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  placeholder: "Type something...",
  testId: "textarea",
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("textarea"), "In ut quam vitae odio", { delay: 50 });
};
