import { Meta, StoryObj } from "@storybook/react";

import { Header, HeaderProps, Logo } from "../components";

export default {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    logo: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "grey" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

const defaultArgs: HeaderProps = {
  logo: <Logo name="HSD" />,
  navIcons: [
    { icon: "careers", label: "Carriere", renderLink: (x) => <a href="/">{x}</a> },
    { icon: "contacts", label: "Contatti", renderLink: (x) => <a href="/">{x}</a> },
    { icon: "search", label: "Ricerca", renderLink: (x) => <a href="/">{x}</a> },
    {
      icon: "country",
      label: "Italia",
      onMobileHeader: true,
      renderLink: (x) => <a href="/">{x}</a>,
    },
  ],
  navLinks: [
    { label: "Azienda", isSelected: true, renderLink: (x) => <a href="/">{x}</a> },
    { label: "Prodotti", renderLink: (x) => <a href="/">{x}</a> },
    { label: "Servizi", renderLink: (x) => <a href="/">{x}</a> },
    { label: "Case History", renderLink: (x) => <a href="/">{x}</a> },
    { label: "HSD nel mondo", renderLink: (x) => <a href="/">{x}</a> },
    { label: "News ed eventi", renderLink: (x) => <a href="/">{x}</a> },
  ],
  variant: "transparent",
};

export const Transparent: Story = {
  args: defaultArgs,
};

export const Colored: Story = {
  args: {
    ...defaultArgs,
    variant: "colored",
  },
};
