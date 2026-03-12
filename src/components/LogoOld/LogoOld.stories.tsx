import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "~stories/decorators";

import { LogoOld } from "./LogoOld";

export default {
  title: "Display/LogoOld",
  component: LogoOld,
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
} as Meta<typeof LogoOld>;

type Story = StoryObj<typeof LogoOld>;

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
