import { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import styled, { css } from "styled-components";

import { Button, ProductCarousel, Tag, Text, Title } from "../components";
import { mqUntil } from "../styles/media-queries";

type SampleProductTag = "stone" | "metal" | "glass" | "wood" | "composite";

interface SampleProduct {
  code: string;
  name: string;
  description: string;
  tags: SampleProductTag[];
  imageUrl: string;
}

export default {
  title: "Slideshow/ProductCarousel",
  component: ProductCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof ProductCarousel>;

type Story = StoryObj<typeof ProductCarousel<SampleProduct>>;

const items: SampleProduct[] = [
  {
    code: "ES796",
    name: "Testate a 2 assi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.",
    tags: ["stone", "composite"],
    imageUrl: "assets/product-carousel-1.png",
  },
  {
    code: "AB564",
    name: "Pellentesque egestas neque",
    description:
      "Sed aliquam ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius. Aenean vulputate eleifend tellus. Etiam vitae tortor.",
    tags: ["wood", "metal", "stone"],
    imageUrl: "assets/product-carousel-2.png",
  },
  {
    code: "FR999",
    name: "Nam quam nunc blandit",
    description:
      "Curabitur nisi.. Aenean ut eros et nisl sagittis vestibulum. Nulla facilisi. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    tags: ["glass"],
    imageUrl: "assets/product-carousel-3.png",
  },
  {
    code: "KK765",
    name: "Nam quam nunc blandit",
    description:
      "Curabitur nisi.. Aenean ut eros et nisl sagittis vestibulum. Nulla facilisi. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    tags: ["glass"],
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },
];

const TagList = styled.div`
  margin-top: 20px;

  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;

  > button:not(:last-child) {
    margin-right: 20px;
  }

  ${mqUntil(
    "sm",
    css`
      order: 100;
      margin-left: 0;
      margin-top: 30px;
      flex: 0 0 100%;

      > button {
        flex: 1 1 50%;
      }
    `
  )}
`;

const SampleProductDetail: FC<{ product: SampleProduct }> = ({ product }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Title variant="H3" color="primary" style={{ margin: 0 }}>
        {product.code}
      </Title>
      <ButtonContainer>
        <Button variant="outline">Dettagli</Button>
        <Button variant="outline">Confronta</Button>
      </ButtonContainer>
      <Text tag="p" color="primary" style={{ marginTop: 15, flex: "0 0 100%" }}>
        {product.name}
      </Text>
      <Text tag="p" style={{ marginTop: 12 }}>
        {product.description}
      </Text>
      <TagList>
        {product.tags.map((tag, index) => (
          <Tag key={index} color={tag} icon={`material-${tag}`}>
            {tag}
          </Tag>
        ))}
      </TagList>
    </div>
  );
};

export const Default: Story = {
  args: {
    title: "New products",
    items,
    contentHeight: 300,
    renderTitle: (item) => item.code,
    renderImage: (item) => (
      <img src={item.imageUrl} alt={item.code} style={{ maxWidth: "100%", maxHeight: "100%" }} />
    ),
    renderDetail: (item) => <SampleProductDetail product={item} />,
  },
};
