import { type Meta, type StoryObj } from "@storybook/react";

import { Button, MenuPanel, SearchBar } from "~components";
import { BackgroundDecorator } from "~stories/decorators";

const meta: Meta = {
  component: MenuPanel,
  title: "Layout/MenuPanel",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MenuPanel>;

export const Primary: Story = {
  args: {
    title: "Macrocategoria",
    items: [
      { label: "Famiglie di prodotto", id: "product-families" },
      { label: "Materiale", id: "material" },
    ],
    extra: <SearchBar />,
    onClose: () => {},
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    items: [
      { id: "metal", label: "Metallo" },
      { id: "wood", label: "Legno" },
      { id: "glass", label: "Vetro" },
      { id: "stone", label: "Pietra" },
      { id: "composite", label: "Compositi" },
    ],
    title: "Materiale",
    variant: "secondary",
    extra: (
      <Button variant="primary" size="large">
        Visualizza tutti
      </Button>
    ),
  },
};

const icon = <img src="https://dummyimage.com/50x50/cecece/ffffff" alt="Dummy" />;

export const Light: Story = {
  args: {
    ...Secondary.args,
    items: [
      { id: "elettromandrini", label: "Elettromandrini", icon },
      { id: "teste-a-1-e-2-assi", label: "Teste a 1 e 2 assi", icon },
      { id: "asse-c", label: "Asse C", icon },
      { id: "aggregati", label: "Aggregati", icon },
      { id: "elettromandrini-mt", label: "Elettromandrini MT", icon },
      { id: "foratrici", label: "Foratrici", icon },
      { id: "gruppi-multifunzione", label: "Gruppi multifunzione", icon },
      { id: "smart-motors", label: "Smart Motors", icon },
    ],
    variant: "light",
    title: "Famiglie di prodotto",
  },
};

export const White: Story = {
  args: {
    ...Secondary.args,
    items: [
      { id: "es7-line", label: "ES7 Line" },
      { id: "es8-line-s", label: "ES8 Line S" },
    ],
    variant: "white",
    title: "Linee di prodotto",
    extra: undefined,
  },
  decorators: [
    (Story) => (
      <BackgroundDecorator background="light" fullScreen>
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {
    ...Primary.args,
    items: [
      { id: "company", label: "Azienda" },
      { id: "products", label: "Prodotti" },
      { id: "case-history", label: "Case History" },
      { id: "news-and-events", label: "News ed eventi" },
      { id: "divider-1", divider: true },
      { id: "careers", label: "Carriere", small: true },
      { id: "contacts", label: "Contatti", small: true },
    ],
    variant: "dark",
    width: "360px",
    title: undefined,
  },
  decorators: [
    (Story) => (
      <BackgroundDecorator background="light" fullScreen>
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export const ActiveItem: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    activeItem: "material",
  },
};

export const WithBackButton: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    onBack: () => {},
  },
};
