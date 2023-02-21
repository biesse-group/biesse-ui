import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "../components";
import { BackgroundDecorator } from "./decorators/BackgroundDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
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
};

export const WithButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButton.args = {
  placeholder: "Name",
  shadow: "dark",
  submitLabel: "Send",
  onSubmit: () => {},
};
