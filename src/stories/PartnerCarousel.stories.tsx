import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { PartnerCarousel } from "../components";

export default {
  title: "Slideshow/PartnerCarousel",
  component: PartnerCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    partners: {
      control: false,
    },
  },
} as Meta<typeof PartnerCarousel>;

type Story = StoryObj<typeof PartnerCarousel>;

const PngStyled = styled.img`
  width: 100%;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const TestImg = <PngStyled src="/assets/kuka-logo.png" alt="kuka logo" />;

export const Default: Story = {
  args: {
    title: "Partners",
    partners: Array(10).fill(TestImg),
  },
};
