import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { BackgroundDecorator } from "~stories/decorators";

import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Inputs/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { parameters }) => (
      <BackgroundDecorator background={parameters.background || "primary"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Search something...",
  },
};

export const DarkBackground: Story = {
  parameters: {
    background: "dark",
  },
};

export const Searched: Story = {
  args: {
    testId: "sample-search",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("sample-search"), "John Doe", { delay: 100 });
  },
};
