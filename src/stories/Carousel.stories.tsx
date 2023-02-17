import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { CSSProperties } from "react";

import { Carousel } from "../components/Carousel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Carousel",
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

const style: CSSProperties = {
  width: "100%",
  height: "auto",
};

export const Default = Template.bind(
  {},
  {
    slides: [
      <img style={style} src="https://dummyimage.com/1920x1080/c7c7c7/ffffff" alt="slide-1" />,
      <img style={style} src="https://dummyimage.com/1920x1080/b7b7b7/ffffff" alt="slide-2" />,
      <img style={style} src="https://dummyimage.com/1920x1080/a7a7a7/ffffff" alt="slide-3" />,
    ],
  }
);
