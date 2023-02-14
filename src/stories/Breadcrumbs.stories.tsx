import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Breadcrumbs } from "../components/Breadcrumbs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Breadcrumbs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

const defaultArgs = {
  links: [
    {
      title: "Enabled link",
      path: "/",
    },
    {
      title: "Disabled nested link",
      disabled: true,
    },
    {
      title: "Current Location Name",
    },
  ],
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  ...defaultArgs,
  size: "small",
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  ...defaultArgs,
  size: "medium",
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  ...defaultArgs,
  size: "large",
};
