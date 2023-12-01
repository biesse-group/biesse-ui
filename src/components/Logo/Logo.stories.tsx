import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "~stories/decorators";

import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Display/Logo",
  component: Logo,
  tags: ["autodocs"],
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
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    name: "HSD",
    color: "primary",
    title:
      "HSD Mechatronics – elettromandrini, teste di fresatura e componenti per lavorare i metalli",
  },
};

export const White: Story = {
  args: {
    ...Primary.args,
    color: "white",
  },
};
