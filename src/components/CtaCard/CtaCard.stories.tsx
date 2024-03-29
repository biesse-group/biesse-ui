import { type Meta, type StoryObj } from "@storybook/react";
import "dayjs/locale/it";
import styled, { css } from "styled-components";

import { mqUntil } from "~styles/media-queries";

import { CtaCard } from "./CtaCard";

const StoryContainer = styled.div`
  max-width: 600px;
  ${mqUntil(
    "md",
    css`
      height: 96px;
      max-width: 360px;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      height: 84px;
    `
  )}
`;

export default {
  title: "Cards/CtaCard",
  component: CtaCard,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
} as Meta<typeof CtaCard>;

type Story = StoryObj<typeof CtaCard>;

const PngContainer = styled.div`
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  background-color: ${(props) => props.theme.color.secondary};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TestImg = (
  <PngContainer>
    <img
      src="/assets/product-carousel-2.png"
      alt="product"
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    />
  </PngContainer>
);

export const WithTitle: Story = {
  args: {
    variant: "with-title",
    title: "ES951",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    image: TestImg,
    buttonLabel: "Scopri",
  },
};

const PngLogoStyled = styled.img`
  max-height: 100%;
  max-width: 100%;
  padding: 10px 10px 10px 30px;

  ${mqUntil(
    "md",
    css`
      padding: 20px;
    `
  )}
`;

const TestLogo = <PngLogoStyled src="/assets/kuka-logo.png" alt="kuka logo" />;

export const FullImage: Story = {
  args: {
    variant: "full-image",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa...",
    image: TestLogo,
    buttonLabel: "Scopri",
  },
};
