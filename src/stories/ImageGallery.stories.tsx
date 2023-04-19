import { Meta, StoryObj } from "@storybook/react";

import { ImageGallery } from "../components";

export default {
  title: "Layout/ImageGallery",
  component: ImageGallery,
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story, { args }) => <div style={{ margin: "30px 0" }}>{Story()}</div>],
} as Meta<typeof ImageGallery>;

type Story = StoryObj<typeof ImageGallery>;

const image = (
  <div
    style={{
      width: "100%",
      background: 'url("https://dummyimage.com/1080x1920/ccc/fff.png") center center',
      backgroundSize: "cover",
      height: "250px",
    }}
  />
);

export const Default: Story = {
  args: {
    images: [image, image, image],
  },
};
