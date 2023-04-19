import { Meta, StoryObj } from "@storybook/react";

import { Footer, Logo, Text } from "../components";

export default {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logo: <Logo name="HSD" color="white" />,
    siteInfo: {
      iconName: "location",
      title: "HSD SpA",
      body: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text size="xs" color="light" font-weight="book">
            Sede Legale: Via della Meccanica 16 61122 Pesaro (Italy)
          </Text>
          <Text size="xs" color="light" font-weight="book">
            Sede Centrale: Via Pesaro, 10A 61012 Gradara (PU) - Italy
          </Text>
        </div>
      ),
    },
    contactsInfo: {
      iconName: "contacts",
      body: (
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
    extraInfo: [
      {
        title: "Assistenza telefonica:",
        lines: ["+39 0541 979010", "Fax: +39 0541 979050"],
      },
      {
        title: "Service Italia:",
        lines: [<a href="mailto:servicehsd@hsd.it">servicehsd@hsd.it</a>],
      },
    ],
    socialLink: {
      label: "Seguici",
      socialIcon: "linkedin",
    },

    leftLinksList: {
      title: "PROGETTI",
      links: ["UNO", "DUE", "TRE", "QUATTRO"].map((index) => ({
        label: `PROGETTO ${index}`,
      })),
    },
    rightLinksList: {
      title: "Servizi",
      links: ["UNO", "Due", "TRE", "QUATTRO", "CINQUE"].map((index) => ({
        label: `SERVIZIO ${index}`,
      })),
    },
  },
};
