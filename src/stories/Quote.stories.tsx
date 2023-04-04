import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Quote } from "../components";

export default {
  title: "components/Quote",
  component: Quote,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
  citation:
    "Il nuovo mandrino ES951 e la piattaforma My HSD sono un connubio ad alta performance perché andiamo ad unire quella che è la performance del mandrino alla possibilità di andare a rilevare tutti i dati che questo può trasmettere a distanza, dando la possibilità di monitorare in tempo reale tutto quello che sta succedendo sul mandrino",
  authorName: "John Doe",
  authorDescription: "UTE/Service Manager A.C.M.E. spa",
};
