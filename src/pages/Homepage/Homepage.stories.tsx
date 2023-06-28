import { type Meta, type StoryObj } from "@storybook/react";

import {
  type FooterProps,
  type HeaderProps,
  type HeroCarouselProps,
  type PartnerCarouselProps,
  type StripThreeColsProps,
} from "~components";
import { Default as Footer } from "~components/Footer/Footer.stories";
import { Transparent as Header } from "~components/Header/Header.stories";
import { Default as HeroCarousel } from "~components/HeroCarousel/HeroCarousel.stories";
import { Default as PartnerCarousel } from "~components/PartnerCarousel/PartnerCarousel.stories";
import { MainItemLarge as StripThreeCols } from "~components/StripThreeCols/StripThreeCols.stories";

import Homepage from "./Homepage";

export default {
  title: "Pages/Home",
  component: Homepage,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Homepage>;

type Story = StoryObj<typeof Homepage>;

export const Default: Story = {
  args: {
    headerProps: Header.args as HeaderProps,
    heroCarouselProps: HeroCarousel.args as HeroCarouselProps,
    stripThreeColsProps: StripThreeCols.args as StripThreeColsProps,
    partnerCarouselProps: PartnerCarousel.args as PartnerCarouselProps,
    footerProps: Footer.args as FooterProps,
  },
};
