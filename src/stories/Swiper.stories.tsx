import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { CSSProperties } from "react";

import { Swiper } from "../components/Swiper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Swiper",
  component: Swiper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Swiper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Swiper> = (args) => <Swiper {...args} />;

const style: CSSProperties = {
  width: 1200,
  height: 700,
};

export const Default = Template.bind(
  {},
  {
    slides: [
      <div style={{ ...style, background: "red" }}></div>,
      <div style={{ ...style, background: "blue" }}></div>,
      <div style={{ ...style, background: "green" }}></div>,
    ],
  }
);
