import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";
import styled from "styled-components";

// import { useTheme } from "styled-components";
import {
  Button,
  MaterialTag, // MaterialTag,
  ProductCarousel,
  ProductCarouselProps,
  Text,
  Title,
} from "../components";

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
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProductCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCarousel<SampleProduct>> = (args) => (
  <ProductCarousel {...args} />
);

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

const SampleProductDetail: FC<{ product: SampleProduct }> = ({ product }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title variant="H3" style={{ margin: 0 }}>
          {product.code}
        </Title>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <Button variant="outline">Dettagli</Button>
          <div style={{ width: 15 }}></div>
          <Button variant="outline">Confronta</Button>
        </div>
      </div>
      <Text tag="p" color="primary" style={{ marginTop: 15 }}>
        {product.name}
      </Text>
      <Text tag="p" style={{ marginTop: 12 }}>
        {product.description}
      </Text>
      <TagList>
        {product.tags.map((tag) => (
          <MaterialTag material={tag} />
        ))}
      </TagList>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "New products",
  items,
  renderTitle: (item) => item.code,
  renderImage: (item) => (
    <img src={item.imageUrl} alt={item.code} style={{ maxWidth: "100%", maxHeight: "100%" }} />
  ),
  renderDetail: (item) => <SampleProductDetail product={item} />,
} as ProductCarouselProps<SampleProduct>;
