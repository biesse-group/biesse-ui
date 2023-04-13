import { ComponentMeta, ComponentStory } from "@storybook/react";
import "dayjs/locale/it";
import styled, { css } from "styled-components";

import { CtaCard } from "../components";
import { mqUntil } from "../styles/media-queries";

const StoryContainer = styled.div`
  max-width: 600px;
  height: 130px;
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
} as ComponentMeta<typeof CtaCard>;

const Template: ComponentStory<typeof CtaCard> = (args) => <CtaCard {...args} />;

const PngContainer = styled.div`
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  background-color: #98afd9;
  height: 100%;
  width: 200px;
`;

const PngStyled = styled.img`
  margin-bottom: -60px;
  width: 80%;
`;

const TestImg = (
  <PngContainer>
    <PngStyled src="/assets/product-carousel-2.png" alt="kuka logo" />
  </PngContainer>
);

export const WithTitle = Template.bind({});
WithTitle.args = {
  variant: "with-title",
  title: "ES951",
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  image: TestImg,
};

const PngLogoStyled = styled.img`
  width: 150px;
  margin-left: 20px;
`;

const TestLogo = <PngLogoStyled src="/assets/kuka-logo.png" alt="kuka logo" />;

export const FullImage = Template.bind({});
FullImage.args = {
  variant: "full-image",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa...",
  image: TestLogo,
};