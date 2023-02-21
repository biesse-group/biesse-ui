import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from "../components";
import { BackgroundDecorator } from "./decorators/BackgroundDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator shadow={args.shadow}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
  {
    label: "Option 1",
    value: 1,
  },
  {
    label: "Option 2",
    value: 2,
  },
];

export const DarkBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkBackground.args = {
  placeholder: "Select something",
  options,
};

export const LightBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightBackground.args = {
  placeholder: "Select something",
  options,
  shadow: "light",
};
