import { Meta, StoryObj } from "@storybook/react";

import {
  FooterProps,
  HeaderProps,
  HeroCarouselProps,
  PartnerCarouselProps,
  StripThreeColsProps,
} from "../../../components";
import { Default as Footer } from "../../Footer.stories";
import { Transparent as Header } from "../../Header.stories";
import { Default as HeroCarousel } from "../../HeroCarousel.stories";
import { Default as PartnerCarousel } from "../../PartnerCarousel.stories";
import { MainItemLarge as StripThreeCols } from "../../StripThreeCols.stories";
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
