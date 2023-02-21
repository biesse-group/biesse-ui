import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "../components";
import { InputDecorator } from "./decorators/InputDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <InputDecorator shadow={args.shadow}>
        <Story />
      </InputDecorator>
    ),
  ],
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DarkBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkBackground.args = {
  placeholder: "Name",
};

export const LightBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightBackground.args = {
  placeholder: "Name",
  shadow: "light",
};
