import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header, HeaderProps } from "../components";
import { Logo } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Navigation/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "grey" }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const defaultArgs: HeaderProps = {
  logo: <Logo name="HSD" width="482px" color="white" />,
  navIcons: [
    { icon: "careers", label: "Carriere", renderLink: (x) => <a href="/">{x}</a> },
    { icon: "contacts", label: "Contatti", renderLink: (x) => <a href="/">{x}</a> },
    { icon: "search", label: "Ricerca", renderLink: (x) => <a href="/">{x}</a> },
    { icon: "country", label: "Italia", renderLink: (x) => <a href="/">{x}</a> },
  ],
  navLinks: [
    { label: "Azienda", renderLink: (x) => <a href="/">{x}</a> },
    { label: "Prodotti", renderLink: (x) => <a href="/">{x}</a> },
    { label: "Servizi", renderLink: (x) => <a href="/">{x}</a> },
    { label: "Case History", renderLink: (x) => <a href="/">{x}</a> },
    { label: "HSD nel mondo", renderLink: (x) => <a href="/">{x}</a> },
    { label: "News ed eventi", renderLink: (x) => <a href="/">{x}</a> },
  ],
  variant: "transparent",
};

export const Transparent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Transparent.args = {
  ...defaultArgs,
};

export const Colored = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colored.args = {
  ...defaultArgs,
  variant: "colored",
};
