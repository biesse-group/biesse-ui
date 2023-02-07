import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Example card",
  children: "Lorem ipsum dolor sit amet.",
};

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  title: "Card with image",
  children: "Lorem ipsum dolor sit amet.",
  imageSrc: "https://dummyimage.com/600x400/ccc/fff.png",
  imageAlt: "Dummy image",
};
