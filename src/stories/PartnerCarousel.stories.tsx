import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";

import { PartnerCarousel, PartnerCarouselProps } from "../components";

export default {
  title: "Slideshow/PartnerCarousel",
  component: PartnerCarousel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    partners: {
      control: false,
    },
  },
} as Meta<typeof PartnerCarousel>;

const Template: StoryFn<typeof PartnerCarousel> = (args) => <PartnerCarousel {...args} />;

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
Default.args = {
  ...defaultArgs,
};
