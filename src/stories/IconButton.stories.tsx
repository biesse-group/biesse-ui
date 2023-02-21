import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconButton } from "../components";
import ArrowRight from "../icons/ArrowRight";
import { BackgroundDecorator } from "./decorators/BackgroundDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => {
      return (
        <BackgroundDecorator
          background={
            args.variant === "primary"
              ? "light"
              : args.variant === "primary-inverted"
              ? "primary"
              : "dark"
          }
        >
          <Story />
        </BackgroundDecorator>
      );
    },
  ],
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: <ArrowRight />,
  variant: "primary",
  "aria-label": "Example button",
};

export const PrimaryInverted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryInverted.args = {
  icon: <ArrowRight />,
  variant: "primary-inverted",
  "aria-label": "Example button",
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  icon: <ArrowRight />,
  variant: "light",
  "aria-label": "Example button",
};
