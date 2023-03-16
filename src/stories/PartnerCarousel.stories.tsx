import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";

import { PartnerCarousel, PartnerCarouselProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Slideshow/PartnerCarousel",
  component: PartnerCarousel,
  parameters: {
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PartnerCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PartnerCarousel> = (args) => <PartnerCarousel {...args} />;

const PngStyled = styled.img`
  width: 100%;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const TestImg = <PngStyled src="/assets/kuka-logo.png" alt="kuka logo" />;

const defaultArgs: PartnerCarouselProps = {
  title: "Partners",
  partners: Array(10).fill(TestImg),
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
