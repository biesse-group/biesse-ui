import { Meta, StoryFn } from "@storybook/react";

import { ImageGallery } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ImageGallery> = (args) => <ImageGallery {...args} />;

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

export const Default = Template.bind({});
Default.args = {
  images: [image, image, image],
};
