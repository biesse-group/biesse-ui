import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo, LogoProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Logo",
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "grey", padding: "50px" }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

const defaultArgs: LogoProps = {
  name: "HSD",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const White = Template.bind({});
White.args = {
  ...defaultArgs,
  color: "white",
};
