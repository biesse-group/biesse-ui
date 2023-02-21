import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Header, HeaderProps } from "../modules";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modules/Header",
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
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const defaultArgs: HeaderProps = {
  logo: <img src={`/dummy-logo-285X35.png`} alt="dummy" />,
  navIcons: [
    { icon: "placeholder", label: "Carrieres", url: "/" },
    { icon: "placeholder", label: "Contatti", url: "/" },
    { icon: "placeholder", label: "Ricerca", url: "/" },
    { icon: "placeholder", label: "Italia", url: "/" },
  ],
  navLinks: [
    { label: "Azienda", url: "/" },
    { label: "Prodotti", url: "/" },
    { label: "Servizi", url: "/" },
    { label: "Case History", url: "/" },
    { label: "HSD nel mondo", url: "/" },
    { label: "News ed eventi", url: "/" },
  ],
  version: "transparent",
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
  logo: <img src={`/dummy-logo-345X25.png`} alt="dummy" />,
  version: "colored",
};
