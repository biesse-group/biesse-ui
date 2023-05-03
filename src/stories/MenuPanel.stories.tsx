import { Meta, StoryObj } from "@storybook/react";

import { Button, MenuPanel, SearchBar } from "../components";
import { BackgroundDecorator } from "./decorators";

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
    title: "Ricerca prodotti per",
    items: [{ label: "Materiale" }, { label: "Tecnologia" }, { label: "Applicazioni" }],
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
    title: undefined,
    variant: "secondary",
    extra: (
      <Button variant="primary" size="large">
        Visualizza tutti
      </Button>
    ),
  },
};

const icon = <img src="https://dummyimage.com/50x50/cecece/ffffff" alt="Dummy" />;

export const White: Story = {
  args: {
    ...Primary.args,
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
    variant: "white",
    title: undefined,
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
