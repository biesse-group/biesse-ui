import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer, FooterProps } from "../components";
import { Logo, Text } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Navigation/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

const defaultArgs: FooterProps = {
  logo: <Logo name="HSD" width="235px" color="white" />,
  siteInfo: {
    iconName: "location",
    title: "HSD",
    contactsBody: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text size="xs" color="light" font-weight="book">
          SpA Sede Legale: Via della Meccanica 16 61122 Pesaro (Italy)
        </Text>
        <Text size="xs" color="light" font-weight="book">
          Sede Centrale: Via Pesaro, 10A 61012 Gradara (PU) - Italy
        </Text>
      </div>
    ),
  },
  contactsInfo: {
    iconName: "contacts",
    contactsBody: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text size="xs" color="light" font-weight="book">
          Tel. +39 0541/979001
        </Text>
        <Text size="xs" color="light" font-weight="book">
          Service: +39 0541/979010 - Fax +39 0541/979050{" "}
        </Text>
        <Text size="xs" color="light" font-weight="book">
          P.IVA: IT01376450415 | C.F. 02196600965
        </Text>
      </div>
    ),
  },
  contactsLocator: {
    title: "CONTATTI",
    render: <img src="https://dummyimage.com/300x140/ccc/fff.png" alt="dummy" />,
  },
  socialLink: {
    label: "Seguici",
    link: (
      <a href="/">
        <div style={{ height: "100%", width: "100%" }} />
      </a>
    ),
    socialIcon: "linkedin",
  },

  projectsLinks: {
    title: "PROGETTI",
    links: ["UNO", "DUE", "TRE", "QUATTRO"].map((index) => ({
      label: `PROGETTO ${index}`,
      linkComponent: (
        <a href="/">
          <div style={{ height: "100%", width: "100%" }} />
        </a>
      ),
    })),
  },
  servicesLinks: {
    title: "Servizi",
    links: ["UNO", "Due", "TRE", "QUATTRO", "CINQUE"].map((index) => ({
      label: `SERVIZIO ${index}`,
      linkComponent: (
        <a href="/">
          <div style={{ height: "100%", width: "100%" }} />
        </a>
      ),
    })),
  },
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
