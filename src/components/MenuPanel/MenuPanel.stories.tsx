import { type Meta, type StoryObj } from "@storybook/react";

import { BackgroundDecorator } from "../../stories/decorators";
import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { MenuPanel } from "./MenuPanel";

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
    items: [{ label: "Famiglie di prodotto" }, { label: "Tecnologia" }],
    extra: <SearchBar />,
    onClose: () => {},
    variant: "primary",
    width: "500px",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    items: [
      { label: "Metallo" },
      { label: "Legno" },
      { label: "Vetro" },
      { label: "Pietra" },
      { label: "Compositi" },
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
      { label: "Elettromandrini", icon },
      { label: "Teste a 1 e 2 assi", icon },
      { label: "Asse C", icon },
      { label: "Aggregati", icon },
      { label: "Elettromandrini MT", icon },
      { label: "Foratrici", icon },
      { label: "Gruppi multifunzione", icon },
      { label: "Smart Motors", icon },
    ],
    variant: "light",
    title: "Famiglie di prodotto",
  },
};

export const White: Story = {
  args: {
    ...Secondary.args,
    items: [{ label: "ES7 Line" }, { label: "ES8 Line S" }],
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
      { label: "Azienda" },
      { label: "Prodotti" },
      { label: "Case History" },
      { label: "News ed eventi" },
      { divider: true },
      { label: "Carriere", small: true },
      { label: "Contatti", small: true },
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
