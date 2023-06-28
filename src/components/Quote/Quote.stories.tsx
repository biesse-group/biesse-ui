import { type Meta, type StoryObj } from "@storybook/react";

import { Quote } from "./Quote";

export default {
  title: "Display/Quote",
  component: Quote,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Quote>;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    citation:
      "Il nuovo mandrino ES951 e la piattaforma My HSD sono un connubio ad alta performance perché andiamo ad unire quella che è la performance del mandrino alla possibilità di andare a rilevare tutti i dati che questo può trasmettere a distanza, dando la possibilità di monitorare in tempo reale tutto quello che sta succedendo sul mandrino",
    authorName: "John Doe",
    authorDescription: "UTE/Service Manager A.C.M.E. spa",
  },
};
