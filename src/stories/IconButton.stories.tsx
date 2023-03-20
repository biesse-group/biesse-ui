import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { IconButton } from "../components";
import { BackgroundDecorator } from "./decorators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
    controls: {
      exclude: ["onClick"],
    },
  },
  decorators: [
    (Story, { args }) => (
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
    ),
  ],
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: "careers",
  variant: "primary",
  "aria-label": "Example button",
  testId: "primary-icon-button",
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("primary-icon-button"));
};

export const PrimaryInverted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryInverted.args = {
  icon: "arrow-right",
  variant: "primary-inverted",
  "aria-label": "Example button",
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  icon: "arrow-right",
  variant: "light",
  "aria-label": "Example button",
};
