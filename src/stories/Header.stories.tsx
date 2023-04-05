import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header, HeaderProps } from "../components";
import { Logo } from "../components";

export default {
  title: "Navigation/Header",
  component: Header,
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

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

export const Transparent = Template.bind({});
Transparent.args = {
  ...defaultArgs,
};

export const Colored = Template.bind({});
Colored.args = {
  ...defaultArgs,
  variant: "colored",
};
