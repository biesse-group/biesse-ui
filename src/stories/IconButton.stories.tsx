import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { IconButton } from "../components";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
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

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
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
PrimaryInverted.args = {
  icon: "arrow-right",
  variant: "primary-inverted",
  "aria-label": "Example button",
};

export const Light = Template.bind({});
Light.args = {
  icon: "arrow-right",
  variant: "light",
  "aria-label": "Example button",
};

export const Naked = Template.bind({});
Naked.args = {
  icon: "arrow-right",
  variant: "naked",
  "aria-label": "Example button",
};
