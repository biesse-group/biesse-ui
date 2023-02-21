import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SearchBar } from "../components/SearchBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Inputs/SearchBar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

const defaultArgs = {
  defaultValue: "Default Value",
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
