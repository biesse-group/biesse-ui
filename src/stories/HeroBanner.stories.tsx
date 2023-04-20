import { Meta, StoryObj } from "@storybook/react";

import { Button, HeroBanner } from "../components";

export default {
  title: "Slideshow/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<typeof HeroBanner>;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    image: <img src="https://dummyimage.com/1920x1080/cccccc/ffffff.png" alt="" />,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};

export const WithChildren: Story = {
  args: {
    image: <img src="https://dummyimage.com/1920x1080/cccccc/ffffff.png" alt="" />,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: (
      <div style={{ marginTop: 40 }}>
        <Button variant="primary-inverted">More...</Button>
      </div>
    ),
  },
};
