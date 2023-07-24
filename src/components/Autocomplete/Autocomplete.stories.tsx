import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "~stories/decorators";

import { Autocomplete } from "./Autocomplete";

export default {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background="primary">
        <Story {...args} />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    suggestions: ["lorem", "ipsum", "dolor", "sit", "amet", "lord", "laravel"],
  },
};
