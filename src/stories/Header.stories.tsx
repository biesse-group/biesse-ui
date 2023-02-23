import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header, HeaderProps } from "../components";
import { Logo } from "../components/logos";

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
  logo: () => <Logo name="HSD" width="482px" color="white" />,
  navIcons: [
    { icon: "careers", label: "Carriere", url: "/" },
    { icon: "contacts", label: "Contatti", url: "/" },
    { icon: "search", label: "Ricerca", url: "/" },
    { icon: "country", label: "Italia", url: "/" },
  ],
  navLinks: [
    { label: "Azienda", url: "/" },
    { label: "Prodotti", url: "/" },
    { label: "Servizi", url: "/" },
    { label: "Case History", url: "/" },
    { label: "HSD nel mondo", url: "/" },
    { label: "News ed eventi", url: "/" },
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
