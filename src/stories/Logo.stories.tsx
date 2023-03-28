import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo, LogoProps } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.color === "white" ? "primary" : "light"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as ComponentMeta<typeof Logo>;

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
